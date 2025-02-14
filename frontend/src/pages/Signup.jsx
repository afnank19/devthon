import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

export default function Signup() {
  const [cmsId, setCmsId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signup = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    // Signup logic here
    // e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:3000/users', {
        name: cmsId,
        email,
        password,
        role
      });
      console.log('Signup successful:', response.data);
      // Optionally, you can store data or redirect after signup
    } catch (err) {
      console.error('Signup failed:', err);
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
      if (role === 'user') {
        navigate('/userHomePage');
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              signup();
            }}
          >
            <div className="mb-4">
              <label
                htmlFor="cmsId"
                className="block text-gray-300 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="cmsId"
                value={cmsId}
                onChange={(e) => setCmsId(e.target.value)}
                className="w-full px-3 py-2 border border-gray-500 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-300 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-500 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your Email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="role"
                className="block text-gray-300 font-bold mb-2"
              >
                Role
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3 py-2 border border-gray-500 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="instructor">Instructor</option>
                <option value="user">User</option>
              </select>
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
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-300 font-bold mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-500 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Confirm your password"
              />
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
