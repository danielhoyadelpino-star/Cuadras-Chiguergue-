import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Classes from '../components/Classes';
import Horses from '../components/Horses';
import Excursions from '../components/Excursions';
import Boarding from '../components/Boarding';
import BuySell from '../components/BuySell';
import Transport from '../components/Transport';
import Facilities from '../components/Facilities';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Map from '../components/Map';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import { Toaster } from '../components/ui/sonner';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Classes />
        <Horses />
        <Excursions />
        <Boarding />
        <BuySell />
        <Transport />
        <Facilities />
        <Gallery />
        <Contact />
        <Map />
      </main>
      <Footer />
      <FloatingButtons />
      <Toaster position="top-right" richColors />
    </div>
  );
};

export default Home;
