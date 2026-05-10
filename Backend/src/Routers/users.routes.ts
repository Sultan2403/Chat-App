import validate from "express-zod-safe";
import { Router } from "express";
import { z } from "zod";

const router = Router();

router.post(
  "/",
  validate({
    body: z.object({
      username: z.string().min(3, "Too short!"),
      age: z.number().max(20, "Too old!").optional(),
    }),
  }),
  (req, res) => {
    // If it gets here, req.body.username is guaranteed to be a string
    res.status(200).json({
      message: "Validation passed!",
      data: req.body,
    });
  },
);

export default router;
