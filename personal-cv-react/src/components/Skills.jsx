import { useState } from "react";

function Skills() {
  const [visible, setVisible] = useState(true); // [cite: 129]

  return (
    <section>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide Skills" : "Show Skills"}
      </button>
      {visible && ( // [cite: 134]
        <div className="card">
           <h2>Skills</h2>
                <ul>
                    <li>Web Development
                        <ul>
                            <li>Frontend
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                </ul>
                            </li>
                            <li>Backend</li>
                        </ul>
                    </li>
                </ul>
        </div>
      )}
    </section>
  );
}
export default Skills;
