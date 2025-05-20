import mongoose from "mongoose";

const marketingTechnicianSchema = new mongoose.Schema({
  technician_name: { type: String },
  technician_phone: { type: String },
  district: { type: String },
  address: { type: String },
});

marketingTechnicianSchema.index({ technician_phone: 1 });

const marketingTechnician =
  mongoose.models.marketingTechnician ||
  mongoose.model("marketingTechnician", marketingTechnicianSchema);

export default marketingTechnician;
