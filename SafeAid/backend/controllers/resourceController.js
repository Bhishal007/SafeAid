const Resource = require('../models/Resource');
const Update = require('../models/Update');
exports.createResource = async (req, res) => {
  try {
    const { name, type, address, status } = req.body;
    const resource = new Resource({ name, type, address, status, createdBy: 'tempUserId' });
    await resource.save();
    res.status(201).json(resource);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getResources = async (req, res) => {
  try {
    const resources = await Resource.find();
    res.json(resources);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getResourceById = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) {
      return res.status(404).json({ error: 'Resource not found' });
    }
    res.json(resource);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateResourceById = async (req, res) => {
  try {
    const { name, type, address, status } = req.body;
    const resource = await Resource.findByIdAndUpdate(
      req.params.id,
      { name, type, address, status },
      { new: true }
    );   
    if (!resource) {
      return res.status(404).json({ error: 'Resource not found' });
    }
    res.json(resource);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteResourceById = async (req, res) => {
  try {
    const resource = await Resource.findByIdAndDelete(req.params.id);
    if (!resource) {
      return res.status(404).json({ error: 'Resource not found' });
    }
    res.json({ message: 'Resource deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.submitUpdate = async (req, res) => {
  try {
    const { resourceId, status, description } = req.body;
    const update = new Update({ resourceId, userId: 'tempUserId', status, description });
    await update.save();
    res.status(201).json({ message: 'Update submitted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};