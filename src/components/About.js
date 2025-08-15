import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Leaf, Users, Target } from 'lucide-react';
import { mockData } from '../mockData';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-green-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                {mockData.about.title}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mb-6"></div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed"
            >
              {mockData.about.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-2xl shadow-lg border border-green-100"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Target className="h-6 w-6 text-green-600 mr-2" />
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {mockData.about.mission}
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <motion.div
              variants={itemVariants}
              className="grid sm:grid-cols-2 gap-4"
            >
              {mockData.about.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-green-100"
                  whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(34, 197, 94, 0.15)" }}
                  transition={{ duration: 0.2 }}
                >
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Visual Side */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl p-8 shadow-2xl">
              <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm"></div>
              
              <div className="relative z-10 text-white text-center">
                <motion.div
                  className="mb-8"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Leaf className="h-20 w-20 mx-auto mb-4" />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4">Sustainable Agriculture</h3>
                <p className="text-green-100 mb-8">
                  Leading the way in organic farming solutions for a greener tomorrow
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">10+</div>
                    <div className="text-green-100 text-sm">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <div className="text-green-100 text-sm">Organic Products</div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 rounded-full backdrop-blur-md flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <Users className="h-8 w-8 text-white" />
              </motion.div>
            </div>

            {/* Floating cards */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-green-100"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">Premium Quality</div>
                  <div className="text-xs text-gray-500">Certified Organic</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;