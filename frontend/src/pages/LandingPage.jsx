import React from 'react'
import { useNavigate } from 'react-router';


export default function() {
const navigate = useNavigate();

    return (
        <div className='landing flex flex-col py-20 min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white'>
    
          <header className='flex justify-between items-center px-10 py-6 bg-gray-800 shadow-lg w-full fixed top-0 left-0 right-0'>
            <div className='flex gap-6'>
            <h3 className="font-semibold text-xl sm:text-3xl lg:text-2xl font-serif">Online <span className="px-1">Vocal</span> Training</h3>
            </div>
            <div>
                <button 
                onClick={() => navigate('/login')} 
                className='px-6 py-2 rounded-full bg-blue-600 text-white hover:font-semibold transition-all shadow-lg'>
                    Login
                </button>
            </div>
          </header>
    
          <main className='flex flex-col items-center justify-center flex-grow text-center px-5 sm:px-10 py-32'>
            <h1 className='font-extrabold text-4xl sm:text-5xl lg:text-6xl'>
              Online Vocal Training & Lesson Managment System
            </h1>
            <p className='mt-4 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto text-gray-300'>
              Aspiring Singers and Vocalists can now easily manage their lessons and training online
            </p>
            <button 
              onClick={() => navigate('/signup')} 
              className='mt-8 bg-blue-600 text-white px-8 py-3 rounded-full hover:font-semibold transition-all transform hover:scale-105 shadow-lg'>
              Sign Up
            </button>
            <p className='mt-4 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto text-gray-300'>
                New Here? Sign Up to get started
            </p>
          </main>
    
          <div className='flex flex-col justify-center items-center text-center px-5 sm:px-10 pb-12'>
            <h2 className='font-semibold text-3xl sm:text-4xl lg:text-5xl'>
              Training Made <span className='text-blue-400 font-extrabold'>Seamless</span> For Aspiring Singers
            </h2>
          </div>
        </div>
      );
}
