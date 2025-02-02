import mongoose from 'mongoose';

const hopsitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    speacilizedIn: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export const hospital = new mongoose.model('Hospital', hopsitalSchema);
