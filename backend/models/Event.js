import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, default: "" },
    date: { type: Date, required: true },

    host: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    isPrivate: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);