import { About } from "./Components/Principal/About";
import { Header } from "./Components/Principal/Header";
import { Projects } from "./Components/Principal/Projects";
export const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Projects />
    </div>
  );
};
