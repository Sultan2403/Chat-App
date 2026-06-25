import z from "zod";
import { SOCKET_EVENTS } from "../Config/constants";
import { Socket } from "socket.io";

export const validateIncomingEvent = <T>(
  schema: z.ZodSchema<T>,
  data: unknown,
  socket: Socket,
): T | undefined => {
  const result = schema.safeParse(data);
  // Once all data shapes are declared update this type to match.
  if (!result.success) {
    const firstIssue = result.error.issues[0];

    socket.emit(SOCKET_EVENTS.BAD_PAYLOAD, {
      field: firstIssue.path.join("."),
      error: firstIssue.message,
    });
    return;
  }

  return result.data;
};
