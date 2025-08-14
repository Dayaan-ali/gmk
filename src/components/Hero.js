import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sprout, Globe, Award } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../mockData';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.querySelector('#products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    { icon: Sprout, text: "100% Organic" },
    { icon: Globe, text: "Global Export" },
    { icon: Award, text: "Premium Quality" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Sprout className="h-4 w-4 mr-2 text-green-400" />
              <span className="text-sm font-medium">{mockData.company.tagline}</span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {mockData.hero.title}
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-green-100 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {mockData.hero.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                onClick={scrollToProducts}
                className="bg-white text-green-800 hover:bg-green-50 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-800 px-8 py-6 text-lg font-semibold rounded-xl"
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get Quote
              </Button>
            </motion.div>

            {/* Features */}
            <motion.div
              className="flex flex-wrap gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <feature.icon className="h-5 w-5 mr-2 text-green-400" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div
                className="w-full h-96 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl shadow-2xl"
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 1, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Sprout className="h-24 w-24 mx-auto mb-4 opacity-80" />
                    <p className="text-lg font-semibold opacity-90">Premium Organic Solutions</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full backdrop-blur-md flex items-center justify-center"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Globe className="h-8 w-8 text-white" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400/30 rounded-full backdrop-blur-md flex items-center justify-center"
                animate={{ 
                  y: [0, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Award className="h-6 w-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;