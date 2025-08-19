const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const { createUpdate, getUpdates } = require('../controllers/updateController');

router.post('/', [
  body('resourceId').notEmpty().withMessage('Resource ID is required'),
  body('userId').notEmpty().withMessage('User ID is required'),
  body('status').isIn(['Open', 'Full', 'Closed']).withMessage('Invalid status'),
  body('description').notEmpty().withMessage('Description is required'),
], createUpdate);

router.get('/', getUpdates);

module.exports = router;