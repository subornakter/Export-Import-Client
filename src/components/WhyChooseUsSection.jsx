import { motion } from 'framer-motion';
import { 
  Globe, 
  Shield, 
  Zap, 
  Truck, 
  Clock, 
  HeadphonesIcon, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const features = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Product Access",
    desc: "Browse & import thousands of premium products from 50+ countries in one place"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "One-Click Import",
    desc: "Add any product to your personal 'My Imports' section instantly — no forms, no hassle"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "100% Secure & Verified",
    desc: "Firebase Authentication + verified suppliers ensure safe and trusted transactions"
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Real-Time Stock Sync",
    desc: "Live quantity updates across all users — never miss out on limited stock again"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "24/7 Fast Support",
    desc: "Our team is always ready to help you with customs, tracking, or any query"
  },
  {
    icon: <HeadphonesIcon className="w-8 h-8" />,
    title: "Dedicated Account Manager",
    desc: "Premium members get personal assistance for bulk orders & special requests"
  }
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600 mb-5">
            Why Traders Choose Alpha Global Trade
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            The most trusted, fastest, and smartest way to import premium products worldwide
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon Circle */}
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-red-600 text-white shadow-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Checkmark on hover */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CheckCircle2 className="w-8 h-8 text-pink-600" />
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-pink-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.desc}
              </p>

              {/* Small arrow on hover */}
              <ArrowRight className="absolute bottom-6 right-6 w-6 h-6 text-pink-600 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="/allproducts"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-pink-600 to-red-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300"
          >
            Start Importing Now
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}