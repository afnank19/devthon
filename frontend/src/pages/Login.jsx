import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export default function Login() {
  const [cmsId, setCmsId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth', {
        email,
        password
      });
      // Destructure the response data: { id, role, aToken }
      const { id, role, aTkn } = response.data;

      console.log(id, role, aTkn);
      // Save values to localStorage
      localStorage.setItem('id', id);
      localStorage.setItem('role', role);
      localStorage.setItem('aTkn', aTkn);

      // Optionally, you might redirect the user or update state here
    } catch (err) {
      console.error('Authentication failed:', err);
      // setError(err.message || 'An error occurred during authentication.');
    } finally {
      // setLoading(false);
      // console.log(localStorage);

      if (role === 'instructor') {
      } else {
        navigate('/userHomePage');
      }
    }
  };

  return (
    <div className="flex flex-col items-center pt-2 h-screen bg-gradient-to-b from-gray-900 to-gray-700">
      <h3 className="font-semibold text-slate-200 text-2xl font-serif">
        Online <span className="px-1">Vocal</span> Training
      </h3>
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-slate-500 bg-opacity-10 backdrop-blur-md shadow-lg rounded-lg p-8 w-96 border border-gray-600">
          <div className="flex justify-center mb-6 "></div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="cmsId"
                className="block text-gray-300 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-500 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your Email here"
              />
            </div>
            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block text-gray-300 font-bold mb-2"
              >
                Password
              </label>
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-500 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute inset-y-0 mt-4 right-3 flex items-center text-gray-400 h-full"
                onClick={() => setPasswordVisible(!passwordVisible)}
              ></button>
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
