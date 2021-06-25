import mongoose, { model, Schema } from 'mongoose';

const schema = new Schema(
  {
    schemaVersion: { type: Number, default: 1 },
    _id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    usage: { type: String, required: true },
    help: { type: String, required: true },
    permission: { type: Number, required: true },
    cooldown: { type: Number, required: true },
    aliases: { type: [String], required: true },
    runIn: { type: [String], required: true },
    examples: { type: [String], required: true },
    args: { type: Object, required: true },
    delete: { type: Boolean, required: true },
    hidden: { type: Boolean, required: true },
  },
  { timestamps: true, optimisticConcurrency: true },
);

// required for mongoose on Next
mongoose.models = {};

export default model('command', schema);
