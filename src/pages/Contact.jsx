import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { config } from '../config/config';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    message: '',
    inquiryType: 'general'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `New Contact Form Submission:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Event Date: ${formData.eventDate}
Inquiry Type: ${formData.inquiryType}
Message: ${formData.message}`;
    
    // Open WhatsApp with the message
    const url = `https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      message: '',
      inquiryType: 'general'
    });
    
    alert('Redirecting to WhatsApp to send your inquiry...');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-luxury-blush via-white to-luxury-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-luxury-navy mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our wedding cards? Ready to start your design journey? We're here to help!
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-luxury-blush/30 to-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-serif font-bold text-luxury-navy mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-luxury-blush text-luxury-rosegold rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone Number</h3>
                    <a href={`tel:${config.phoneNumber}`} className="text-gray-600 hover:text-luxury-gold">
                      {config.phoneNumber}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Mon-Sat, 10AM-7PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-luxury-blush text-luxury-rosegold rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Address</h3>
                    <a href={`mailto:${config.email}`} className="text-gray-600 hover:text-luxury-gold">
                      {config.email}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-luxury-blush text-luxury-rosegold rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Studio Address</h3>
                    <p className="text-gray-600">{config.address}</p>
                    <p className="text-sm text-gray-500 mt-1">By appointment only</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-luxury-blush text-luxury-rosegold rounded-lg">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 10:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Sunday: By Appointment Only</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8 pt-8 border-t">
                <h3 className="font-semibold text-gray-900 mb-4">Quick WhatsApp Inquiry</h3>
                <a
                  href={`https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(config.whatsapp.defaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  {/* <MessageCircle className="w-5 h-5" /> */}
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-serif font-bold text-luxury-navy mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you shortly via WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Event Date
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Inquiry
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="custom-design">Custom Design Request</option>
                    <option value="bulk-order">Bulk Order Inquiry</option>
                    <option value="sample">Request Samples</option>
                    <option value="quote">Get a Quote</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                    placeholder="Tell us about your wedding, design preferences, or any special requirements..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-luxury-gold to-luxury-rosegold text-white rounded-lg text-lg font-semibold hover:shadow-xl transition-all"
                  >
                    <Send className="w-5 h-5" />
                    Send via WhatsApp
                  </button>
                  <p className="text-sm text-gray-500 mt-3 text-center">
                    Your message will be sent directly to our WhatsApp for immediate attention.
                  </p>
                </div>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="mt-12 bg-gradient-to-br from-luxury-blush/30 to-white p-8 rounded-2xl">
              <h3 className="text-xl font-serif font-bold text-luxury-navy mb-6">
                Frequently Asked Questions
              </h3>
              
              <div className="space-y-4">
                {[
                  {
                    question: "How long does it take to receive my order?",
                    answer: "Production time varies by design complexity. Typically, printed cards take 7-14 business days, while digital invitations are delivered in 3-5 business days."
                  },
                  {
                    question: "Can I see samples before ordering?",
                    answer: "Yes! We provide digital samples for all designs and can arrange physical samples for a small fee that's refundable with your order."
                  },
                  {
                    question: "Do you offer customization?",
                    answer: "Absolutely! All our designs can be customized. We can change colors, text, and even create completely new designs based on your vision."
                  },
                  {
                    question: "What's the minimum order quantity?",
                    answer: "Minimum order is 50 pieces for printed cards. For digital invitations, there's no minimum quantity."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;