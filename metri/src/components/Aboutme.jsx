import React from "react";

const AboutMe = ({ aboutMe }) => {
  if (!aboutMe) return <p>No data available.</p>;

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4">{aboutMe.name}</h2>
      <img 
        src={aboutMe.image} 
        alt="Profile" 
        className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-300"
      />
      <p className="text-gray-700">{aboutMe.bio}</p>
    </section>
  );
};

export default AboutMe;
