import mongoose, { mongo } from "mongoose";

const ExperienceSchema = new mongoose.Schema({
  experience: String,
  position: String,
  description: [{ type: mongoose.Schema.Types.ObjectId, ref: "description" }],
});

const DescriptionSchema = new mongoose.Schema({
  description: String,
});

const Description =
  mongoose.models.description ||
  mongoose.model("description", DescriptionSchema);
const Experience =
  mongoose.models.experience || mongoose.model("experience", ExperienceSchema);

export { Description, Experience };
