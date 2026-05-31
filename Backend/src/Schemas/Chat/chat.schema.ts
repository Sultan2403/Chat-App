import { z } from "zod";

export const NewMessageSchema = z.object({
  roomId: z.uuid(), // This should prob be a mongo db id...
  message: z.string().min(1).max(5000),
  senderId: z.string().min(1),
});

// Automagic type generation
export type NewMessageType = z.infer<typeof NewMessageSchema>;
