import mongoose from "mongoose";

export const conversationSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["DM", "GROUP"],
      required: true,
    },

    lastMessageID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
      default: null,
    },
  },
  {
    timestamps: true,
    strict: true
  },
);

conversationSchema.set("toJSON", {
  transform: (doc, obj) => {
    const { _id, __v, ...rest } = obj;
    return {
      id: _id.toString(),
      ...rest,
    };
  },
});

const Conversation = mongoose.model(
  "Conversation",
  conversationSchema,
  "conversations",
);

export default Conversation;
