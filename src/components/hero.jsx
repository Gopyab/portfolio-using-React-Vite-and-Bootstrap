function Hero() {
  return (
    <header
      className="text-white d-flex align-items-center"
      style={{
        height: "100vh",
        background: "linear-gradient(to right, #0d6efd, #6610f2)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row align-items-center text-center text-md-start flex-md-row-reverse">
          {/* RIGHT: Text Content */}
          <div className="col-md-6 mb-5 mb-md-0">
            <h1 className="display-4 fw-bold mb-3">Hi, I’m Gopya Batte</h1>
            <p className="lead mb-4">
              Front-End Developer | React | Angular | Vue
            </p>

            {/* Buttons */}
            <div className="d-flex justify-content-center justify-content-md-start gap-3 flex-wrap">
              <a
                href="#projects"
                className="btn btn-outline-light btn-lg shadow-sm"
              >
                View My Work
              </a>
              <a
                href="/resume/Gopya_Resume.pdf"
                download="Gopya_Resume.pdf"
                className="btn btn-outline-light btn-lg shadow-sm"
              >
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-4">
              <a
                href="https://github.com/Gopyab"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light me-2"
              >
                <i className="bi bi-github me-2"></i> GitHub
              </a>
              <a
                href="https://linkedin.com/in/gopya-b-758091259/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
              >
                <i className="bi bi-linkedin me-2"></i> LinkedIn
              </a>
            </div>
          </div>

          {/* LEFT: Profile Photo */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src="/images/profile.jpg"
              alt="Gopya Batte"
              className="rounded-circle shadow-lg hero-photo"
              style={{
                width: "280px",
                height: "280px",
                objectFit: "cover",
                border: "5px solid rgba(255,255,255,0.8)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Inline CSS */}
      <style>{`
        .hero-photo {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .hero-photo:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(255,255,255,0.6);
        }

        @media (max-width: 767px) {
          .hero-photo {
            width: 200px;
            height: 200px;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </header>
  );
}

export default Hero;
