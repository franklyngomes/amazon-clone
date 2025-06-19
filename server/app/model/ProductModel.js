const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    currentPrice: {
      type: number,
      required: true,
    },
    previousPrice: {
      type: number,
      required: true,
    },
    subcategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subcategory",
    },
    image: {
      required: true,
      type: Array,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

const ProductModel = mongoose.model("product", ProductSchema);
module.exports = ProductModel;
