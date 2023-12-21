import mongoose from "mongoose";
import Department from "./department.model.js";

const hospitalSchema = new mongoose.Schema({
  hospitalName: { type: String, required: true },
  departments: { type: [Department.schema], required: true },
});

const Hospital = mongoose.model("Hospital", hospitalSchema);

export default Hospital;
