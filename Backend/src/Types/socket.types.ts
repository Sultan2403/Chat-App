import { Socket, Server } from "socket.io";
import { MESSAGE_EVENTS } from "../Config/constants";

export type SocketContext = {
  socket: Socket;
  io: Server;

  // More stuff if needed...
};

export type EventHandler = (
  payload: unknown,
  context: SocketContext,
) => void | Promise<void>;

export type RegisterEventHandler = (
  event: MessageEvent,
  handler: EventHandler,
) => void;

export type MessageEvent = (typeof MESSAGE_EVENTS)[keyof typeof MESSAGE_EVENTS];
