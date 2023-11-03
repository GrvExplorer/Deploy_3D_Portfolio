import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

function App() {
  return (
    <>
        <div className="relative z-0 bg-primary ">
          <div className="flex bg-hero-pattern bg-cover bg-center bg-no-repeat">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />

          </div>
        </div>
    </>
  );
}

export default App;
