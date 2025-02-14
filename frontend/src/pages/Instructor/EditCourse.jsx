import React, { useState, useEffect } from 'react';
import InstructorHeader from '../../components/InstructorHeader';

export default function EditCourse() {
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

  useEffect(() => {
    // Fetch the existing course data to edit (mocked data here for demo)
    const existingCourseData = {
      title: 'Advanced Vocal Training',
      description: 'This course focuses on advanced vocal techniques and exercises.',
      modules: [
        { title: 'Module 1: Vocal Exercises', textContent: 'Detailed text content for module 1' },
        { audioFile: null, audioDescription: 'Audio for vocal exercises' },
        { videoFile: null, videoDescription: 'Video content explaining advanced techniques' },
        { document: null, guide: 'Guide for vocal exercises' },
      ],
    };

    setCourseData(existingCourseData);
  }, []);

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
    alert('Course edited successfully!');
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-gray-900 to-gray-700 min-h-screen">
      <InstructorHeader />

      {/* Edit Course Form */}
      <div className="bg-slate-900 p-10 rounded-xl shadow-2xl text-center w-full max-w-4xl mx-auto mb-10 transition transform hover:shadow-xl">
        <h2 className="text-3xl font-semibold text-white mb-6">Edit Course</h2>

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

          {/* Module Inputs */}
          {[...Array(4)].map((_, idx) => (
            <div className="space-y-4" key={idx}>
              <input
                type="text"
                placeholder={`Module ${idx + 1} Title`}
                value={courseData.modules[idx].title || ''}
                onChange={(e) => handleInputChange(e, idx, 'title')}
                className="w-full p-5 rounded-md text-white font-bold focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <textarea
                placeholder={`Module ${idx + 1} Content`}
                value={courseData.modules[idx].textContent || courseData.modules[idx].audioDescription || courseData.modules[idx].videoDescription || courseData.modules[idx].guide}
                onChange={(e) => handleInputChange(e, idx, 'textContent')}
                className="w-full p-5 rounded-md text-white font-bold focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              {idx === 1 || idx === 2 ? (
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, idx, idx === 1 ? 'audioFile' : 'videoFile')}
                  className="w-full p-5 rounded-md text-white font-bold focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              ) : null}
            </div>
          ))}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
