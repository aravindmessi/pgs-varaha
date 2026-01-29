import React from 'react';
import Button from './Button';

const Contact: React.FC = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Get in Touch
        </h1>

        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Interested in partnering, careers, or learning more about our
          climate solutions? We’d love to hear from you.
        </p>

        <form className="max-w-xl mx-auto space-y-6 text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-800"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-800"
          />

          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-800"
          ></textarea>

          <div className="text-center pt-4">
            <Button>Send Message</Button>
          </div>
        </form>

      </div>
    </section>
  );
};

export default Contact;
