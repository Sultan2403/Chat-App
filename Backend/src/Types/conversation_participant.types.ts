import mongoose from "mongoose"
import { conversationParticipantSchema } from "../DB/Models/conversation_participant.model"

export type ConversationParticipant = mongoose.InferSchemaType<typeof conversationParticipantSchema>