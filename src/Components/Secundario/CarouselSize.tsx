import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { projectsData } from "@/assets/assets";
import Autoplay from "embla-carousel-autoplay";

export const CarouselSize = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className=" gap-15 w-full max-w-7xl mx-auto lg:max-w-7xl"
    >
      <CarouselContent>
        {projectsData.map((project, index) => (
          <CarouselItem key={index} className="m-2 md:basis-1/2 lg:basis-1/3">
            <div className="p-4">
              <Card className="pb-20">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className=" text-3xl font-semibold">
                    <img src={project.image} alt={project.title} />
                    <h2 className="text-xl font-semibold text-gray-800">
                      {project.title}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      {project.location} <span> | </span> {project.price}
                    </p>
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
