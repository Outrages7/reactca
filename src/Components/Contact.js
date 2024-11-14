// Contact.js
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const notify = () => toast("Feedback sent Successfully");

  return (
    <div className="bg-gray-50 text-gray-800 py-12 px-4 sm:px-8 md:px-16 min-h-screen">
      <section className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-green-700 mb-6 text-center">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Have questions or feedback? Feel free to reach out to us!
        </p>
        
        <form 
          action="https://formspree.io/f/{your-form-id}" // Replace with your actual Formspree ID
          method="POST" 
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault(); // Prevents page reload
            notify(); // Show the toast notification
            e.target.submit(); // Submit the form
          }}
        >
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Name</label>
            <input 
              type="text" 
              name="name" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none" 
              placeholder="Your Name" 
              required 
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Email</label>
            <input 
              type="email" 
              name="email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none" 
              placeholder="you@example.com" 
              required 
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Subject</label>
            <input 
              type="text" 
              name="subject" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none" 
              placeholder="Subject" 
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Message</label>
            <textarea 
              name="message" 
              rows="4" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none" 
              placeholder="Your Message" 
              required 
            ></textarea>
          </div>
          <div className="text-center">
            <button 
              type="submit" 
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Toast Container */}
        <ToastContainer />
      </section>
    </div>
  );
};

export default Contact;
