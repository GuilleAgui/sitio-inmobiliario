import { assets } from "@/assets/assets";
import { Link } from "react-scroll";
import { useMenuMobile } from "../../hooks/useMenuMobile";

export const Mobile = () => {
  const { menuMobile, setMenuMobile } = useMenuMobile();
  return (
    <div>
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
