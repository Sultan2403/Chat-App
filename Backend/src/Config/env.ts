import { z } from "zod";
import "dotenv/config";

const envSchema = z
  .object({
    PORT: z.string().default("5000").transform(Number),
    MONGO_DB_URI: z.string().min(1, "MongoDB URI is required"), // Safer than .url()
    REDIS_URL: z.url().optional(), // Make optional if you use HOST/PORT
    REDIS_HOST: z.string().default("localhost"),
    // Handle string input and transform to number for the app
    REDIS_PORT: z.string().default("6379").transform(Number),
    NODE_ENV: z
      .enum(["development", "production", "test"])
      .default("development"),
  }).loose();

const validateEnv = () => {
  const result = envSchema.safeParse(process.env);

if (!result.success) {
  console.error("❌ Invalid Environment Variables:");
  console.error(JSON.stringify(result.error.flatten().fieldErrors, null, 2));
  process.exit(1);
}

  return result.data;
};

export const env = validateEnv()!;
