import { Queue } from "bullmq";
import { QUEUE_NAMES } from "../Config/constants";
import { bullConnection } from "../DB/Connections/redis";

export const messageQueue = new Queue(QUEUE_NAMES.MESSAGE, {
  connection: bullConnection,
});
