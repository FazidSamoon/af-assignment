import mongoose from "mongoose";

const eduBlogsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  tags: {
    type: [String],
    trim: true,
  },
  image: {
    type: String,
    trim: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  comments: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const eduBlogsModel = mongoose.model("eduBlogs", eduBlogsSchema);
export default eduBlogsModel;
