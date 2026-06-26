import z from "zod"

export const MessageSchema = z.object({
  senderID: z.string(),
  conversationID: z.string(),
  content: z.string().default(""),
  timestamp: z.coerce.date(),
  isMediaAttachment: z.boolean().default(false),
  attachmentId: z.string().nullable().default(null),
  attachmentUrl: z.string().nullable().default(null),
  deliveredAt: z.date().nullable().default(null),

  clientTempID: z.string().optional(), // This is for client-side tracking of messages before they get an ID from the database

  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});