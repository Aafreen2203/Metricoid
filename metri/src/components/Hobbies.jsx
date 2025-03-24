import React, { useState, useEffect } from "react";

const Hobbies = () => {
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    fetch("/Data/data.json")
      .then((response) => response.json())
      .then((data) => setHobbies(data.hobbies || []))
      .catch((error) => console.error("Error loading hobbies:", error));
  }, []);

  if (!hobbies || hobbies.length === 0)
    return <p className="text-gray-400 text-center">No hobbies listed.</p>;

  return (
    <section className="bg-[#15172B] text-white p-12 shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Hobbies</h2>
      <ul className="flex flex-wrap justify-center gap-4">
        {hobbies.map((hobby, index) => (
          <li
            key={index}
            className="bg-purple-500 text-white px-4 py-2 rounded-lg text-lg font-medium shadow-md"
          >
            {hobby}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Hobbies;
