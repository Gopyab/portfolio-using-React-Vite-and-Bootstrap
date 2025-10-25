function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Built using React, Vita and Bootstrap for responsive design.",
      img: "/images/portfolio.png", // add your image path here
    },
    {
      title: "Weather Report App",
      desc: "Searches and shows the weather report of the searched area",
      img: "/images/weather.png",
    },
    {
      title: "Recipe Finder",
      desc: "Recipe Finder App — Fetch and display recipes using Spoonacular API.",
      img: "/images/recipefinder.png",
    },
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold" style={{ color: "#0d6efd" }}>
          Projects
        </h2>

        <div className="row">
          {projects.map((p, i) => (
            <div
              className="col-md-4 mb-4"
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <div className="card h-100 shadow-lg border-0 rounded-4 hover-zoom">
                {/* Project image */}
                {p.img && (
                  <img
                    src={p.img}
                    className="card-img-top rounded-top-4"
                    alt={p.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold text-primary mb-3">
                    {p.title}
                  </h5>
                  <p className="card-text text-muted">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
