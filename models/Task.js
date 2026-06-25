import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  familyId: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    default: "normal",
  },
  assignedTo: {
    type: String,
  },
  dueDate: {
    type: Date,
  },
  status: {
    type: String,
    default: "pending",
  },
});

export default mongoose.model("Task", taskSchema);