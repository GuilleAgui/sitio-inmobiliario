import { CarouselSize } from "../Secundario/CarouselSize";

export const Projects = () => {
  return (
    <>
      <div
        className=" mx-auto pt-20 px-6 md:px-20 lg:px-150 my-2 w-full overflow-hidden"
        id="Projects"
      >
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
          Proyectos{" "}
          <span className="underline underline-offset-4 decoration-1 under font-light ">
            Completados
          </span>
        </h1>
        <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
          Creando espacios, construyendo sueños.
        </p>
      </div>
      <CarouselSize />
    </>
  );
};
