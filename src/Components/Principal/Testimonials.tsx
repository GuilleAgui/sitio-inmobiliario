import { motion } from "framer-motion";
import { TestimonialsCard } from "../Secundario/TestimonialsCard";

export const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className=" container mx-auto py-10 lg:px:32 w-full overflow-hidden"
      id="Testimonials"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Testimonios{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          de clientes.
        </span>
      </h1>
      <p className=" text-gray-500 mb-12 max-w-80 mx-auto text-center">
        Historias reales de quienes encontraron un hogar con nosotros.
      </p>
      <TestimonialsCard />
    </motion.div>
  );
};
