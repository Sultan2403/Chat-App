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

mediaSchema.set("toJSON", {
  transform: (doc, obj) => {
    const { _id, __v, ...rest } = obj;
    return {
      id: _id.toString(),
      ...rest,
    };
  },
});

const Media = mongoose.model("Media", mediaSchema, "media");

export default Media;
