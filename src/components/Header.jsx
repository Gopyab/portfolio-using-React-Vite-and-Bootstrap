import { useState, useEffect } from "react";
import "./Header.css"; // Import the CSS file we’ll create

function Header() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Smooth body background transition
    document.body.style.transition = "background-color 0.4s, color 0.4s";
    if (darkMode) {
      document.body.classList.add("bg-dark", "text-light");
      document.body.classList.remove("bg-light", "text-dark");
    } else {
      document.body.classList.add("bg-light", "text-dark");
      document.body.classList.remove("bg-dark", "text-light");
    }
  }, [darkMode]);

  return (
    <nav
  className={`navbar navbar-expand-lg fixed-top shadow-sm ${
    darkMode ? "navbar-dark" : "navbar-light"
  }`}
  style={{
    backdropFilter: "blur(10px)",
    backgroundColor: darkMode ? "rgba(13, 13, 13, 0.9)" : "rgba(255, 255, 255, 0.9)",
    transition: "background-color 0.4s",
  }}
>
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          Gopya Batte
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {["About", "Skills", "Projects", "Contact"].map((section) => (
              <li className="nav-item" key={section}>
                <a className="nav-link px-3" href={`#${section.toLowerCase()}`}>
                  {section}
                </a>
              </li>
            ))}

            {/* Dark/Light Toggle */}
            <li className="nav-item">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="btn btn-sm ms-3 toggle-btn rounded-pill d-flex align-items-center"
                style={{
                  color: darkMode ? "#ffffff" : "#000000", // Force text color
                  borderColor: darkMode ? "#ffffff" : "#000000",
                }}
              >
                {darkMode ? "☀️ Light" : "🌙 Dark"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
