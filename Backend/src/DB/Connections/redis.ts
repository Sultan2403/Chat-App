import Redis from "ioredis";
import { REDIS_CONFIG } from "../../Config/constants";

const redisOptions = {
  host: REDIS_CONFIG.HOST,
  port: REDIS_CONFIG.PORT,
  maxRetriesPerRequest: null, // Required by BullMQ
};

// 1. Connection for your manual app logic (Caching, etc.)
export const redis = new Redis(redisOptions);

redis.on("connect", () => {
  console.log("✅ App redis connection ready");
})

// 2. Connection specifically for BullMQ
// We export the options because BullMQ prefers to manage its own connection lifecycle
export const bullConnection = new Redis(redisOptions);

bullConnection.on("connect", () => {
  console.log("✅ Bull redis connection ready");
})