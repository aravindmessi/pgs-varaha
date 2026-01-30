import React from 'react';
import Button from './Button';
import ContentBlock from './ContentBlock';

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="pt-16 md:pt-24 pb-20 md:pb-28 bg-white"
    >
      {/* STANDARDIZED TEXT */}
      <ContentBlock
        label="Contact"
        title="Get in touch"
        description="Interested in partnerships, careers, or learning more about our climate solutions? We’d love to hear from you."
      />

      {/* FORM */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
        <div className="max-w-xl">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-800"
            />

            <input
              type="email"
              placeholder="Your email"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-800"
            />

            <textarea
              rows={5}
              placeholder="Your message"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-800"
            />

            <div className="pt-4">
              <Button>Send message</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
