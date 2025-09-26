
import Appointment from '../models/Appointment.js';
import HealthRecord from '../models/HealthRecord.js';
import Worker from '../models/Worker.js';
import Patient from '../models/Patient.js';

export const getNotifications = async (req, res) => {
    try {
        const user = req.user;
        const notifications = [];
        let profile = null;

        if (user.role === 'worker') {
            profile = await Worker.findOne({ user: user.id }).lean();
        } else if (user.role === 'patient') {
            profile = await Patient.findOne({ user: user.id }).lean();
        }

        if (profile) {
            // --- Notification for upcoming appointments ---
            const upcomingAppointments = await Appointment.find({
                $or: [{ worker: profile._id }, { patient: profile._id }],
                date: { $gte: new Date() }
            }).sort('date').limit(3).lean();

            for (const app of upcomingAppointments) {
                notifications.push({
                    id: `app-${app._id}`,
                    type: 'appointment',
                    title: `Upcoming: ${app.type}`,
                    message: `You have an appointment scheduled for ${new Date(app.date).toLocaleDateString()} at ${app.time}.`,
                    date: app.createdAt || app.date,
                    priority: 'high',
                    read: false, // In a real app, this status would be stored per-user.
                    actionUrl: '/appointments',
                    actionText: 'View Appointment'
                });
            }

            // --- Notification for new health records ---
            const newRecords = await HealthRecord.find({
                $or: [{ worker: profile._id }, { patient: profile._id }],
            }).sort('-date').limit(2).lean();

            for (const rec of newRecords) {
                notifications.push({
                    id: `rec-${rec._id}`,
                    type: 'health_alert',
                    title: `New Health Record: ${rec.diagnosis}`,
                    message: `A new health record was added on ${new Date(rec.date).toLocaleDateString()}.`,
                    date: rec.date,
                    priority: 'normal',
                    read: true,
                    actionUrl: '/health-records',
                    actionText: 'View Report'
                });
            }
        }

        // --- Generic Notification ---
        notifications.push({
            id: 'scheme-1',
            type: 'scheme',
            title: 'Government Health Scheme',
            message: 'You may be eligible for the Kerala Migrant Health Insurance Scheme. Apply now to get coverage.',
            date: new Date(),
            priority: 'normal',
            read: false,
            actionUrl: '/government-schemes',
            actionText: 'Learn More'
        });

        // Sort notifications by date, newest first
        const sortedNotifications = notifications.sort((a, b) => new Date(b.date) - new Date(a.date));

        res.json(sortedNotifications);

    } catch (error) {
        console.error('Error fetching notifications:', error);
        res.status(500).send('Server Error');
    }
};
