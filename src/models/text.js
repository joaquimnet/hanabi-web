import { model, Schema } from 'mongoose';

const textSchema = new Schema(
  {
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
  { timestamps: true },
);

// required for mongoose on Next
mongoose.models = {};

export default model('text', textSchema);
