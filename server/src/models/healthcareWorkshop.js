import mongoose from 'mongoose';

const healthcareWorkshopSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 50,
  },

  description: {
    type: String,
    required: true,
    maxlength: 200,
  },

  atendees: {
    type: String,
    required: true,
    maxlength: 200,
  },

  startTime: {
    type: String,
    required: true,
  },

  endTime: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
    maxlength: 100,
  },

  date: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const healthcareWorkshopModel = mongoose.model(
  'healthcareWorkshop',

  healthcareWorkshopSchema
);

export default healthcareWorkshopModel;
