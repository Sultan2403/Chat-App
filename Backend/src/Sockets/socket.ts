import { Server } from "socket.io";
import { Server as HttpServer } from "http";

export const initSocket = (server: HttpServer) => {
  const io = new Server(server, {
    cors: { origin: "*" },
  });

  io.on("connection", (socket) => {
    console.log(`⚡ ${socket.id} connected`);

    socket.on("join", (room) => socket.join(room));

    socket.on("disconnect", () => console.log("❌ disconnected"));
  });

  return io;
};
