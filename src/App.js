import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import ExportInfo from './components/ExportInfo';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import { Toaster } from './components/ui/toaster';

const Home = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <About />
      <Products />
      <ExportInfo />
      <Contact />
      <Footer />
      <WhatsAppFloat />
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;