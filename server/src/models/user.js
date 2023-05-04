import Mongoose from "mongoose";

const userSchema = new Mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide a username"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please provide a email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: 8,
    },
    type: {
      type: String,
      enum: ["admin", "user"],
    },
    photoURL: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const userModel = Mongoose.model("User", userSchema);
export default userModel;
