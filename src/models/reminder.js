import mongoose, { model, Schema } from 'mongoose';

const schema = new Schema({
  content: {
    type: String,
    required: true,
  },
  fireDate: {
    type: Date,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  userTag: {
    type: String,
    required: true,
  },
  guildId: {
    type: String,
    required: true,
  },
  channelId: {
    type: String,
    required: true,
  },
});

// required for mongoose on Next
mongoose.models = {};

export default model('reminder', schema);
