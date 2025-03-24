import React from "react";

const Passions = ({ passions }) => {
  if (!passions || passions.length === 0) return <p>No passions listed.</p>;

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4">Passions</h2>
      <ul className="list-disc list-inside">
        {passions.map((passion, index) => (
          <li key={index} className="text-gray-700">{passion}</li>
        ))}
      </ul>
    </section>
  );
};

export default Passions;
