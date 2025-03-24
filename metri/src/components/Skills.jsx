import React, { useState, useEffect } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/Data/data.json")
      .then((response) => response.json())
      .then((data) => setSkills(data.skills || []))
      .catch((error) => console.error("Error loading skills:", error));
  }, []);

  if (!skills || skills.length === 0) return <p className="text-gray-400">No skills listed.</p>;

  return (
    <section className="bg-[#15172B] text-white p-12 shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <ul className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="bg-pink-500 text-white px-4 py-2 rounded-lg text-lg font-medium shadow-md"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
