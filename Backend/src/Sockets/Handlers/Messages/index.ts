import { MESSAGE_EVENTS } from "../../../Config/constants";
import { EventHandlerRegistar } from "../../../Types/socket.types";
import { handleNewMessageEvent } from "./message.handler";

export const registerChatHandlers = (registerEventHandler: EventHandlerRegistar) => {
  // Then here we register the handlers...

  registerEventHandler(MESSAGE_EVENTS.NEW_MESSAGE, handleNewMessageEvent);
};
