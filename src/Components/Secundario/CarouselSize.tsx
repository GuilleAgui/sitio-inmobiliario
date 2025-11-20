import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { projectsData } from "@/assets/assets";

export const CarouselSize = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className=" w-full max-w-7xl mx-auto lg:max-w-7xl"
    >
      <CarouselContent>
        {projectsData.map((project, index) => (
          <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/3">
            <div className="p-4">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">
                    <img src={project.image} alt={project.title} />
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
