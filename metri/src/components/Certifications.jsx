import React from "react";

const Certifications = ({ certifications }) => {
  if (!certifications || certifications.length === 0) return <p>No certifications available.</p>;

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4">Certifications</h2>
      {certifications.map((cert, index) => (
        <div key={index} className="mb-4">
          <p><strong>Title:</strong> {cert.title}</p>
          <p><strong>Issuer:</strong> {cert.issuer}</p>
          <p><strong>Year:</strong> {cert.year}</p>
        </div>
      ))}
    </section>
  );
};

export default Certifications;
