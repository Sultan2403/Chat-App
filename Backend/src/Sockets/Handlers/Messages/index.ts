import { Server, Socket } from "socket.io";
import { MESSAGE_EVENTS } from "../../../Config/constants";
import { handleNewMessageEvent } from "./message.handler";
import { EventHandler, MessageEvent } from "../../../Types/socket.types";

export const registerChatHandlers = (io: Server, socket: Socket) => {
  // Then here we register the handlers...

  const registerEventHandler = (event: MessageEvent, handler: EventHandler) => {
    socket.on(event, (payload) => handler(payload, { socket, io }));
  };

  registerEventHandler(MESSAGE_EVENTS.NEW_MESSAGE, handleNewMessageEvent);
};
