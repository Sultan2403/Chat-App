import { Server, Socket } from "socket.io";
import { MESSAGE_EVENTS } from "../../../Config/constants";
import { MessageSchema } from "../../../Schemas/message.schema";
import { validateIncomingEvent } from "../../../Validators/socket";
import { EventHandler, SocketContext } from "../../../Types/socket.types";

export const handleNewMessageEvent: EventHandler = (messageData, context) => {
  // If this passes then data is clean for sure.

  const { socket } = context;

  const validated = validateIncomingEvent(
    MessageSchema,
    messageData,
    socket,
  );

  if (!validated) return;

  // Here you would typically save the message to the database

  // Prob push a job to the queue to save to db later so we can keep things instantaneous.

  // Then emit the message to all clients in the room aside sender of course.

  socket
    .to(validated.conversationID)
    .emit(MESSAGE_EVENTS.NEW_MESSAGE, {message: validated.content});

  // Send as an object like seen above

  // Add other necessaru stuff like timestamps, senderID and so on. 
  

  

  // And now maybe here some acknowledgement to sender...

  socket.emit(MESSAGE_EVENTS.MESSAGE_DELIVERED, {
    messageID: validated.clientTempID, // You would replace this with the actual ID from the database
    deliveredAt: new Date(),
  });
};
