import mongoose, { model, Schema } from 'mongoose';

const textSchema = new Schema(
  {
    schemaVersion: { type: Number, default: 1 },
    label: {
      type: String,
      required: true,
      minLength: 1,
    },
    category: {
      type: String,
      required: true,
      minLength: 1,
    },
    content: {
      type: String,
      required: true,
      minLength: 1,
    },
  },
  { timestamps: true, optimisticConcurrency: true },
);

// required for mongoose on Next
mongoose.models = {};

export default model('text', textSchema);
