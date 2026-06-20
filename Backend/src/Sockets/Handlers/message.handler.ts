import { Server, Socket } from "socket.io";
import { MESSAGE_EVENTS } from "../../Config/constants";
import { Message } from "../../Types/message.types";

export const registerChatHandlers = (io: Server, socket: Socket) => {
  const handleNewMessage = (messageData: Message) => {
    // Here you would typically save the message to the database

    // Prob push a job to the queue to save to db later so we can keep things instantaneous.

    // Then emit the message to all clients in the room aside sender of course.

    socket
      .to(messageData.conversationID)
      .emit(MESSAGE_EVENTS.NEW_MESSAGE, messageData.content);

      // And now maybe here some acknowledgement to sender... 
  };

  //   Then here we register the handlers...
  socket.on(MESSAGE_EVENTS.NEW_MESSAGE, handleNewMessage);
};
