import { env } from "./env";

export const REDIS_CONFIG = {
  HOST: env.REDIS_URL || process.env.REDIS_HOST || "localhost",
  PORT: env.REDIS_PORT || 6379,
};
