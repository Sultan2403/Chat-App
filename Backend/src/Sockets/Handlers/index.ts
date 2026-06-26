import { RegisterEventHandler } from "../../Types/socket.types";
import { registerMessageHandlers } from "../Handlers/Messages";

const registerAllHandlers = (
  registerEventHandler: RegisterEventHandler,
): void => {
  registerMessageHandlers(registerEventHandler);
};

export default registerAllHandlers;