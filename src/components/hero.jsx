function Hero() {
  return (
    <header
      className="text-white d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #0d6efd, #6610f2)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div className="row align-items-center flex-column flex-md-row text-center text-md-start">
          {/* Image Section */}
          <div className="col-md-5 mb-4 mb-md-0 d-flex justify-content-center">
            <img
              src="/images/profile.jpg"
              alt="Gopya Batte"
              className="img-fluid rounded-circle shadow-lg"
              style={{
                width: "220px",
                height: "220px",
                objectFit: "cover",
                border: "4px solid #fff",
              }}
            />
          </div>

          {/* Text Section */}
          <div className="col-md-7">
            <h1 className="display-5 fw-bold mb-3">Hi, I’m Gopya Batte</h1>
            <p className="lead mb-4">
              Front-End Developer | React | Angular | Vue
            </p>

            {/* Buttons */}
            <div className="d-flex justify-content-center justify-content-md-start gap-3 flex-wrap">
              <a href="#projects" className="btn btn-outline-light btn-lg shadow-sm">
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
        </div>
      </div>
    </header>
  );
}

export default Hero;
