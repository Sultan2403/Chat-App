// Main
import express, { Request, Response } from "express";

// Middlewares
import cors from "cors";
import { clerkMiddleware, getAuth, clerkClient } from "@clerk/express";

// Routers
import userRouter from "./Routers/users.routes";
import requireAuth from "./Middlewares/Auth/users.auth";

// Init
const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://sultan2403.github.io"],
  }),
);

app.use(clerkMiddleware());

app.use(express.json());

app.use("/users", userRouter);

// Routes
app.get("/", (req: Request, res: Response) => {
  res
    .status(200)
    .json({ message: "Looking for something? Well it's not here XD" });
});

app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ success: true, message: "Server says heyyy :)" });
});

app.post("/protected", requireAuth, async (req, res) => {

  console.log("AUTH OBJECT:",  req.auth);
  // Use the `getUser()` method to get the user's User object
  // const user = await clerkClient.users.getUser(userId!);

  return res.json({ user });
});

export default app;
