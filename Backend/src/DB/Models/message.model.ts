import mongoose from "mongoose";

export const messageSchema = new mongoose.Schema(
  {
    senderID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    conversationID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Conversation",
      required: true,
    },

    content: {
      type: String,
      default: "",
    },

    isMediaAttachment: {
      type: Boolean,
      default: false,
    },

    attachmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Media",
      default: null,
    },

    attachmentUrl: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
    strict: true
  }
);

const Message = mongoose.model(
  "Message",
  messageSchema,
  "messages"
);

export default Message;