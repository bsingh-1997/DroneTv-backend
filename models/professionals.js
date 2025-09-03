const mongoose = require("mongoose");

const professionalSchema = new mongoose.Schema({
  template: String,
  name: String,
  title: String,
  tagline: String,
  profileImage: String,
  bio: String,
  skills: [String],
  services: [{ title: String, description: String }],
  portfolio: [{ title: String, image: String, description: String }],
  testimonials: [String],
  blog: [{ title: String, summary: String }],
  contact: { email: String, phone: String, location:String },
}, { timestamps: true });

module.exports = mongoose.model("Professional", professionalSchema);
