import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GovernmentSchemes from '../components/GovernmentSchemes';
import { 
  Heart,
  Shield,
  Users,
  Globe,
  Smartphone,
  Lock,
  QrCode,
  Bell,
  Wifi,
  Languages,
  CheckCircle,
  Star
} from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const services = [
    {
      icon: Heart,
      title: 'Digital Health Card',
      description: 'Lifetime digital health record with QR code access at hospitals',
      features: ['Instant medical history access', 'QR code for hospitals', 'Emergency contact info', 'Blood group & allergies']
    },
    {
      icon: QrCode,
      title: 'Health Card Scanning',
      description: 'Scan QR codes at hospitals for instant patient data access',
      features: ['Hospital integration', 'Real-time updates', 'Secure data sharing', 'Multi-language support']
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Automated alerts for health checkups, vaccinations, and scheme benefits',
      features: ['Appointment reminders', 'Health checkup alerts', 'Scheme notifications', 'Emergency alerts']
    },
    {
      icon: Wifi,
      title: 'Offline Data Capture',
      description: 'Collect health data offline and sync when internet is available',
      features: ['Offline form filling', 'Auto-sync when online', 'Data validation', 'Progress tracking']
    },
    {
      icon: Languages,
      title: 'Multi-language Support',
      description: 'Complete system in Hindi, Bengali, Odia, Malayalam, and English',
      features: ['Regional languages', 'Voice assistance', 'Document translation', 'Cultural adaptation']
    },
    {
      icon: Lock,
      title: 'Secure & Private',
      description: 'Role-based access control with end-to-end data encryption',
      features: ['Encrypted data storage', 'Role-based permissions', 'Audit trails', 'GDPR compliance']
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Service Overview' },
    { id: 'schemes', label: 'Government Schemes' },
    { id: 'features', label: 'Key Features' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-800 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Healthcare Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Complete digital healthcare solution for migrant workers with government scheme integration,
              multilingual support, and offline capabilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="container mx-auto px-4 py-16">
        {activeTab === 'overview' && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={index} 
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-2xl mr-4 group-hover:bg-blue-200 transition-colors">
                      <Icon className="text-blue-600 w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {activeTab === 'schemes' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <GovernmentSchemes />
          </motion.div>
        )}

        {activeTab === 'features' && (
          <motion.div 
            className="space-y-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Core Features */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core Healthcare Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-6 flex items-center">
                    <Users className="w-6 h-6 mr-3" />
                    For Migrant Workers
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span>Digital health card with lifetime validity</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span>Access to government health schemes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span>Medical history tracking across states</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span>Emergency contact and blood group info</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-6 flex items-center">
                    <Heart className="w-6 h-6 mr-3" />
                    For Healthcare Providers
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span>Instant patient history access via QR scan</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span>Real-time medical record updates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span>Scheme eligibility verification</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span>Automated reporting and compliance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Features */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Wifi className="text-blue-600 w-10 h-10" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">Offline-First</h3>
                  <p className="text-gray-600">Works without internet, syncs when connected</p>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-green-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Lock className="text-green-600 w-10 h-10" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">Secure</h3>
                  <p className="text-gray-600">End-to-end encryption with role-based access</p>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-purple-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Globe className="text-purple-600 w-10 h-10" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">Multilingual</h3>
                  <p className="text-gray-600">5 languages with regional dialects support</p>
                </motion.div>
              </div>
            </div>

            {/* Implementation Status */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Implementation Status</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div 
                  className="bg-white p-6 rounded-xl text-center shadow-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl mb-2">✅</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Digital Health Cards</h3>
                  <p className="text-sm text-green-600 font-medium">Implemented</p>
                </motion.div>
                <motion.div 
                  className="bg-white p-6 rounded-xl text-center shadow-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl mb-2">✅</div>
                  <h3 className="font-semibold text-gray-900 mb-2">QR Code System</h3>
                  <p className="text-sm text-green-600 font-medium">Implemented</p>
                </motion.div>
                <motion.div 
                  className="bg-white p-6 rounded-xl text-center shadow-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl mb-2">✅</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Multilingual Support</h3>
                  <p className="text-sm text-green-600 font-medium">Implemented</p>
                </motion.div>
                <motion.div 
                  className="bg-white p-6 rounded-xl text-center shadow-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl mb-2">🚧</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Offline Sync</h3>
                  <p className="text-sm text-yellow-600 font-medium">In Development</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default Services;