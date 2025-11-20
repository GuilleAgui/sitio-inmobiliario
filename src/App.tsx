import { About } from "./Components/About";
import { Header } from "./Components/Header";
import { Projects } from "./Components/Projects";
export const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Projects />
    </div>
  );
};
