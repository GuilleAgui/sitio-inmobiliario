import { Contact } from "./Components/Principal/Contact";
import { About } from "./Components/Principal/About";
import { Header } from "./Components/Principal/Header";
import { Projects } from "./Components/Principal/Projects";
import { Testimonials } from "./Components/Principal/Testimonials";
import { ToastContainer } from "react-toastify";
import { Footer } from "./Components/Principal/Footer";

export const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};
