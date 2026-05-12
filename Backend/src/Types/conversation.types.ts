import mongoose from "mongoose"
import { conversationSchema } from "../DB/Models/conversation.model"

export type Conversation = mongoose.InferSchemaType<typeof conversationSchema>