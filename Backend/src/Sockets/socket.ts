import { Server } from "socket.io";
import { Server as HttpServer } from "http";
import { MESSAGE_EVENTS, SOCKET_EVENTS } from "../Config/constants";

export const initSocket = (server: HttpServer) => {
  const io = new Server(server, {
    cors: { origin: "*" },
  });

  io.on(SOCKET_EVENTS.CONNECTION, (socket) => {
    console.log(`⚡ ${socket.id} connected`);

    socket.emit(MESSAGE_EVENTS.NEW_MESSAGE, "Um hey are you alive?")

    socket.on(MESSAGE_EVENTS.NEW_MESSAGE, (message) => {
      console.log(
        `Message received in room: ${socket.rooms} message is: "${message}"`,
      );
    });

    socket.on("disconnect", () => {
      console.log(`❌ ${socket.id} disconnected`);
    });
  });

  return io;
};
