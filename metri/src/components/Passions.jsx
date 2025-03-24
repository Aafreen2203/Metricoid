import React, { useState, useEffect } from "react";

const Passions = () => {
  const [passions, setPassions] = useState([]);

  useEffect(() => {
    fetch("/Data/data.json")
      .then((response) => response.json())
      .then((data) => setPassions(data.passions || []))
      .catch((error) => console.error("Error loading passions:", error));
  }, []);

  if (!passions || passions.length === 0)
    return <p className="text-gray-400 text-center">No passions listed.</p>;

  return (
    <section className="bg-[#15172B] text-white p-12 shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Passions</h2>
      <ul className="flex flex-wrap justify-center gap-4">
        {passions.map((passion, index) => (
          <li
            key={index}
            className="bg-pink-500 text-white px-4 py-2 rounded-lg text-lg font-medium shadow-md"
          >
            {passion}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Passions;
