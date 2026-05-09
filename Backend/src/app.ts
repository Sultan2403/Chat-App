// Main
import express, { Request, Response } from "express";
import  connectDB  from "./DB/Connections/connectDB"; 

// Middlewares
import { errors } from "celebrate";
import cors from "cors";
import { env } from "./Config/env"; 
import authMiddleware from "./Middlewares/Auth/users.auth";

const app = express();

// Init
connectDB();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://sultan2403.github.io",
      "https://idea-dump-pro.vercel.app",
    ],
  }),
);

app.use(express.json());

app.use(authMiddleware)

// Routes
app.get("/", (req: Request, res: Response) => {
  res
    .status(200)
    .json({ message: " Looking for something? Well it's not here XD" });
});

app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ success: true, message: "Server says heyyy :)" });
});

// Error Handling
app.use(errors());

export default app;