import { z } from "zod";
import { zObjectId } from "../Utils/utils";

export const NewMessageSchema = z.object({
  roomId: zObjectId(), 
  message: z.string().min(1).max(5000),
  senderId: zObjectId(),
});

// Automagic type generation
export type NewMessageType = z.infer<typeof NewMessageSchema>;
