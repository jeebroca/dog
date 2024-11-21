import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedDogs from './components/FeaturedDogs';
import PricingInfo from './components/PricingInfo';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <FeaturedDogs />
        <PricingInfo />
      </div>
    </div>
  );
}

export default App;