import z from "zod"
import { MessageValidationSchema } from "../Schemas/message.schema";

export type Message = z.infer<typeof MessageValidationSchema>;
