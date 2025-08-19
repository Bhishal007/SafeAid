const Update = require('../models/Update');

// Create a new update
exports.createUpdate = async (req, res) => {
  try {
    const update = await Update.create(req.body);
    res.status(201).json(update);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all updates
exports.getUpdates = async (req, res) => {
  try {
    const updates = await Update.find();
    res.status(200).json(updates);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};