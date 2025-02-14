import React, { useState } from 'react';
import InstructorHeader from '../../components/InstructorHeader';

export default function CreateCourse() {
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    modules: [
      { title: '', textContent: '' },
      { audioFile: null, audioDescription: '' },
      { videoFile: null, videoDescription: '' },
      { document: null, guide: '' },
    ],
  });

  const handleInputChange = (e, index, field) => {
    const newCourseData = { ...courseData };
    if (field === 'title' || field === 'description') {
      newCourseData[field] = e.target.value;
    } else {
      newCourseData.modules[index][field] = e.target.value;
    }
    setCourseData(newCourseData);
  };

  const handleFileChange = (e, index, field) => {
    const newCourseData = { ...courseData };
    newCourseData.modules[index][field] = e.target.files[0];
    setCourseData(newCourseData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., saving course data)
    alert('Course created successfully!');
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-gray-900 to-gray-700 min-h-screen">
      <InstructorHeader />

      {/* Create Course Form */}
      <div className="bg-slate-900 p-10 rounded-xl shadow-2xl text-center w-full max-w-4xl mx-auto mb-10 transition transform hover:shadow-xl">
        <h2 className="text-3xl font-semibold text-white mb-6">Create New Course</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Course Title */}
          <div>
            <input
              type="text"
              placeholder="Course Title"
              value={courseData.title}
              onChange={(e) => handleInputChange(e, null, 'title')}
              className="w-full p-5 rounded-md text-white font-bold focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Course Description */}
          <div>
            <textarea
              placeholder="Course Description"
              value={courseData.description}
              onChange={(e) => handleInputChange(e, null, 'description')}
              className="w-full p-5 rounded-md text-white font-bold focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Module 1 - Text Area */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Module 1 Title"
              value={courseData.modules[0].title}
              onChange={(e) => handleInputChange(e, 0, 'title')}
              className="w-full p-5 rounded-md text-white font-bold focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <textarea
              placeholder="Module 1 Content"
              value={courseData.modules[0].textContent}
              onChange={(e) => handleInputChange(e, 0, 'textContent')}
              className="w-full p-5 rounded-md text-white font-bold focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Module 2 - Audio File Upload */}
          <div className="space-y-4">
            <input
              type="file"
              onChange={(e) => handleFileChange(e, 1, 'audioFile')}
              className="w-full p-5 rounded-md text-white font-bold focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <textarea
              placeholder="Audio Description"
              value={courseData.modules[1].audioDescription}
              onChange={(e) => handleInputChange(e, 1, 'audioDescription')}
              className="w-full p-5 rounded-md text-white font-bold focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Module 3 - Video File Upload */}
          <div className="space-y-4">
            <input
              type="file"
              onChange={(e) => handleFileChange(e, 2, 'videoFile')}
              className="w-full p-5 rounded-md text-white font-bold focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <textarea
              placeholder="Video Description"
              value={courseData.modules[2].videoDescription}
              onChange={(e) => handleInputChange(e, 2, 'videoDescription')}
              className="w-full p-5 rounded-md text-white font-bold focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Module 4 - Document Upload */}
          <div className="space-y-4">
            <input
              type="file"
              onChange={(e) => handleFileChange(e, 3, 'document')}
              className="w-full p-5 rounded-md text-white font-bold focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <textarea
              placeholder="Guide Description"
              value={courseData.modules[3].guide}
              onChange={(e) => handleInputChange(e, 3, 'guide')}
              className="w-full p-5 rounded-md text-white font-bold focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
          >
            Create Course
          </button>
        </form>
      </div>
    </div>
  );
}
