import express from 'express';
import { getAppointments, createAppointment, updateAppointment, deleteAppointment, getAppointmentsForUser } from '../controllers/appointments.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Get all appointments for the logged-in user
router.get('/', auth, getAppointments);

// Get all appointments for a specific user
router.get('/user/:userId', auth, getAppointmentsForUser);

// Create a new appointment (Worker only)
router.post('/', auth, createAppointment);

// Update an appointment (Worker or Doctor who owns it)
router.put('/:id', auth, updateAppointment);

// Delete an appointment (Worker or Doctor who owns it)
router.delete('/:id', auth, deleteAppointment);

export default router;