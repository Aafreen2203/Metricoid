import React from "react";

const AcademicBackground = ({ academicBackground }) => {
  if (!academicBackground) return <p>No academic background available.</p>;

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4">Academic Background</h2>
      <p><strong>Degree:</strong> {academicBackground.degree}</p>
      <p><strong>Institution:</strong> {academicBackground.institution}</p>
      <p><strong>Years:</strong> {academicBackground.years}</p>
      <h3 className="text-xl font-semibold mt-4">Relevant Coursework</h3>
      <ul className="list-disc list-inside">
        {academicBackground.relevantCoursework.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </section>
  );
};

export default AcademicBackground;
