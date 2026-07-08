import { Worker } from "bullmq";
import { QUEUE_NAMES } from "../../Config/constants";
import { bullConnection } from "../../DB/Connections/redis";

export const messageWorker = new Worker(
  QUEUE_NAMES.MESSAGE,
  async (job) => {
    
  },
  {
    connection: bullConnection,
  },
);
