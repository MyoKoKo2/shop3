import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
  },
});

const adminModel = mongoose.model("admin", adminSchema);

export default adminModel;
