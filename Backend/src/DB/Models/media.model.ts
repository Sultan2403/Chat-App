import mongoose from "mongoose";

export const mediaSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },

    messageID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Media = mongoose.model("Media", mediaSchema, "media");

export default Media;
