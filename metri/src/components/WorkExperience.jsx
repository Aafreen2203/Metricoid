import React from "react";

const WorkExperience = ({ workExperience }) => {
  if (!workExperience || workExperience.length === 0) return <p>No work experience available.</p>;

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
      {workExperience.map((job, index) => (
        <div key={index} className="mb-4">
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Role:</strong> {job.role}</p>
          <p><strong>Duration:</strong> {job.duration}</p>
        </div>
      ))}
    </section>
  );
};

export default WorkExperience;
