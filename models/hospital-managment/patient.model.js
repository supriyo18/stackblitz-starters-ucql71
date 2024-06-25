import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    diagonised: {
      type: String,
      requrired: true,
    },
    address: {
      type: String,
      requrired: true,
    },
    age: {
      type: Number,
      requrired: true,
    },
    bloodGroup: {
      type: String,
      requrired: true,
    },
    gender: {
      type: String,
      enum: ['M', 'F', 'O'],
      requrired: true,
    },
    admitedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital',
    },
  },
  { timestamps: true }
);

export const patient = mongoose.model('Patient', patientSchema);
