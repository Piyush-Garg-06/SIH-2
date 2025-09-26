import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Services from './pages/Services';
import HealthCard from './pages/HealthCard';
import Doctors from './pages/Doctors';
import Employers from './pages/Employers';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import HealthRecords from './pages/HealthRecords';
import Appointments from './pages/Appointments';
import Notifications from './pages/Notifications';
import Patients from './pages/Patients';
import HealthCheckups from './pages/HealthCheckups';
import Reports from './pages/Reports';
import SeverityAssessment from './pages/SeverityAssessment';
import Workers from './pages/Workers';
import ScheduleAppointment from './pages/ScheduleAppointment';
import SubmitHealthRecord from './pages/SubmitHealthRecord';
import GovernmentSchemesPage from './pages/GovernmentSchemes';
import EmployerWorkerHealth from './pages/EmployerWorkerHealth';
import AddNewPatient from './pages/AddNewPatient';
import TestUser from './pages/TestUser';
import SimpleTest from './pages/SimpleTest';
import ReportDetail from './pages/ReportDetail';
import HealthInfoDisplay from './pages/HealthInfoDisplay';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 font-sans">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/employers" element={<Employers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/government-schemes" element={<GovernmentSchemesPage />} />
              <Route path="/simple-test" element={<SimpleTest />} />
              
              {/* QR Scanner and Health Info Display - Public for emergency access */}
              <Route path="/health-info" element={<HealthInfoDisplay />} />
              <Route path="/health-info/:healthId" element={<HealthInfoDisplay />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/healthcard" element={<HealthCard />} />
                <Route path="/health-records" element={<HealthRecords />} />
                <Route path="/appointments" element={<Appointments />} />
                <Route path="/schedule-appointment" element={<ScheduleAppointment />} />
                <Route path="/submit-health-record" element={<SubmitHealthRecord />} />
                <Route path="/employer-worker-health" element={<EmployerWorkerHealth />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/patients" element={<Patients />} />
                <Route path="/patients/:patientId" element={<ReportDetail />} />
                <Route path="/health-checkups" element={<HealthCheckups />} />
                <Route path="/health-checkups/:patientId" element={<HealthCheckups />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/reports/:patientId" element={<ReportDetail />} />
                <Route path="/severity-assessment" element={<SeverityAssessment />} />
                <Route path="/add-new-patient" element={<AddNewPatient />} />
                <Route path="/test-user" element={<TestUser />} />
                <Route path="/workers" element={<Workers />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;