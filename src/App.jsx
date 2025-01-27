import "./app.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <section id="Головна">
        <Navbar />
        <Hero />
      </section>
      <section id="Про нас">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Програма">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Контакти">
        <Contact />
      </section>
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}
    </div>
  );
};

export default App;
