import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    
    // Phase 1: New features (Optional for existing users)
    matrimonialProfile: {
      isPublic: { type: Boolean, default: false },
      bio: { type: String, default: "" },
      interests: [String]
    },
    walletBalance: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
