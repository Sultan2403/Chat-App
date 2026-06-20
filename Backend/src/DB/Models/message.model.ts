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

    /**
     * Client-side generated timestamp.
     * * @remarks
     * Generated on the client to ensure an instant UI feel and circumvent
     * potential server-side processing lag.
     */
    timestamp: {
      type: Date,
      required: true,
    },

    deliveredAt: {
      type: Date,
      default: null,
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
    strict: true,
  },
);

messageSchema.set("toJSON", {
  transform: (doc, obj) => {
    const { _id, __v, ...rest } = obj;
    return {
      id: _id.toString(),
      ...rest,
    };
  },
});

const Message = mongoose.model("Message", messageSchema, "messages");

export default Message;
