import Header from "./components/Header";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Hero from "./components/hero";
import "bootstrap-icons/font/bootstrap-icons.css";


function App() {
  return (
    <>
      <Header />
      <main style={{ marginTop: "70px" }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
