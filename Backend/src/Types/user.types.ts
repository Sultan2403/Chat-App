import { userSchema } from "../DB/Models/user.model";
import mongoose from "mongoose";

export type DBUser = mongoose.InferSchemaType<typeof userSchema>;

export interface AuthUser {
  id: string;
  email: string;
  username: string;
}