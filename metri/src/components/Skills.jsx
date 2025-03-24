import React from "react";

const Skills = ({ skills }) => {
  if (!skills || skills.length === 0) return <p>No skills listed.</p>;

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <li 
            key={index} 
            className="bg-blue-200 text-blue-800 px-3 py-1 rounded-md"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
