import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/useAuth';
// Removed: import api from '../utils/api';
import { toast } from 'react-toastify';

const AdminDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  // Removed: const [error, setError] = useState(null);

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      toast.error('Unauthorized access. Only administrators can view this page.');
      navigate('/login');
      return;
    }
    setLoading(false);
  }, [user, navigate]);

  if (loading) {
    return <div className="text-center p-8">Loading Admin Dashboard...</div>;
  }

  // Removed: if (error) { ... }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Admin Dashboard</h1>
        <p className="text-gray-700">Welcome to the administrator dashboard. Here you will find an overview of the system, including user management, health statistics, and system configurations.</p>
        {/* Future content for admin monitoring will go here */}
      </div>
    </div>
  );
};

export default AdminDashboard;