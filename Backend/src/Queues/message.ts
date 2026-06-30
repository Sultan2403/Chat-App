import { Queue } from "bullmq";
import { QUEUE_NAMES } from "../Config/constants";

const messageQueue = new Queue(QUEUE_NAMES.MESSAGE)