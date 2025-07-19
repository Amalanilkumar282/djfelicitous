'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Music, User, Mail, Phone, MessageSquare } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  djName: string;
  djGenre: string;
}

export default function BookingModal({ isOpen, onClose, djName, djGenre }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventTime: '',
    venue: '',
    eventType: '',
    duration: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Booking request:', { ...formData, djName, djGenre });
    alert('Booking request submitted! We\'ll get back to you within 24 hours.');
    onClose();
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      eventTime: '',
      venue: '',
      eventType: '',
      duration: '',
      budget: '',
      message: ''
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
                        className="bg-gray-900 border border-cyan-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 max-w-xs sm:max-w-lg md:max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4 sm:mb-6">
              <div className="flex-1 pr-2">
                <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 leading-tight">
                  Book {djName}
                </h2>
                <p className="text-gray-400 mt-1 text-sm sm:text-base">{djGenre} Performance</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors shrink-0 touch-manipulation"
                aria-label="Close booking form"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="sm:col-span-2">
                  <label className="flex items-center gap-2 text-xs sm:text-sm font-medium mb-2 text-gray-300">
                    <User className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 focus:border-cyan-500 focus:outline-none transition-colors text-sm sm:text-base touch-manipulation"
                    placeholder="Your full name"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label className="flex items-center gap-2 text-xs sm:text-sm font-medium mb-2 text-gray-300">
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 focus:border-cyan-500 focus:outline-none transition-colors text-sm sm:text-base touch-manipulation"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label className="flex items-center gap-2 text-xs sm:text-sm font-medium mb-2 text-gray-300">
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 focus:border-cyan-500 focus:outline-none transition-colors text-sm sm:text-base touch-manipulation"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label className="flex items-center gap-2 text-xs sm:text-sm font-medium mb-2 text-gray-300">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                    Event Date *
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 focus:border-cyan-500 focus:outline-none transition-colors text-sm sm:text-base touch-manipulation"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label className="flex items-center gap-2 text-xs sm:text-sm font-medium mb-2 text-gray-300">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                    Event Time
                  </label>
                  <input
                    type="time"
                    name="eventTime"
                    value={formData.eventTime}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 focus:border-cyan-500 focus:outline-none transition-colors text-sm sm:text-base touch-manipulation"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="flex items-center gap-2 text-xs sm:text-sm font-medium mb-2 text-gray-300">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                    Venue *
                  </label>
                  <input
                    type="text"
                    name="venue"
                    value={formData.venue}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 focus:border-cyan-500 focus:outline-none transition-colors text-sm sm:text-base touch-manipulation"
                    placeholder="Venue name and location"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label className="flex items-center gap-2 text-xs sm:text-sm font-medium mb-2 text-gray-300">
                    <Music className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                    Event Type *
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 focus:border-cyan-500 focus:outline-none transition-colors text-sm sm:text-base touch-manipulation"
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="club">Club Night</option>
                    <option value="festival">Festival</option>
                    <option value="private">Private Party</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="sm:col-span-1">
                  <label className="flex items-center gap-2 text-xs sm:text-sm font-medium mb-2 text-gray-300">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                    Duration
                  </label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 focus:border-cyan-500 focus:outline-none transition-colors text-sm sm:text-base touch-manipulation"
                  >
                    <option value="">Select duration</option>
                    <option value="1-2 hours">1-2 hours</option>
                    <option value="3-4 hours">3-4 hours</option>
                    <option value="5-6 hours">5-6 hours</option>
                    <option value="all-night">All night</option>
                    <option value="multi-day">Multi-day</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="flex items-center gap-2 text-xs sm:text-sm font-medium mb-2 text-gray-300">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 focus:border-cyan-500 focus:outline-none transition-colors text-sm sm:text-base touch-manipulation"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-500">Under $500</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2500-5000">$2,500 - $5,000</option>
                    <option value="over-5000">Over $5,000</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-xs sm:text-sm font-medium mb-2 text-gray-300">
                  <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                  Additional Details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 focus:border-cyan-500 focus:outline-none transition-colors resize-none text-sm sm:text-base touch-manipulation"
                  placeholder="Tell us more about your event, special requests, or any questions you have..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-700">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:flex-1 px-4 sm:px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors text-sm sm:text-base font-medium touch-manipulation order-2 sm:order-1"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full sm:flex-1 px-4 sm:px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all transform hover:scale-105 font-semibold text-sm sm:text-base touch-manipulation order-1 sm:order-2"
                >
                  Send Booking Request
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
