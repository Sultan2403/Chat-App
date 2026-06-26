import { Server } from "socket.io";
import { Server as HttpServer } from "http";
import { SOCKET_EVENTS } from "../Config/constants";
import { RegisterEventHandler } from "../Types/socket.types";
import registerAllHandlers from "./Handlers";

export const initSocket = (server: HttpServer) => {
  const io = new Server(server, {
    cors: { origin: "*" }, // TODO: Change this to allowed origins using .env before prod. Do the same for the api.
  });

  io.on(SOCKET_EVENTS.CONNECTION, (socket) => {
    // Helper func to initialize handlers with necessary context down the line.

    const registerEventHandler: RegisterEventHandler = (event, handler) => { 
      socket.on(event, (payload) => handler(payload, { socket, io }));
    };

    registerAllHandlers(registerEventHandler);

    socket.on(SOCKET_EVENTS.DISCONNECT, () => {
      console.log(`❌ ${socket.id} disconnected`);
    });
  });

  return io;
};
