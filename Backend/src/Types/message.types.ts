import z from "zod"
import { MessageSchema } from "../Schemas/message.schema";

export type Message = z.infer<typeof MessageSchema>;
