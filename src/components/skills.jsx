import { useState, useEffect } from "react";

function Skills() {
  const skills = {
    "Front-End": [
      { name: "React", level: 90 },
      { name: "Vue 2/3", level: 85 },
      { name: "Angular", level: 80 },
      { name: "HTML / CSS", level: 95 },
      { name: "Bootstrap", level: 85 },
      { name: "JavaScript/TypeScript", level: 90 },
      { name: "Cross Browser Compatibility", level: 90 },
      { name: "Responsive Design", level: 85 },
      { name: "UI/UX & Accessibility (WCAG compliance)", level: 85 },
    ],
    "Back-End": [
      { name: "Node.js", level: 90 },
      { name: "PHP", level: 75 },
      { name: ".NET / C#", level: 70 },
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "RESTful API design & integration", level:85 },
    ],
    "Tools & Others": [
      { name: "Agile / Scrum methodologies", level: 90 },
      { name: "Docker", level: 75 },
      { name: "Git / GitHub / GitLab", level: 85 },
      { name: "Jira / Postman", level: 80 },
      { name: "Code reviews & refactoring", level: 90 },
      { name: "Problem-solving & debugging", level: 90 },
      { name: "Postman / API testing", level: 90 },
       { name: "CI/CD pipelines", level: 90 },
    ],
  };

  const [activeTab, setActiveTab] = useState("Front-End");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // trigger animation when tab changes
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <section id="skills" className="py-5" style={{ backgroundColor: "#fff" }}>
      <div className="container text-center" style={{ color: "#111" }}>
        <h2 className="mb-4" style={{ color: "#0d6efd" }}>Skills</h2>

        {/* Tabs */}
        <ul className="nav justify-content-center mb-4 custom-tabs">
          {Object.keys(skills).map((category) => (
            <li className="nav-item mx-2" key={category}>
              <button
                className={`nav-link ${activeTab === category ? "active" : ""}`}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        {/* Skills Content */}
        <div className="row justify-content-center">
          {skills[activeTab].map((skill, i) => {
            const dashOffset = animate ? 100 - skill.level : 100;
            return (
              <div key={i} className="col-6 col-md-3 mb-4">
                <div className="skill-circle mx-auto">
                  <svg viewBox="0 0 36 36">
                    <path
                      className="circle-bg"
                      d="M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="circle"
                      fill="none"
                      strokeDasharray="100"
                      strokeDashoffset={dashOffset}
                      d="M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831"
                      style={{
                        stroke: "url(#grad)",
                        strokeWidth: 3.8,
                        strokeLinecap: "round",
                        transition: "stroke-dashoffset 1.2s ease-out",
                      }}
                    />
                    <text x="18" y="20.35" className="percentage">
                      {skill.level}%
                    </text>
                    <defs>
                      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0d6efd" />
                        <stop offset="100%" stopColor="#6610f2" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <p className="mt-2">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Internal CSS */}
      <style>{`
        .skill-circle {
          width: 100px;
          height: 100px;
          position: relative;
          margin-bottom: 0.5rem;
        }

        .skill-circle svg {
          width: 100%;
          height: 100%;
          transform: rotate(-90deg);
        }

        .circle-bg {
          fill: none;
          stroke: #eee;
          stroke-width: 3.8;
        }

        .percentage {
          fill: #111;
          font-size: 0.5em;
          text-anchor: middle;
          dominant-baseline: central;
          font-weight: bold;
          transform: rotate(90deg);
        }

        /* Custom Tabs */
        .custom-tabs .nav-link {
          border-radius: 50px;
          padding: 0.5rem 1.2rem;
          border: 1px solid #0d6efd;
          color: #0d6efd;
          transition: all 0.3s ease;
          background-color: transparent;
          cursor: pointer;
        }

        .custom-tabs .nav-link:hover {
          background-color: #0d6efd;
          color: #fff;
        }

        .custom-tabs .nav-link.active {
          background-color: #0d6efd;
          color: #fff;
        }

        .custom-tabs .nav-item {
          margin-bottom: 0.5rem;
        }

        .skill-circle:hover {
          transform: scale(1.1);
          transition: transform 0.3s;
        }
      `}</style>
    </section>
  );
}

export default Skills;
