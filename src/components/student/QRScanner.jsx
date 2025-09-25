import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Camera, CheckCircle, AlertCircle, QrCode, X } from 'lucide-react';

const QRScanner = ({ onBack, user }) => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const [scanError, setScanError] = useState(null);

  const startScanner = () => {
    setIsScanning(true);
    setScanResult(null);
    setScanError(null);
    
    // Simulate QR code detection after 3 seconds
    setTimeout(() => {
      const success = Math.random() > 0.2; // 80% success rate
      
      if (success) {
        setScanResult({
          subject: 'Computer Science',
          teacher: 'Dr. Smith',
          time: new Date().toLocaleTimeString(),
          classroom: 'Room 101'
        });
      } else {
        setScanError('Invalid QR code or session expired');
      }
      setIsScanning(false);
    }, 3000);
  };

  const stopScanner = () => {
    setIsScanning(false);
    setScanResult(null);
    setScanError(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center mb-8"
      >
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mr-6"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Dashboard</span>
        </button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">QR Code Scanner</h1>
          <p className="text-gray-600">Scan your teacher's QR code to mark attendance</p>
        </div>
      </motion.div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-100">
        <div className="p-8">
          {/* Scanner Area */}
          <div className="text-center mb-8">
            <div className="relative w-80 h-80 mx-auto mb-6 bg-gray-900 rounded-lg overflow-hidden">
              {/* Camera View */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
              
              {!isScanning && !scanResult && !scanError && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <QrCode className="h-16 w-16 text-gray-500" />
                </div>
              )}

              {/* Scanning Animation */}
              {isScanning && (
                <>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera className="h-16 w-16 text-white" />
                  </div>
                  <motion.div
                    initial={{ y: 0, opacity: 0.8 }}
                    animate={{ y: '100%', opacity: 0.3 }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-0 left-0 w-full h-1 bg-green-400"
                  />
                  <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-green-400 rounded">
                    <div className="absolute -top-1 -left-1 w-6 h-6 border-t-4 border-l-4 border-green-400"></div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 border-t-4 border-r-4 border-green-400"></div>
                    <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-4 border-l-4 border-green-400"></div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-4 border-r-4 border-green-400"></div>
                  </div>
                </>
              )}

              {/* Success Result */}
              {scanResult && (
                <div className="absolute inset-0 bg-green-500 flex items-center justify-center">
                  <CheckCircle className="h-16 w-16 text-white" />
                </div>
              )}

              {/* Error Result */}
              {scanError && (
                <div className="absolute inset-0 bg-red-500 flex items-center justify-center">
                  <X className="h-16 w-16 text-white" />
                </div>
              )}
            </div>

            {/* Status Messages */}
            {isScanning && (
              <div className="mb-6">
                <div className="inline-flex items-center space-x-2 text-blue-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                  <span className="font-medium">Scanning for QR code...</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Point your camera at the QR code displayed by your teacher</p>
              </div>
            )}

            {scanResult && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mb-6 p-6 bg-green-50 border border-green-200 rounded-lg"
              >
                <div className="flex items-center justify-center space-x-2 text-green-700 mb-4">
                  <CheckCircle className="h-6 w-6" />
                  <span className="text-lg font-semibold">Attendance Marked Successfully!</span>
                </div>
                <div className="text-left space-y-2">
                  <p><span className="font-medium">Subject:</span> {scanResult.subject}</p>
                  <p><span className="font-medium">Teacher:</span> {scanResult.teacher}</p>
                  <p><span className="font-medium">Time:</span> {scanResult.time}</p>
                  <p><span className="font-medium">Classroom:</span> {scanResult.classroom}</p>
                </div>
              </motion.div>
            )}

            {scanError && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mb-6 p-6 bg-red-50 border border-red-200 rounded-lg"
              >
                <div className="flex items-center justify-center space-x-2 text-red-700 mb-2">
                  <AlertCircle className="h-6 w-6" />
                  <span className="text-lg font-semibold">Scan Failed</span>
                </div>
                <p className="text-red-600">{scanError}</p>
              </motion.div>
            )}

            {/* Controls */}
            <div className="space-y-4">
              {!isScanning && !scanResult && !scanError && (
                <button
                  onClick={startScanner}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors"
                >
                  Start Camera
                </button>
              )}

              {isScanning && (
                <button
                  onClick={stopScanner}
                  className="bg-red-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-red-700 transition-colors"
                >
                  Stop Scanner
                </button>
              )}

              {(scanResult || scanError) && (
                <button
                  onClick={() => {
                    setScanResult(null);
                    setScanError(null);
                  }}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors"
                >
                  Scan Another
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100"
      >
        <h3 className="text-lg font-semibold text-blue-900 mb-4">How to Scan QR Code:</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-blue-800">
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
            <p>Click "Start Camera" to activate the scanner</p>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
            <p>Point your camera at the teacher's QR code</p>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
            <p>Wait for automatic detection and confirmation</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default QRScanner;
