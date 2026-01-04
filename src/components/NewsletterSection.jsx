import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email && email.includes('@')) {
      toast.success('🎉 Thank you! You have successfully subscribed to our newsletter.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setEmail('');
    } else {
      toast.error('Please enter a valid email address.', {
        position: "bottom-right",
        autoClose: 5000,
        theme: "colored",
      });
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-12 md:p-20 border border-gray-100 dark:border-gray-700"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="inline-block p-5 bg-pink-100 dark:bg-pink-900/30 rounded-full mb-8"
          >
            <Mail className="text-pink-600 dark:text-pink-400" size={48} />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600 mb-6">
            Stay Ahead in Global Trade
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Get weekly insights, exclusive import-export tips, market updates, and special offers delivered directly to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-6 max-w-3xl mx-auto">
            <div className="relative flex-1 group">
              <Mail className="absolute left-6 top-1/2 transform -translate-y-1/2 text-pink-600 dark:text-pink-400 transition-transform group-focus-within:scale-110" size={28} />
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-16 pr-8 py-6 text-lg bg-gray-100 dark:bg-gray-700 border-2 border-transparent rounded-2xl focus:outline-none focus:border-pink-500 dark:focus:border-pink-400 transition-all shadow-lg dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>

            <button
              type="submit"
              className="px-12 py-6 bg-gradient-to-r from-pink-600 to-red-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-4 group"
            >
              Subscribe Now
              <Send className="group-hover:translate-x-2 transition-transform" size={24} />
            </button>
          </form>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
            No spam ever. Unsubscribe anytime with one click.
          </p>
        </motion.div>
      </div>
    </section>
  );
}