import { model, Schema } from 'mongoose';

const hanabiSchema = new Schema(
  {
    logs: {
      channel: {
        type: String,
      },
      guild: {
        type: String,
      },
    },
    alerts: {
      channel: {
        type: String,
      },
      guild: {
        type: String,
      },
    },
    stats: {
      currentIdeaId: {
        type: Number,
        required: true,
        default: 0,
      },
    },
    loglevel: {
      type: String,
      required: true,
      default: 'info',
    },
  },
  { timestamps: true },
);

// required for mongoose on Next
mongoose.models = {};

export default model('Hanabi', hanabiSchema);
