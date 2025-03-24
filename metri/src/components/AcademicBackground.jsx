import React, { useState, useEffect } from "react";

const AcademicBackground = () => {
  const [academicBackground, setAcademicBackground] = useState(null);

  useEffect(() => {
    fetch("/Data/data.json")
      .then((response) => response.json())
      .then((data) => setAcademicBackground(data.academicBackground || null))
      .catch((error) =>
        console.error("Error loading academic background:", error)
      );
  }, []);

  if (!academicBackground)
    return <p className="text-gray-400 text-center">No academic background available.</p>;

  return (
    <section className="bg-[#15172B] text-white p-12 shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Academic Background</h2>
      <div className="max-w-3xl mx-auto text-lg leading-relaxed">
        <p>
          <strong className="text-pink-400">Degree:</strong>{" "}
          {academicBackground.degree}
        </p>
        <p>
          <strong className="text-pink-400">Institution:</strong>{" "}
          {academicBackground.institution}
        </p>
        <p>
          <strong className="text-pink-400">Years:</strong>{" "}
          {academicBackground.years}
        </p>
      </div>

      <h3 className="text-2xl font-semibold mt-8 text-center text-pink-500">
        Relevant Coursework
      </h3>
      <ul className="flex flex-wrap justify-center gap-3 mt-4">
        {academicBackground.relevantCoursework.map((course, index) => (
          <li
            key={index}
            className="bg-pink-500 text-white px-4 py-2 rounded-lg text-md font-medium shadow-md"
          >
            {course}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AcademicBackground;
