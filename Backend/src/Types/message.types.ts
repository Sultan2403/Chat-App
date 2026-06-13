import mongoose from "mongoose";
import { z } from "zod";
import { messageSchema } from "../DB/Models/message.model";

// 1. Raw database inference straight from the model schema
export type Message = mongoose.InferSchemaType<typeof messageSchema>;

// ==========================================
// ZOD RUNTIME SCHEMA
// ==========================================
export const NewMessageValidationSchema = z.object({
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

export type NewMessageType = z.infer<typeof NewMessageValidationSchema>;

// ==========================================
// THE TYPE CHECKER FIREWALL
// ==========================================
// Fixes ts(2313) by removing the circular constraint loop
type TypeMatch<T, U> = [T] extends [U] ? ([U] extends [T] ? true : never) : never;

// This is where the compiler is going to blow up 💥
type VerifyLock = TypeMatch<NewMessageType, Message>;
