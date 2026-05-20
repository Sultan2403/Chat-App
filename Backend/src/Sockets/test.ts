import { io } from "socket.io-client";
import { MESSAGE_EVENTS } from "../Config/constants";

const socket = io("http://localhost:5000");

socket.on("connect", () => {
  console.log("connected:", socket.id);
});

socket.on(MESSAGE_EVENTS.NEW_MESSAGE, (message) => {
  socket.emit(MESSAGE_EVENTS.NEW_MESSAGE, `Yo! I got this msg: ${message}`);
});

socket.on("disconnect", () => {
  console.log("disconnected");
});