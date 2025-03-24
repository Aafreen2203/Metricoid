import React, { useState, useEffect } from "react";

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    fetch("/Data/data.json")
      .then((response) => response.json())
      .then((data) => setCertifications(data.certifications || []))
      .catch((error) =>
        console.error("Error loading certifications:", error)
      );
  }, []);

  if (!certifications || certifications.length === 0)
    return (
      <p className="text-gray-400 text-center">No certifications available.</p>
    );

  return (
    <section className="bg-[#15172B] text-white p-12 shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Certifications</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-[#1F213A] p-6 rounded-lg shadow-lg border-l-4 border-green-500"
          >
            <p className="text-lg">
              <strong className="text-green-400">Title:</strong> {cert.title}
            </p>
            <p className="text-lg">
              <strong className="text-green-400">Issuer:</strong> {cert.issuer}
            </p>
            <p className="text-lg">
              <strong className="text-green-400">Year:</strong> {cert.year}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
