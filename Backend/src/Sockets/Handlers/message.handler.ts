import { Server, Socket } from "socket.io";
import { MESSAGE_EVENTS } from "../../Config/constants";
import { Message, MessageValidationSchema } from "../../Types/message.types";

export const registerChatHandlers = (io: Server, socket: Socket) => {

  // We still need a try catch at some point. We'll prob put it on the upper layer and let the errors naturally propagate upward because im lazy lol. 

  const handleNewMessage = (messageData: Message) => {

    const validated = MessageValidationSchema.parse(messageData); // This will throw if validation fails, you can catch it and emit an error back to the client if needed

    // Here you would typically save the message to the database

    // Prob push a job to the queue to save to db later so we can keep things instantaneous.

    // Then emit the message to all clients in the room aside sender of course.

    socket
      .to(messageData.conversationID)
      .emit(MESSAGE_EVENTS.NEW_MESSAGE, messageData.content);

    // And now maybe here some acknowledgement to sender...

    socket.emit(MESSAGE_EVENTS.MESSAGE_DELIVERED, {
      messageID: messageData.clientTempID, // You would replace this with the actual ID from the database
      deliveredAt: new Date(), 
    });
  };

  //   Then here we register the handlers...
  socket.on(MESSAGE_EVENTS.NEW_MESSAGE, handleNewMessage);
};
