const express = require("express");
const Professional = require("../models/professionals");

const router = express.Router();

// Create new profile
router.post("/", async (req, res) => {
  try {
    const profile = new Professional(req.body);
    await profile.save();
    res.status(201).json(profile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all profiles
router.get("/", async (req, res) => {
  try {
    const profiles = await Professional.find();
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single profile
router.get("/:id", async (req, res) => {
  try {
    const profile = await Professional.findById(req.params.id);
    if (!profile) return res.status(404).json({ message: "Profile not found" });
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update profile
router.put("/:id", async (req, res) => {
  try {
    const profile = await Professional.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(profile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete profile
router.delete("/:id", async (req, res) => {
  try {
    await Professional.findByIdAndDelete(req.params.id);
    res.json({ message: "Profile deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
