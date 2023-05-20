import mongoose from 'mongoose';

const employementSessionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 40,
  },
  description: {
    type: String,
    required: true,
    maxlength: 250,
  },
  speaker: {
    type: String,
    required: true,
    maxlength: 40,
  },
  duration: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
    maxlength: 100,
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const employementSessionModel = mongoose.model(
  'employementSession',
  employementSessionSchema
);
export default employementSessionModel;
