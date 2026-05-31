import { Server, Socket } from "socket.io";
import { MESSAGE_EVENTS } from "../../Config/constants";
import { NewMessageType } from "../../Schemas/chat.schema";

export const registerChatHandlers = (io: Server, socket: Socket) => {
  const handleNewMessage = (messageData: NewMessageType) => {
    // Here you would typically save the message to the database

    // Prob push a job to the queue to save to db later so we can keep things instant.

    // Then emit the message to all clients in the room aside sender of course.

    socket
      .to(messageData.roomId)
      .emit(MESSAGE_EVENTS.NEW_MESSAGE, messageData.message);
  };

  //   Then here we register the handlers...
  socket.on(MESSAGE_EVENTS.NEW_MESSAGE, handleNewMessage);
};
