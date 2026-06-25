import mongoose from "mongoose";

const familySchema = new mongoose.Schema({
  familyName: {
    type: String,
    required: true,
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

export default mongoose.model("Family", familySchema);