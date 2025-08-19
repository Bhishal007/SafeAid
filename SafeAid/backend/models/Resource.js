const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['Shelter', 'Medical', 'Food'], required: true },
  address: { type: String, required: true },
  status: { type: String, enum: ['Open', 'Full', 'Closed'], default: 'Open' },
  createdBy: { type: String, required: true }, // Temporary string placeholder
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Resource', resourceSchema);