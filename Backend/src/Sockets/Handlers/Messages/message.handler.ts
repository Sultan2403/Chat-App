import { Server, Socket } from "socket.io";
import { MESSAGE_EVENTS } from "../../../Config/constants";
import { Message, MessageValidationSchema } from "../../../Types/message.types";
import { validateIncomingEvent } from "../../../Validators/socket";

export const registerChatHandlers = (io: Server, socket: Socket) => {
  const handleNewMessage = (messageData: Message) => {
    // If this passes then data is clean for sure.

    const validated = validateIncomingEvent(
      MessageValidationSchema,
      messageData,
      socket,
    );

    if (!validated) return;

    // Here you would typically save the message to the database

    // Prob push a job to the queue to save to db later so we can keep things instantaneous.

    // Then emit the message to all clients in the room aside sender of course.

    socket
      .to(validated.conversationID)
      .emit(MESSAGE_EVENTS.NEW_MESSAGE, validated.content);

    // And now maybe here some acknowledgement to sender...

    socket.emit(MESSAGE_EVENTS.MESSAGE_DELIVERED, {
      messageID: validated.clientTempID, // You would replace this with the actual ID from the database
      deliveredAt: new Date(),
    });
  };

  //   Then here we register the handlers...
  socket.on(MESSAGE_EVENTS.NEW_MESSAGE, handleNewMessage);
};
