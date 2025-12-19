import mongoose, { mongo } from "mongoose";

const InfoSchema = new mongoose.Schema({
  name: String,
  profession: String,
  address: String,
  email: String,
  linkedin: String,
  github: String,
});

export default mongoose.models.Info || mongoose.model("Info", InfoSchema);
