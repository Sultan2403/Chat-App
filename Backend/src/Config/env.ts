import { z } from "zod";
import "dotenv/config";

const envSchema = z.object({
  PORT: z.string().transform(Number).default(5000),
  MONGO_DB_URI: z.url(),
  //   REDIS_URL: z.url(),
  JWT_ACCESS_SECRET: z
    .string()
    .min(32, "Access secret must be at least 32 chars"),
  JWT_REFRESH_SECRET: z
    .string()
    .min(32, "Refresh secret must be at least 32 chars"),
  //   NODE_ENV: z
  //     .enum(["development", "production", "test"])
  //     .default("development"),
});

const validateEnv = () => {
  try {
    return envSchema.parse(process.env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("❌ Invalid Environment Variables:");
      process.exit(1);
    } else {
      console.error(
        "❌ An unknown error occurred while validating env:",
        error,
      );
    }
    // We exit the process because the app can't function without these
    process.exit(1);
  }
};

export const env = validateEnv();
