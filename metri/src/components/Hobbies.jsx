import React from "react";

const Hobbies = ({ hobbies }) => {
  if (!hobbies || hobbies.length === 0) return <p>No hobbies listed.</p>;

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4">Hobbies</h2>
      <ul className="list-disc list-inside">
        {hobbies.map((hobby, index) => (
          <li key={index} className="text-gray-700">{hobby}</li>
        ))}
      </ul>
    </section>
  );
};

export default Hobbies;
