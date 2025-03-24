import React, { useState, useEffect } from "react";

const WorkExperience = () => {
  const [workExperience, setWorkExperience] = useState([]);

  useEffect(() => {
    fetch("/Data/data.json")
      .then((response) => response.json())
      .then((data) => setWorkExperience(data.workExperience || []))
      .catch((error) =>
        console.error("Error loading work experience:", error)
      );
  }, []);

  if (!workExperience || workExperience.length === 0)
    return (
      <p className="text-gray-400 text-center">No work experience available.</p>
    );

  return (
    <section className="bg-[#15172B] text-white p-12 shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Work Experience</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {workExperience.map((job, index) => (
          <div
            key={index}
            className="bg-[#1F213A] p-6 rounded-lg shadow-lg border-l-4 border-pink-500"
          >
            <p className="text-lg">
              <strong className="text-pink-400">Company:</strong>{" "}
              {job.company}
            </p>
            <p className="text-lg">
              <strong className="text-pink-400">Role:</strong> {job.role}
            </p>
            <p className="text-lg">
              <strong className="text-pink-400">Duration:</strong>{" "}
              {job.duration}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
