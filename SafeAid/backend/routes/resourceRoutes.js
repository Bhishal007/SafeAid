const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const {
  createResource,
  getResources,
  getResourceById,
  updateResourceById,
  deleteResourceById,
  submitUpdate
} = require('../controllers/resourceController');

router.post('/', [
  body('name').notEmpty().withMessage('Name is required'),
  body('type').isIn(['Shelter', 'Medical', 'Food']).withMessage('Invalid resource type'),
  body('address').notEmpty().withMessage('Address is required'),
  body('status').optional().isIn(['Open', 'Full', 'Closed']).withMessage('Invalid status'),
  body('createdBy').notEmpty().withMessage('CreatedBy is required'),
], createResource);

router.get('/', getResources);

router.get('/:id', getResourceById);

router.put('/:id', [
  body('name').optional().notEmpty().withMessage('Name cannot be empty'),
  body('type').optional().isIn(['Shelter', 'Medical', 'Food']).withMessage('Invalid resource type'),
  body('address').optional().notEmpty().withMessage('Address cannot be empty'),
  body('status').optional().isIn(['Open', 'Full', 'Closed']).withMessage('Invalid status'),
], updateResourceById);

router.delete('/:id', deleteResourceById);

router.post('/updates', [
  body('resourceId').notEmpty().withMessage('Resource ID is required'),
  body('status').isIn(['Open', 'Full', 'Closed']).withMessage('Invalid status'),
  body('description').optional().isLength({ max: 500 }).withMessage('Description too long'),
], submitUpdate);

module.exports = router;