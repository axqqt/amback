const mongoose = require("mongoose");

const mainSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    trim: true,
    maxlength: 20,
  },
  description: {
    type: String,
    required: true,
    minlength: 5,
    trim: true,
    maxlength: 20,
  },
  mediaUrl: {
    type: String,
    required: true,
  },
  mediaType: { // New field to indicate the type of media (photo or video)
    type: String,
    required: true,
    enum: ["photo", "video"] // Only accepts "photo" or "video" values
  },
  link: {
    type: String,
    required: true,
    minlength: 5,
    trim: true,
    maxlength: 20,
  },
  category: {
    type: String,
    default: "all",
    required: true,
    minlength: 5,
    trim: true,
    maxlength: 20,
  },
  commission: {
    type: String,
    default: "default",
    required: true,
    minlength: 5,
    trim: true,
    maxlength: 20,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

const mainModel = mongoose.model("mains", mainSchema);

module.exports = mainModel;
