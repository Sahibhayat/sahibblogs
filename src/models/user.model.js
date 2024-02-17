import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "data:image/jpeg;base64,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",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
