import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

export default function AnalyticsDashboard({ isOpen, onClose }) {
  const [viewCount, setViewCount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      // Fetch view count
      fetch('https://api.countapi.xyz/get/ronflakes-portfolio/visits')
        .then(res => res.json())
        .then(data => {
          setViewCount(data.value);
          setLoading(false);
        })
        .catch(() => {
          setViewCount('Error loading');
          setLoading(false);
        });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 lg:p-8 relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <IoClose size={24} />
          </button>

          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl lg:text-3xl font-bold mb-2">
              📊 Analytics Dashboard
            </h2>
            <p className="text-gray-600 text-sm">Your private portfolio insights</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Total Views */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">👁️</span>
                <h3 className="font-semibold text-gray-700">Total Views</h3>
              </div>
              {loading ? (
                <div className="text-2xl font-bold text-blue-600 animate-pulse">Loading...</div>
              ) : (
                <div className="text-4xl font-bold text-blue-600">{viewCount?.toLocaleString() || '0'}</div>
              )}
              <p className="text-xs text-gray-600 mt-1">Portfolio page visits</p>
            </div>

            {/* Google Analytics */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">📈</span>
                <h3 className="font-semibold text-gray-700">Google Analytics</h3>
              </div>
              <a
                href="https://analytics.google.com/analytics/web/#/p467728252/reports/intelligenthome"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
              >
                View Full Dashboard →
              </a>
              <p className="text-xs text-gray-600 mt-3">Detailed visitor insights</p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
              <span>🎯</span> Tracking Events
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Project views tracked
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Resume downloads tracked
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Page navigation tracked
              </li>
            </ul>
          </div>

          {/* Footer Note */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              🔒 This dashboard is only visible to you. Double-click the logo to toggle.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
