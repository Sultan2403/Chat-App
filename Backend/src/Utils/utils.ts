import { z } from "zod";
import { Types } from "mongoose";

// Reusable validator that leverages Mongoose's native verification
export const zObjectId = () =>
  z.string().refine((val) => Types.ObjectId.isValid(val), {
    message: "Invalid Mongoose ObjectId",
});
