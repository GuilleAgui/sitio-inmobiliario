import { Label } from "../ui/label";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export const Contact = () => {
  const [result, setResult] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Sending...");
    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "f8a2d9bb-11ea-483e-8d8d-8f20df9c876e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Se ha enviado su mensaje");
      form.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.8 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      id="Contact"
      className="m-8"
    >
      <Card className=" w-full max-w-200 shadow-gray-400 ">
        <CardHeader className="flex flex-col items-center text-center">
          <CardTitle className="whitespace-nowrap text-xl text-gray-700 font-medium mb-2">
            Contactanos
          </CardTitle>
          <CardDescription className="whitespace-nowrap text-gray-600 mb-6">
            Estás a un paso más de cumplir el sueño de tu vida.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <div className="grid grid-col-1 lg:grid-cols-2 gap-6">
              <div className=" gap-2 m-auto">
                <Label htmlFor="" className="mb-2">
                  Sus Datos
                </Label>
                <Input
                  id="nombre"
                  name="name"
                  type="text"
                  placeholder="Nombre y apellido"
                  required
                />
              </div>
              <div className="m-auto gap-2">
                <div className="flex items-center mb-2">
                  <Label htmlFor="text">Su correo</Label>
                </div>
                <Input
                  name="email"
                  id="text"
                  type="email"
                  placeholder="ejemplo@ejemplo.com"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col mt-5 gap-8 m-auto">
              <p>Mensaje</p>
              <textarea
                name="Message"
                placeholder="Escriba aqui su mensaje."
                id="Message"
                className="border w-full border-gray-300 rounded py-3 px-4  h-48 resize-none mb-3"
                required
              ></textarea>
            </div>
            <Button
              type="submit"
              className="w-auto bg-blue-600 hover:bg-blue-800"
            >
              {result ? result : "Enviar"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2"></CardFooter>
      </Card>
    </motion.div>
  );
};
