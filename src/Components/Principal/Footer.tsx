import { assets } from "@/assets/assets";
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <div
      className=" pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-x-hidden "
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start ">
        <Link
          to="Header"
          smooth={true}
          duration={600}
          offset={-80}
          className="w-full md:w-1/3 mb-8 md:mb-0"
        >
          <img src={assets.logo_dark} alt="logo" />
          <p className="text-white mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            id aut animi, sunt nobis quas. Architecto recusandae praesentium
            nulla ipsum.
          </p>
        </Link>

        <div className=" w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">
            Nuestra empresa.
          </h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <Link
              to="Header"
              smooth={true}
              duration={600}
              offset={-80}
              href="#Header"
              className="hover:text-white"
            >
              Inicio
            </Link>
            <Link
              to="About"
              smooth={true}
              duration={600}
              offset={-80}
              href="#About"
              className="hover:text-white"
            >
              Sobre Nosotros
            </Link>
            <Link
              to=""
              smooth={true}
              duration={600}
              offset={-80}
              href="#Contact"
              className="hover:text-white"
            >
              Contactanos
            </Link>
            <Link
              to=""
              smooth={true}
              duration={600}
              offset={-80}
              href="#"
              className="hover:text-white"
            >
              Politicas de privacidad
            </Link>
          </ul>
        </div>

        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Suscribete a nuestros avisos.
          </h3>
          <p className="text-gray-400 mb-4 max-w-80">
            Lo ultimo en las noticias, articulos y recursos que ofrecemos se
            iran directo a tu correo.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Ingresa tu e-mail"
              className="p-1 mb-1  rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"
            />
            <button className=" p-1 m-1 rounded bg-blue-500 text-white hover:bg-blue-800">
              Suscribirse
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Un mini proyecto de Guillermo Daniel Benitez Aguilar
      </div>
    </div>
  );
};
