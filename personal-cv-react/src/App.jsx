import { useState } from 'react'
import './index.css'
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  // Define the skills array
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ];

  const education = [
    {
      year: "2011",
      program: "Kinder",
      school: "Doña Pilar Elementary School"
    },
    {
      year: "2018",
      program: "Elementary",
      school: "Doña Pilar Elementary School"
    },
    {
      year: "2022",
      program: "High School",
      school: "Kinawe National High School"
    },
    {
      year: "2028",
      program: "College",
      school: "USTP CDO Campus"
    }
  ];
  
  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

      <h1>My Personal Online CV</h1>
      <Header />
      <About />
      {/* Pass the skills array as a prop to the Skills component */}
      <Skills skills={skills} />
      {/* Pass the education array as a prop to the Education component */}
      <Education education={education} />
      <Contact />
    </div>
  );
}

export default App;