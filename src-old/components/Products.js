import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Package, CheckCircle, Truck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { mockData } from '../mockData';

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const handleGetQuote = (productName) => {
    const message = `Hi! I'm interested in getting a quote for ${productName}. Please provide more details.`;
    const whatsappUrl = `https://wa.me/${mockData.company.phone.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="products" className="py-20 bg-white" ref={ref}>
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
            Our Premium Products
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-6"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover our range of high-quality organic fertilizers designed to enhance soil fertility and boost crop yields naturally.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {mockData.products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden border-0 shadow-lg bg-gradient-to-br from-white to-green-50">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-600 hover:bg-green-700 text-white">
                      Premium Quality
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-gray-800 flex items-center">
                    <Package className="h-6 w-6 text-green-600 mr-2" />
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Benefits */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      Key Benefits
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Packaging */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <Truck className="h-5 w-5 text-green-600 mr-2" />
                      Packaging Options
                    </h4>
                    <p className="text-sm text-gray-600">{product.packaging}</p>
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={() => handleGetQuote(product.name)}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Quote Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg max-w-4xl mx-auto border border-green-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Custom Solutions Available</h3>
            <p className="text-gray-600 mb-6">
              We also offer customized organic fertilizer solutions based on your specific soil requirements and crop needs. 
              Contact us for bulk orders and special packaging options.
            </p>
            <Button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3"
            >
              Contact for Custom Solutions
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;