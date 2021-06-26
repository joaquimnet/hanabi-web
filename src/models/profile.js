import mongoose, { model, Schema } from 'mongoose';

const profileSchema = new Schema(
  {
    _id: {
      required: true,
      type: String,
    },
    flower: {
      count: { type: Number, default: 0 },
      time: { type: Date, default: new Date('1970-01-01') },
    },
    daily: {
      count: { type: Number, default: 0 },
      time: { type: Date, default: new Date('1970-01-01') },
    },
    votes: {
      count: { type: Number, default: 0 },
      countPerMonth: {
        type: Object,
        default: {},
      },
      time: { type: Date, default: new Date('1970-01-01') },
    },
    money: {
      type: Number,
      required: true,
      default: 0,
    },
    anilistId: {
      type: Number,
      required: false,
    },
    flags: {
      hasReceivedFirstDM: {
        type: Boolean,
        required: true,
        default: false,
      },
      canReceiveDMs: {
        type: Boolean,
        required: true,
        default: true,
      },
    },
  },
  { timestamps: true },
);

// Statics

profileSchema.statics.getOrCreate = async function getOrCreate(userId) {
  let profile;
  try {
    profile = await this.findOne({ _id: userId });
    if (profile) {
      return profile;
    }
    // eslint-disable-next-line new-cap
    profile = new mongoose.model('profile', profileSchema)({ _id: userId });
    await profile.save();
    return profile;
  } catch (err) {
    err.stack =
      `[Profile/getProfile] Could not get profile for id: ${userId}\n` +
      err.stack;
    throw err;
  }
};

// required for mongoose on Next
mongoose.models = {};

export default model('profile', profileSchema);
