import { RegisterEventHandler } from "../../Types/socket.types";
import { registerChatHandlers } from "../Handlers/Messages";

const registerAllHandlers = (
  registerEventHandler: RegisterEventHandler,
): void => {
  registerChatHandlers(registerEventHandler);
};

export default registerAllHandlers;