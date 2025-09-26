# Digital Health Record Management System

A comprehensive solution for migrant workers in Kerala to manage their health records, access government schemes, and receive timely notifications. This system addresses the critical need for centralized health data management for migrant workers.

## 🎯 Problem Statement

Migrant workers in Kerala lack a centralized and accessible health record system, creating difficulties in:
- Disease tracking and timely medical treatment
- Integration with government health schemes
- Risk of infectious disease spread
- Reduced healthcare access and public health efficiency

## ✅ Solution Overview

This Digital Health Record Management System provides:

### Core Features
- **Unique Health ID & Digital Health Cards** - Each worker gets a unique ID and scannable health card
- **Multi-Role System** - Worker, Doctor, and Manager roles with appropriate access levels
- **Government Scheme Integration** - Direct access to Kerala health schemes
- **Notification System** - SMS/Email alerts for checkups, appointments, and health updates
- **Multilingual Support** - Support for Hindi, Bengali, Odia, and other languages
- **Offline Data Capture** - Data collection in areas with poor internet connectivity
- **Strong Security** - Role-based access control and data privacy

### User Roles
1. **Workers** - Access and manage their health records, apply for schemes
2. **Doctors** - View patient history, update records, provide treatment
3. **Managers** - Oversee system, connect workers with healthcare providers
4. **Health Inspectors/Emitra Centers** - Assist with data entry and registration

## 🏗️ System Architecture

### Backend (Node.js/Express)
- **Framework**: Express.js with ES6 modules
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT-based authentication
- **Security**: Helmet, rate limiting, CORS
- **Notifications**: Email (Nodemailer) and SMS (Twilio) integration

### Frontend (React)
- **Framework**: React 19 with Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Internationalization**: i18next
- **QR Codes**: qrcode.react library

## 📁 Project Structure

```
├── backend/                    # Node.js backend
│   ├── config/                # Database configuration
│   ├── controllers/           # Route controllers
│   ├── middleware/            # Authentication middleware
│   ├── models/               # MongoDB models
│   ├── routes/               # API routes
│   ├── services/             # Business logic services
│   └── server.js             # Main server file
├── SIH/                      # Frontend application
│   ├── react-frontend/       # React application
│   │   ├── src/
│   │   │   ├── components/   # React components
│   │   │   ├── contexts/     # React contexts
│   │   │   ├── pages/        # Application pages
│   │   │   └── utils/        # Utility functions
│   │   └── public/           # Static assets
│   └── static-files/         # Static HTML files
└── README.md                 # This file
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Configuration:**
   - Copy `.env.example` to `.env`
   - Update the following variables:
     ```env
     MONGODB_URI=mongodb://localhost:27017/digital_health_records
     JWT_SECRET=your_super_secret_jwt_key_here
     EMAIL_USER=your_email@gmail.com
     EMAIL_PASS=your_app_password
     TWILIO_ACCOUNT_SID=your_twilio_account_sid
     TWILIO_AUTH_TOKEN=your_twilio_auth_token
     ```

4. **Start the backend server:**
   ```bash
   npm start
   ```
   Server will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to React frontend directory:**
   ```bash
   cd SIH/react-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Application will run on `http://localhost:5173`

## 🔗 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Health Records
- `GET /api/health-records` - Get all health records
- `POST /api/health-records` - Create new health record
- `PUT /api/health-records/:id` - Update health record
- `DELETE /api/health-records/:id` - Delete health record

### Health Cards
- `POST /api/health-cards/:workerId` - Generate health card
- `GET /api/health-cards/verify/:healthId` - Verify health card
- `GET /api/health-cards/worker/:healthId` - Get worker by health ID

### Government Schemes
- `GET /api/schemes` - Get all schemes
- `GET /api/schemes/eligibility/:workerId` - Check scheme eligibility
- `POST /api/schemes/apply/:workerId` - Apply for scheme
- `GET /api/schemes/info/:schemeId` - Get scheme information

## 🎨 Key Components

### Backend Services
- **HealthCardService** - Generates unique health IDs and QR codes
- **GovernmentSchemeService** - Manages Kerala health scheme integration
- **NotificationService** - Handles email and SMS notifications

### Frontend Components
- **HealthCard** - Displays digital health card with QR code
- **GovernmentSchemes** - Shows available schemes and application status
- **NotificationCenter** - Manages user notifications and alerts

## 🔐 Security Features

- **JWT Authentication** - Secure token-based authentication
- **Role-Based Access Control** - Different permissions for different user types
- **Rate Limiting** - Prevents API abuse
- **Input Validation** - Sanitizes and validates all inputs
- **CORS Configuration** - Secure cross-origin requests
- **Helmet Security** - Sets various HTTP security headers

## 📱 Features Implemented

### ✅ Completed Features
- [x] User registration and authentication
- [x] Health record management
- [x] Unique health ID generation
- [x] Digital health card with QR codes
- [x] Government scheme integration
- [x] Email and SMS notifications
- [x] Multilingual support
- [x] Role-based access control
- [x] Security middleware
- [x] API documentation

### 🔄 Ready for Testing
- [ ] End-to-end testing
- [ ] Performance optimization
- [ ] Production deployment
- [ ] User acceptance testing

## 🎯 SDG Alignment

This solution aligns with:
- **SDG 3**: Good Health & Well-Being
- **SDG 8**: Decent Work & Economic Growth
- **SDG 10**: Reduced Inequalities

## 📞 Support

For technical support or questions about the implementation, please refer to the documentation or contact the development team.

## 📄 License

This project is developed for the Smart India Hackathon (SIH) 2024 and follows the competition guidelines.

---

**Built with ❤️ for migrant workers in Kerala**
