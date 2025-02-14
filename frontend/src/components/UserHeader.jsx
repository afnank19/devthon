import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <header className="bg-gray-800 p-4 w-full mb-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo or App Name */}
        <h1 className="text-white text-2xl font-semibold">Vocal Training App</h1>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <Link
            to="/userHomePage" // Home Page Link
            className="text-white text-lg hover:text-blue-400 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/userProfile" // User Profile Link
            className="text-white text-lg hover:text-blue-400 transition duration-200"
          >
            Profile
          </Link>
          <Link
            to="/certificate" // Certificate Link
            className="text-white text-lg hover:text-blue-400 transition duration-200"
          >
            Certificate
          </Link>
          <Link
            to="/aiVocal" // Certificate Link
            className="text-white text-lg hover:text-blue-400 transition duration-200"
          >
            AI Vocals
          </Link>
        </nav>
      </div>
    </header>
  );
}
