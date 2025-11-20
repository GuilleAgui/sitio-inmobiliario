import { assets } from "../../assets/assets";
import { Link } from "react-scroll";
import { useMenuMobile } from "../../hooks/useMenuMobile";
import { useNavPosition } from "../../hooks/useNavPosition";
import { Mobile } from "../Secundario/Mobile";

export const Navbar = () => {
  const { menuMobile, setMenuMobile } = useMenuMobile();
  const { fixed, hidden, hasBackground } = useNavPosition({
    scrollTreshold: 80,
    hideOnScroll: true,
    changeBackground: true,
  });

  return (
    <div
      className={`top-2 left-0 w-full z-10 ease-in-out
      ${fixed ? "fixed top-0" : "absolute top-5"}
      ${hidden ? "-translate-y" : "translate-y"}
      ${hasBackground ? "bg-gray-300 shadow-md" : "bg-transparent"}
    `}
    >
      <div className="container mx-auto flex justify-between items-center py-5 px-7 md:px-0 lg:px-32 bg-transparent">
        <Link to="Header" smooth={true} duration={600} href="#Home">
          <img src={assets.logo} alt="" />
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
            href="#About"
            className="cursor-pointer hover:text-gray-500 transition ease-in-out"
          >
            Sobre Nosotros
          </Link>
          <Link
            to="Projects"
            smooth={true}
            duration={600}
            href="#Projects"
            className="cursor-pointer hover:text-gray-500 transition ease-in-out"
          >
            Proyectos
          </Link>
          <Link
            to="Testimonials"
            smooth={true}
            duration={600}
            href="#Testimonials"
            className="cursor-pointer hover:text-gray-500 transition ease-in-out"
          >
            Testimonios
          </Link>
        </ul>
        <button className="cursor-pointer hidden md:block bg-white px-8 py-2 rounded-full hover:bg-gray-200 transition ease-in-out">
          Inicia Sesion
        </button>
        <img
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer transition ease-in-out "
          alt="open menuMobile"
          onClick={() => setMenuMobile(true)}
        />
      </div>
      {/* --------menuMobile movil */}
      <Mobile />
    </div>
  );
};
