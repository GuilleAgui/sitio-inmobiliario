import { assets } from "../assets/assets";

export const About = () => {
  return (
    <div
      className=" flex flex-col items-center justify-center container mx-auto p-15 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        Acerca de{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          la empresa.
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Estamos apasionados por las propiedades, y dedicados a la visión de tu
        futuro.
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-20">
        <img
          src={assets.brand_img}
          alt=""
          className="w-full sm:w-87 sm:h-140 max-w-lg"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">+10</p>
              <p>Años de experiencia.</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">+30</p>
              <p>Proyectos completos.</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">+20</p>
              <p>Propiedades entregadas.</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">+25</p>
              <p>Proyectos en curso.</p>
            </div>
          </div>
          <p className="my-10 max--w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            nostrum suscipit dolore vel error mollitia quia illum rerum placeat
            distinctio?
          </p>
          <button className="bg-blue-600 p-2 text-white rounded cursor-pointer hover:bg-blue-800">
            Leer más
          </button>
        </div>
      </div>
    </div>
  );
};
