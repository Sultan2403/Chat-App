import { redis } from "../DB/Connections/redis";
import MessageModel from "../DB/Models/message.model";
import { Message } from "../Types/message.types";

export const handleNewMessage = async (message: Message) => {
  // Prob push the saving to db to a queue to keep ui instant...
  // await createMessageStoreJob(message)
  // await storeToRedis(message)


  // Idk if it should be returning something... Well we'll figure it out in the future

  // We are still planning out the architechture anyways
};

export const handleNewMessageAsync = async (message: Message) => {
  await MessageModel.create(message);

 // await redis.remove()
}