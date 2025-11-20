import { assets } from "../assets/assets";
import { Link } from "react-scroll";
import { useMenuMobile } from "../hooks/useMenuMobile";
import { useNavPosition } from "../hooks/useNavPosition";

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
      <div
        className={`md:hidden ${
          menuMobile ? "fixed w-full" : "h-0 w-0"
        }  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all `}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setMenuMobile(false)}
            src={assets.cross_icon}
            className="w-6"
            alt="cerrar"
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <Link
            to="Header"
            onClick={() => setMenuMobile(false)}
            href="Header"
            className="px-4 py-2 rounded-full inline-block "
          >
            Inicio
          </Link>
          <Link
            to="About"
            onClick={() => setMenuMobile(false)}
            href="About"
            className="px-4 py-2 rounded-full inline-block "
          >
            Sobre Nosotros
          </Link>
          <Link
            to="Projects"
            onClick={() => setMenuMobile(false)}
            href="Projects"
            className="px-4 py-2 rounded-full inline-block "
          >
            Proyectos
          </Link>
          <Link
            to="Testimonials"
            onClick={() => setMenuMobile(false)}
            href="Testimonias"
            className="px-4 py-2 rounded-full inline-block "
          >
            Testimonios
          </Link>
        </ul>
      </div>
    </div>
  );
};
