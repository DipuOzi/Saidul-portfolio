import About from "./components/About";
import Contact from "./components/Contact";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Process from "./components/Process";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import WhyMe from "./components/WhyMe";
import Work from "./components/Work";

export default function App() {
  return (
    <div className="grain relative min-h-screen bg-ink text-mist antialiased">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:bg-aqua focus:px-4 focus:py-3 focus:font-mono focus:text-xs focus:text-ink"
      >
        Skip to work
      </a>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Services />
        <About />
        <Process />
        <WhyMe />
        <Testimonials />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
