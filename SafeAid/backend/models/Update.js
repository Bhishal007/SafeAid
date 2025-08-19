const mongoose = require('mongoose');

const updateSchema = new mongoose.Schema({
  resourceId: { type: String, required: true },
  userId: { type: String, required: true }, // Placeholder for non-auth setup
  status: { type: String, enum: ['Open', 'Full', 'Closed'], required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Update', updateSchema);