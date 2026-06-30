import { Message } from "../Types/message.types";

export const handleNewMessage = async (message: Message) => {
  // Prob push the saving to db to a queue to keep ui instant...
  // await createMessageStoreJob(message)
  // await storeToRedis(message)


  // Idk if it should be returning something... Well we'll figure it out in the future
};
