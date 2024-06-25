import mongoose from 'mongoose';

const medicalRecordScheam = new mongoose.Schema({}, { timestamps: true });

export const MedicalRecord = mongoose.model(
  'MedicalRecord',
  medicalRecordScheam
);
