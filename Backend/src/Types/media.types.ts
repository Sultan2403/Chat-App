import mongoose from "mongoose"
import { mediaSchema } from "../DB/Models/media.model"

export type Media = mongoose.InferSchemaType<typeof mediaSchema>