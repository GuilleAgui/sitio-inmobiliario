import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { assets, testimonialsData } from "@/assets/assets";

export const TestimonialsCard = () => {
  return (
    <div className=" grid md:grid-col-2 lg:grid-cols-3 gap-8 m-6">
      {testimonialsData.map((testimonials, index) => (
        <Card className=" shaow-lg rounded">
          <CardHeader
            className="flex flex-col items-center text-center"
            key={index}
          >
            <Avatar className="w-20 h-20">
              <AvatarImage key={index} src={testimonials.image} />
              <AvatarFallback>{testimonials.alt}</AvatarFallback>
            </Avatar>
            {/* AVATAR */}

            <CardTitle className="whitespace-nowrap text-xl text-gray-700 font-medium">
              {testimonials.name}
            </CardTitle>
            <CardDescription className="whitespace-nowrap text-gray-500 mb-4 text-sm">
              {testimonials.title}
            </CardDescription>
            <CardAction className="flex justify-center gap-1 text-red-500 mb-4">
              {Array.from({ length: testimonials.rating }, (_item, index) => (
                <img key={index} src={assets.star_icon} alt="" />
              ))}
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">{testimonials.text}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
