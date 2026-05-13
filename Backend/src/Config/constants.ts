import { env } from "./env";

export const REDIS_CONFIG = {
  HOST: env.REDIS_URL || env.REDIS_HOST || "localhost",
  PORT: env.REDIS_PORT || 6379,
} as const;

export const SOCKET_EVENTS = {
  CONNECTION: "connection",
  DISCONNECT: "disconnect",
} as const;

export const MESSAGE_EVENTS = {
  NEW_MESSAGE: "new_message",
  MESSAGE_READ: "message_read",
  MESSAGE_DELIVERED: "message_delivered",
} as const;

