import Redis from "ioredis";
import { REDIS_CONFIG } from "../../Config/constants";

// Create the live instance
const redis = new Redis({
  host: REDIS_CONFIG.HOST,
  port: REDIS_CONFIG.PORT,
  maxRetriesPerRequest: null,
});

redis.on("connect", () => console.log("✅ Redis Connected"));
redis.on("error", (err: any) =>
  console.error("❌ Redis Connection Error:", err, err?.message),
);

export default redis;
