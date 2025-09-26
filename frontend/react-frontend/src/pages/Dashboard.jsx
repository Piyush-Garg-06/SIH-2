import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/useAuth';
import { useNavigate, Link } from 'react-router-dom';
import {
  LogOut, User, FileText, Bell, Award, Calendar, QrCode,
  Stethoscope, Users, Shield, AlertTriangle, CheckCircle,
  Clock, Activity, TrendingUp, BarChart3
} from 'lucide-react';
import useUserData from '../hooks/useUserData';

const Dashboard = () => {
  const { user, logout, userProfile } = useAuth();
  const navigate = useNavigate();
  const { fetchUserDashboard, loading } = useUserData();
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const fetchDashboardData = async () => {
      try {
        const data = await fetchUserDashboard();
        if (data) {
          setDashboardData(data);
        }
      } catch (error) {
        console.error('Failed to fetch dashboard data', error);
      }
    };

    fetchDashboardData();
  }, [user, navigate, fetchUserDashboard]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!dashboardData) {
    return <div>Error loading dashboard data.</div>;
  }

  const getAlertColor = (type) => {
    switch (type) {
      case 'urgent': return 'bg-red-100 border-red-500 text-red-800';
      case 'warning': return 'bg-yellow-100 border-yellow-500 text-yellow-800';
      case 'info': return 'bg-blue-100 border-blue-500 text-blue-800';
      default: return 'bg-gray-100 border-gray-500 text-gray-800';
    }
  };

  const getStatColor = (color) => {
    switch (color) {
      case 'blue': return 'bg-blue-100 text-blue-600';
      case 'green': return 'bg-green-100 text-green-600';
      case 'red': return 'bg-red-100 text-red-600';
      case 'orange': return 'bg-orange-100 text-orange-600';
      case 'purple': return 'bg-purple-100 text-purple-600';
      case 'yellow': return 'bg-yellow-100 text-yellow-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-blue-900">{dashboardData.title}</h1>
              <p className="text-gray-600 mt-1">{dashboardData.subtitle}</p>
              <div className="flex items-center mt-2">
                <span className="text-sm text-gray-500">Welcome,</span>
                <span className="text-lg font-semibold text-blue-800 ml-1">{user.name}</span>
                <span className={`ml-3 px-3 py-1 rounded-full text-xs font-semibold capitalize
                  ${user.userType === 'worker' ? 'bg-blue-100 text-blue-800' :
                    user.userType === 'doctor' ? 'bg-green-100 text-green-800' :
                    user.userType === 'employer' ? 'bg-purple-100 text-purple-800' :
                    user.userType === 'patient' ? 'bg-yellow-100 text-yellow-800' : // Added patient color
                    'bg-red-100 text-red-800'}`}>
                  {user.userType}
                </span>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-md font-medium hover:bg-red-700 flex items-center transition-colors"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardData.stats.map((stat, index) => {
            const Icon = stat.icon ? {
              Activity, Calendar, QrCode, CheckCircle, Users, Stethoscope, FileText, AlertTriangle, Clock, TrendingUp, BarChart3, User
            }[stat.icon] : Activity; // Added User icon
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full ${getStatColor(stat.color)}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Alerts */}
        {dashboardData.alerts && dashboardData.alerts.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Important Alerts</h2>
            <div className="space-y-3">
              {dashboardData.alerts.map((alert, index) => (
                <div key={index} className={`p-4 rounded-lg border-l-4 ${getAlertColor(alert.type)}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-3" />
                      <span className="font-medium">{alert.message}</span>
                    </div>
                    <button className="bg-white px-3 py-1 rounded text-sm font-medium hover:bg-gray-50 transition-colors">
                      {alert.action}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Cards */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardData.cards.map((card, index) => {
              const Icon = card.icon ? {
                QrCode, FileText, Calendar, Bell, Users, Stethoscope, Shield, BarChart3, User
              }[card.icon] : User; // Added User icon
              return (
                <Link
                  key={index}
                  to={card.path}
                  className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow block"
                >
                  <div className={`w-12 h-12 ${getStatColor(card.color)} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Additional Actions */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Additional Actions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/healthcard" className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">
              View Profile / Health Card
            </Link>
            <Link to="/healthcard" className="bg-green-600 text-white px-4 py-2 rounded-md font-medium hover:bg-green-700 transition-colors">
              View Health Card
            </Link>
            <Link to="/contact" className="bg-purple-600 text-white px-4 py-2 rounded-md font-medium hover:bg-purple-700 transition-colors">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;