import { assets } from "../../assets/assets";
import { Link } from "react-scroll";
import { useNavPosition } from "../../hooks/useNavPosition";
import { Mobile } from "../Secundario/Mobile";

export const Navbar = () => {
  const { fixed, hidden, hasBackground } = useNavPosition({
    scrollTreshold: 80,
    hideOnScroll: true,
    changeBackground: true,
  });

  return (
    <div
      className={`top-0 left-0 w-full z-10 ease-in-out
      ${fixed ? "fixed top-0" : "absolute top-5"}
      ${hidden ? "-translate-y" : "translate-y"}
      ${hasBackground ? "bg-gray-300 shadow-md" : "bg-transparent"}
    `}
    >
      <div className="container mx-auto flex lg:justify-evenly gap-8 items-center py-5 px-7 md:px-0 lg:px-32 lg:m-0 bg-transparent">
        <Link to="Header" smooth={true} duration={600} href="#Home">
          <img src={assets.logo} alt="logo" className="flex items-start" />
        </Link>
        <ul className="hidden md:flex gap-10">
          <Link
            to="Header"
            smooth={true}
            duration={600}
            href="#Header"
            className="cursor-pointer hover:text-gray-500 transition ease-in-out"
          >
            Inicio
          </Link>
          <Link
            to="About"
            smooth={true}
            duration={600}
            offset={-80}
            href="#About"
            className="cursor-pointer hover:text-gray-500 transition ease-in-out"
          >
            Sobre Nosotros
          </Link>
          <Link
            to="Projects"
            smooth={true}
            duration={600}
            offset={-80}
            href="#Projects"
            className="cursor-pointer hover:text-gray-500 transition ease-in-out"
          >
            Proyectos
          </Link>
          <Link
            to="Testimonials"
            smooth={true}
            duration={600}
            offset={-80}
            href="#Testimonials"
            className="cursor-pointer hover:text-gray-500 transition ease-in-out"
          >
            Testimonios
          </Link>
          <Link
            to="Contact"
            smooth={true}
            duration={600}
            offset={-80}
            href="#Contact"
            className="cursor-pointer hover:text-gray-500 transition ease-in-out"
          >
            Testimonios
          </Link>
        </ul>
      </div>
      {/* --------menuMobile movil */}
      <Mobile />
    </div>
  );
};
