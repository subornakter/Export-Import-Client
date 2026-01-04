import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "How do I start importing products?",
    answer: "Simply sign up or log in, browse our global products, select what you like, and click 'Import' to add it to your 'My Imports' section instantly. No complicated forms needed!"
  },
  {
    question: "Is my data secure on Alpha Global Trade?",
    answer: "Yes! We use Firebase Authentication for secure login and MongoDB with encryption for storing your import records. All transactions are protected with industry-standard security."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We support major credit/debit cards, PayPal, bank transfers, and more. Payments are processed securely through our integrated gateway."
  },
  {
    question: "How do I track my imports and shipments?",
    answer: "Once imported, view real-time status in your personalized dashboard. We provide updates on quantity, shipping, and delivery timelines."
  },
  {
    question: "Are there any fees for using the platform?",
    answer: "Browsing and importing is free. We may charge a small transaction fee on successful purchases, which is transparently shown before checkout."
  },
  {
    question: "Can I export my own products?",
    answer: "Yes! Use 'My Exports' and 'Add Export' sections to list and manage your products for global buyers. Contact support for premium listing features."
  },
  {
    question: "What if I need help with customs or shipping?",
    answer: "Our 24/7 support team assists with customs clearance, tracking, and queries. Reach us via chat or email for expert guidance."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers. Find quick solutions to common queries about importing, exporting, and using our platform.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-base-100 rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none hover:bg-pink-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="text-pink-600" size={24} />
                ) : (
                  <ChevronDown className="text-pink-600" size={24} />
                )}
              </button>

              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5 text-gray-600 border-t border-gray-100"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">Still have questions?</p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
}