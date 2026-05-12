import mongoose from "mongoose";

export const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    avatarURL: {
      type: String,
      default: null,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      select: false
    },
  },
  {
    timestamps: true, // auto adds createdAt + updatedAt
    strict: true
  }
);

userSchema.set("toJSON", {
  transform: (doc, obj) => {
    const { _id, password, __v, ...rest } = obj;
    return {
      id: _id.toString(),
      ...rest,
    };
  },
});

const User = mongoose.model("User", userSchema, "users");

export default User;