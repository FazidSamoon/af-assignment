import mongoose from "mongoose";

const foodEventsSchema = new mongoose.Schema({
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
  date: {
    type: String,
    required: true,
    trim: true,
  },
  time: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    trim: true,
  },
  link: {
    type: String,
  },
  venue: {
    type: String,
    trim: true,
  },
  speaker: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const foodEventsModel = mongoose.model("foodEvents", foodEventsSchema);
export default foodEventsModel;
