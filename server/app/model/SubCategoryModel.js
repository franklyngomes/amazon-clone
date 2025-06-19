const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubCategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim:true
    },
    category: {
      type:mongoose.Schema.Types.ObjectId,
      ref:"category",
      required: true
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
const SubCategoryModel = mongoose.model("subcategory", SubCategorySchema);
module.exports = SubCategoryModel;
