const mongoose = require("mongoose");
const joi = require("joi");
const Schema = mongoose.Schema;

const validateSchema = joi.object({
  name: joi.string().min(5).required(),
  email: joi
    .string()
    .required()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "in", "net"] } }),
  password: joi.string().required(),
  isVerified: joi.boolean(),
  verificationCode: joi.string(),
  verificationCodeValidation: joi.number(),
  forgotPasswordCode: joi.string(),
  forgotPasswordCodeValidation: joi.number(),
});
const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      require: [true, "Email is required"],
      unique: [true, "Email must be unique!"],
    },
    password: {
      type: String,
      require: [true, "Password is required"],
      trim: true,
      select: false,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationCode: {
      type: String,
      select: false,
    },
    verificationCodeValidation: {
      type: Number,
      select: false,
    },
    forgotPasswordCode: {
      type: String,
      select: false,
    },
    forgotPasswordCodeValidation: {
      type: Number,
      select: false,
    },
    deleted: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const UserModel = mongoose.model("user", UserSchema);
module.exports = { UserModel, validateSchema };
