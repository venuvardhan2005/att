import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Dashboard from './components/Dashboard';
import AttendanceMethod from './components/AttendanceMethod';
import QRCodeScanner from './components/QRCodeScanner';
import FaceRecognition from './components/FaceRecognition';
import BluetoothDetection from './components/BluetoothDetection';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard onMethodSelect={setCurrentView} />;
      case 'qr':
        return <QRCodeScanner onBack={() => setCurrentView('dashboard')} />;
      case 'face':
        return <FaceRecognition onBack={() => setCurrentView('dashboard')} />;
      case 'bluetooth':
        return <BluetoothDetection onBack={() => setCurrentView('dashboard')} />;
      case 'methods':
        return <AttendanceMethod onBack={() => setCurrentView('dashboard')} onMethodSelect={setCurrentView} />;
      default:
        return <Dashboard onMethodSelect={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-6"
      >
        {renderView()}
      </motion.div>
    </div>
  );
}

export default App;
