import React, { useState, useEffect } from "react";

const AboutMe = () => {
  const [aboutMe, setAboutMe] = useState(null);

  useEffect(() => {
    fetch("/Data/data.json")
      .then((response) => response.json())
      .then((data) => setAboutMe(data.aboutMe))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  if (!aboutMe) return <p className="text-gray-500">Loading...</p>;

  return (
    <section className="bg-[#15172B] text-white p-12 flex items-center justify-between min-h-[50vh]">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold leading-snug">
          Hello, I'm <br />
          <span className="text-pink-500">{aboutMe.name}</span>
        </h1>
        <p className="text-gray-300 mt-4 max-w-lg">
          {aboutMe.bio}
        </p>
      </div>

      {/* Profile Image */}
      <div className="flex-shrink-0">
        <img
          src={aboutMe.image}
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-pink-500"
        />
      </div>
    </section>
  );
};

export default AboutMe;
