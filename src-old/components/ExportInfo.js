import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, TrendingUp, Users, Award, MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { mockData } from '../mockData';

const ExportInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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

  const statIcons = [
    { icon: Globe, color: 'text-blue-600' },
    { icon: Users, color: 'text-green-600' },
    { icon: TrendingUp, color: 'text-orange-600' },
    { icon: Award, color: 'text-purple-600' }
  ];

  return (
    <section id="export" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
          >
            {mockData.exportInfo.title}
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-6"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {mockData.exportInfo.description}
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {mockData.exportInfo.stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="text-center p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="mb-4">
                    {React.createElement(statIcons[index].icon, {
                      className: `h-12 w-12 mx-auto ${statIcons[index].color}`
                    })}
                  </div>
                  <motion.div
                    className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Countries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Countries List */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <MapPin className="h-8 w-8 text-blue-600 mr-3" />
              Countries We Serve
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {mockData.exportInfo.countries.map((country, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium text-sm">{country}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-blue-500 to-emerald-500 rounded-3xl p-8 shadow-2xl">
              <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm"></div>
              
              <div className="relative z-10 text-white text-center">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="mb-6"
                >
                  <Globe className="h-24 w-24 mx-auto" />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4">Expanding Globally</h3>
                <p className="text-blue-100 mb-6">
                  Committed to bringing sustainable agriculture solutions to farmers worldwide
                </p>
                
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-4">
                  <p className="text-sm font-medium">Ready to expand to new markets</p>
                  <p className="text-xs text-blue-100 mt-1">Contact us for partnership opportunities</p>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-20 h-20 bg-white/20 rounded-full backdrop-blur-md flex items-center justify-center"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                <TrendingUp className="h-8 w-8 text-white" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-400/30 rounded-full backdrop-blur-md flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, -180, -360]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <Award className="h-6 w-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0 shadow-xl">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">Ready to Import Quality Organic Fertilizers?</h3>
              <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
                Join our growing network of international partners and bring premium organic solutions to your local market.
              </p>
              <motion.button
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Partnership Discussion
              </motion.button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ExportInfo;