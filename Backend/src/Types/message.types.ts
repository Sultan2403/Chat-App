import mongoose from "mongoose";
import { z } from "zod";
import { messageSchema } from "../DB/Models/message.model";

// 1. Raw database inference straight from the model schema
export type DBMessage = mongoose.InferSchemaType<typeof messageSchema>;

// ==========================================
// ZOD RUNTIME SCHEMA
// ==========================================
export const MessageValidationSchema = z.object({
  senderID: z.string(),
  conversationID: z.string(),
  content: z.string().default(""),
  timestamp: z.coerce.date(),
  isMediaAttachment: z.boolean().default(false),
  attachmentId: z.string().nullable().default(null),
  attachmentUrl: z.string().nullable().default(null),

  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type Message = z.infer<typeof MessageValidationSchema>;
