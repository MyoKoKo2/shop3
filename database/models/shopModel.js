import mongoose from "mongoose";

const shopSchema = new mongoose.Schema(
  {
    shopName: {
      type: String,
      required: true,
    },
    fbLink: {
      type: String,
      required: true,
    },

    verify: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const shopModel = mongoose.model("shop", shopSchema);

export default shopModel;
