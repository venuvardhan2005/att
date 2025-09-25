import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AuthLayout from './components/auth/AuthLayout';
import TeacherDashboard from './components/teacher/TeacherDashboard';
import StudentDashboard from './components/student/StudentDashboard';
import AdminDashboard from './components/admin/AdminDashboard';
import ParentDashboard from './components/parent/ParentDashboard';
import Notification from './components/shared/Notification';

function App() {
  const [user, setUser] = useState(null);
  const [currentView, setCurrentView] = useState('dashboard');
  const [notification, setNotification] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('dashboard');
    setNotification(null);
  };
  
  // Simulate a class start notification
  useEffect(() => {
    if (user && (user.role === 'student' || user.role === 'teacher')) {
      const timer = setTimeout(() => {
        setNotification({
          title: 'Class Starting Soon!',
          message: 'Your next class, "Physics", is starting in 5 minutes in Room 301.',
        });
      }, 5000); // Show notification 5 seconds after login

      return () => clearTimeout(timer);
    }
  }, [user]);


  const renderDashboard = () => {
    if (!user) {
      return <AuthLayout onLogin={handleLogin} />;
    }

    switch (user.role) {
      case 'teacher':
        return <TeacherDashboard user={user} onLogout={handleLogout} currentView={currentView} setCurrentView={setCurrentView} />;
      case 'student':
        return <StudentDashboard user={user} onLogout={handleLogout} currentView={currentView} setCurrentView={setCurrentView} />;
      case 'admin':
        return <AdminDashboard user={user} onLogout={handleLogout} currentView={currentView} setCurrentView={setCurrentView} />;
      case 'parent':
        return <ParentDashboard user={user} onLogout={handleLogout} currentView={currentView} setCurrentView={setCurrentView} />;
      default:
        return <AuthLayout onLogin={handleLogin} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
       {notification && (
        <Notification
          notification={notification}
          onDismiss={() => setNotification(null)}
        />
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {renderDashboard()}
      </motion.div>
    </div>
  );
}

export default App;
