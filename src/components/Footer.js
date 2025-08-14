import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Mail, Phone, MapPin, Globe, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { mockData } from '../mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Export Info', href: '#export' },
    { name: 'Contact', href: '#contact' }
  ];

  const products = [
    'Cow Dung Manure',
    'Vermicompost',
    'Organic Fertilizer Mix',
    'Custom Solutions'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-700' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2 mb-6">
              <Leaf className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold">{mockData.company.name}</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {mockData.company.tagline}
            </p>
            <p className="text-gray-400 text-sm">
              Leading the sustainable agriculture revolution with premium organic fertilizers 
              exported worldwide. Trusted by farmers across 15+ countries.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-green-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 hover:translate-x-1 transform"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-green-400">Our Products</h3>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index} className="text-gray-300">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {product}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-green-400">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <a 
                  href={`tel:${mockData.company.phone}`}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  {mockData.company.phone}
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <a 
                  href={`mailto:${mockData.company.email}`}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  {mockData.company.email}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  {mockData.company.address}
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`text-gray-400 ${social.color} transition-colors duration-200`}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} {mockData.company.name}. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <button className="hover:text-green-400 transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="hover:text-green-400 transition-colors duration-200">
                Terms of Service
              </button>
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-1" />
                <span>Global Shipping Available</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;