import { Server, Socket } from "socket.io";
import { MESSAGE_EVENTS } from "../../Config/constants";

export const registerChatHandlers = (io: Server, socket: Socket) => {
  const handleNewMessage = (messageData: any) => {
    // Broadcast the new message to all clients except the sender
    socket.broadcast.emit(MESSAGE_EVENTS.NEW_MESSAGE, messageData);
  }
};
