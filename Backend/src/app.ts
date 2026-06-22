// Main
import express, { Request, Response } from "express";

// Middlewares
import cors from "cors";
import {
  clerkMiddleware,
  requireAuth,
  getAuth,
  clerkClient,
} from "@clerk/express";

// Routers
import userRouter from "./Routers/users.routes";

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

app.post("/protected", async (req, res) => {
  // Use `getAuth()` to get the user's `userId`
  const stuff = getAuth(req);

  const { userId } = stuff;
  console.log(req);
  console.log(stuff, userId);

  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Use the `getUser()` method to get the user's User object
  const user = await clerkClient.users.getUser(userId!);

  return res.json({ user });
});

export default app;
