function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2 style={{color:"#0d6efd"}}>Contact Me</h2>
        <form className="mx-auto" style={{ maxWidth: "500px" }}>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Your Name" required />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" required />
          </div>
          <div className="mb-3">
            <textarea className="form-control" rows="4" placeholder="Message" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
