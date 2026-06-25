import { Server } from "socket.io";
import { Server as HttpServer } from "http";
import { SOCKET_EVENTS } from "../Config/constants";
import { EventHandlerRegistar } from "../Types/socket.types";

export const initSocket = (server: HttpServer) => {
  const io = new Server(server, {
    cors: { origin: "*" }, // TODO: Change this to allowed origins using .env before prod. Do the same for the api.
  });

  io.on(SOCKET_EVENTS.CONNECTION, (socket) => {
    // Helper func to initialize handlers with necessary context down the line. 
    
    const registerEventHandler: EventHandlerRegistar = (event, handler) => {
      socket.on(event, (payload) => handler(payload, { socket, io }));
    };

    // Now that we know the basics, we wanna register our handlers and stuff.

    // So go ahead and plan the architechture bro :)

    socket.on(SOCKET_EVENTS.DISCONNECT, () => {
      console.log(`❌ ${socket.id} disconnected`);
    });
  });

  return io;
};
