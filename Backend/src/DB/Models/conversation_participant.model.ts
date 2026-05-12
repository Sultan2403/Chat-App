import mongoose from "mongoose";

export const conversationParticipantSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    conversationID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Conversation",
      required: true,
    },

    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
    },

    metadata: {
      type: Object,
      default: {},
    },

    joinedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    strict: true,
  },
);

conversationParticipantSchema.index(
  { userID: 1, conversationID: 1 },
  { unique: true },
);

conversationParticipantSchema.set("toJSON", {
  transform: (doc, obj) => {
    const { _id, __v, ...rest } = obj;
    return {
      id: _id.toString(),
      ...rest,
    };
  },
});

const ConversationParticipant = mongoose.model(
  "ConversationParticipant",
  conversationParticipantSchema,
  "conversation_participants",
);

export default ConversationParticipant;
