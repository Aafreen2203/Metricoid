import { useState, useEffect } from "react";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";
import Passions from "./components/Passions";
import AcademicBackground from "./components/AcademicBackground";
import WorkExperience from "./components/WorkExperience";
import Certifications from "./components/Certifications";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/Data/data.json")  // Ensure the correct path
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <Aboutme aboutMe={data.aboutMe} />
      <Skills skills={data.skills} />
      <Hobbies hobbies={data.hobbies} />
      <Passions passions={data.passions} />
      <AcademicBackground academicBackground={data.academicBackground} />
      <WorkExperience workExperience={data.workExperience} />
      <Certifications certifications={data.certifications} />
    </div>
  );
}

export default App;
