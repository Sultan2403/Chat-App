import mongoose from "mongoose"
import { messageSchema } from "../DB/Models/message.model"

export type Message = mongoose.InferSchemaType<typeof messageSchema>