import React from "react";

const Footer = () => {
  return (
    <footer className="bg-EcomDark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Contact Us</h3>
            <p>Email: support@modish.com</p>
            <p>Phone: +123 456 7890</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="/" className="hover:text-orange-400">Home</a>
              </li>
              <li>
                <a href="/" className="hover:text-orange-400">Shop</a>
              </li>
              <li>
                <a href="/" className="hover:text-orange-400">About Us</a>
              </li>
              <li>
                <a href="/" className="hover:text-orange-400">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-white hover:text-blue-600">
                <i className="fab fa-facebook-f"></i> {/* Assuming you include FontAwesome for icons */}
              </a>
              <a href="https://twitter.com" className="text-white hover:text-blue-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="text-white hover:text-pink-500">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Newsletter</h3>
            <p>Sign up for our newsletter and get the latest deals directly to your inbox.</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-2 p-2 w-full rounded-md text-black"
            />
            <button className="mt-2 bg-orange-700 text-white px-4 py-2 rounded-md w-full hover:bg-orange-900">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm mt-8">
          <p>&copy; 2024 Modish. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
