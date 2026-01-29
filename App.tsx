import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Founders from './components/Founders';
import Solutions from './components/Solutions';
import Technology from './components/Technology';
import Impact from './components/Impact';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-forest-100 selection:text-forest-900">
      <Navbar />

      <main>
        {/* HOME */}
        <section id="hero">
          <Hero />
        </section>

        {/* ABOUT US */}
        <section id="about">
          <Mission />
        </section>

        {/* FOUNDERS */}
        <section id="founders">
          <Founders />
        </section>

        {/* SOLUTIONS */}
        <section id="solutions">
          <Solutions />
        </section>

        {/* OUR TECH */}
        <section id="ourtech">
          <Technology />
        </section>

        {/* IMPACT */}
        <section id="impact">
          <Impact />
        </section>

        {/* CAREERS */}
        <section id="careers">
          <Partners />
        </section>

        {/* CONTACT PAGE */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
