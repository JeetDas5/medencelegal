import mongoose from "mongoose";

const issueSchema = new mongoose.Schema({
  name: { type: "string", required: true },
  email: { type: "string", required: true },
  phone: { type: "string", required: true },
  issue: { type: "string", required: true },
  createdAt: { type: "string", required: false },
  updatedAt: { type: "string", required: false },
});

export default mongoose.models.Issue<Issue> || mongoose.model("Issue", issueSchema);
