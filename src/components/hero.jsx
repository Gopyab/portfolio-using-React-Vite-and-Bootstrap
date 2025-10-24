function Hero() {
  return (
    <header
      className="text-center text-white d-flex align-items-center justify-content-center"
      style={{
        height: "100vh",
        background: "linear-gradient(to right, #0d6efd, #6610f2)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <h1 className="display-4 fw-bold">Hi, I’m Gopya Batte</h1>
        <p className="lead mb-4">Front-End Developer | React | Angular | Vue</p>
        <div className="d-flex justify-content-center gap-3">
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
    className="btn btn-outline-light me-2"
  >
    <i className="bi bi-linkedin me-2"></i> LinkedIn
  </a>
</div>

      </div>
    </header>
  );
}

export default Hero;
