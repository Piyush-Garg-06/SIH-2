import express from 'express';
import { getNotifications } from '../controllers/notifications.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// @route   GET /api/notifications
// @desc    Get notifications for the logged-in user
// @access  Private
router.get('/', auth, getNotifications);

export default router;
