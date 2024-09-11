import React from "react";

const Footer = ({ config }) => {
  return (
    <footer className="bg-white border-t border-fill_primary py-8">
      <div className="container mx-auto flex flex-col lg:flex-row space-y-8 lg:space-y-0 justify-between">
        <div className="space-y-3">
          <div className="h-11">
            <p className="text-2xl font-semibold md:text-4xl">
              {config.content.message_footer_title}
            </p>
          </div>
          <div className="h-8 max-w-96">
            <p className="text-sm">{config.content.message_footer}</p>
          </div>
          <div className="flex flex-col space-y-2 pt-4">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border-2 border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full lg:w-1/2">
          <div>
            <p>Shop</p>
            <ul className="text-fill_secondary">
              <li>Women’s</li>
              <li>Men’s</li>
              <li>Kids’ Shoes</li>
              <li>Equipment</li>
              <li>By Activity</li>
              <li>Gift Cards</li>
              <li>Sale</li>
            </ul>
          </div>
          <div>
            <p>Help</p>
            <ul className="text-fill_secondary">
              <li>Help Center</li>
              <li>Order Status</li>
              <li>Size Chart</li>
              <li>Returns & Warranty</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <p>About</p>
            <ul className="text-fill_secondary">
              <li>About Us</li>
              <li>Responsibility</li>
              <li>Technology & Innovation</li>
              <li>Explore Our Stories</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
