import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react';
import { useState } from 'react';

// Custom red marker icon (pink-red theme match)
const customIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
  className: 'hue-rotate-180 saturate-200' // optional: red tint (Leaflet default blue -> red)
});

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // তোমার backend-এ send করো বা toast show করো
    alert('Message sent successfully! We will reply soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-base-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600 mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Have questions about importing, exporting, or our platform? We're here to help 24/7.
          </motion.p>
        </div>
      </section>

      {/* Main Content: Map + Form */}
      <section className="py-16 bg-base-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info + Map */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Location</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <MapPin className="text-pink-600" size={28} />
                  <div>
                    <p className="font-semibold">Head Office</p>
                    <p className="text-gray-600">Dhaka, Bangladesh</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-pink-600" size={28} />
                  <div>
                    <p className="font-semibold">+880 1234-567890</p>
                    <p className="text-gray-600">Mon-Fri 9AM-6PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-pink-600" size={28} />
                  <p className="font-semibold">support@alphaglobaltrade.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <Globe className="text-pink-600" size={28} />
                  <p className="font-semibold">www.alphaglobaltrade.com</p>
                </div>
              </div>

              {/* Leaflet Map - Bangladesh, Dhaka marker */}
              <div className="h-96 rounded-2xl overflow-hidden shadow-2xl">
                <MapContainer center={[23.8103, 90.4125]} zoom={10} style={{ height: '100%', width: '100%' }}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
                  />
                  <Marker position={[23.8103, 90.4125]} icon={customIcon}>
                    <Popup>
                      <strong>Alpha Global Trade</strong><br />
                      Dhaka, Bangladesh<br />
                      Your Global Trade Partner
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-pink-500 transition"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-pink-500 transition"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-pink-500 transition"
                />
                <textarea
                  rows="6"
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-pink-500 transition resize-none"
                />
                <button
                  type="submit"
                  className="w-full md:w-auto px-10 py-5 bg-gradient-to-r from-pink-600 to-red-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  Send Message
                  <Send size={24} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}