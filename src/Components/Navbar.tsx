import { assets } from "../assets/assets";

export const Navbar = () => {
  return (
    <div className="abdolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 p-6 md:p-20 lg:p-32 bg-transparent">
        <img src={assets.logo} alt="" />
        <ul className="hidden md:flex gap-7 text-white ">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Testimonials
          </a>
        </ul>
        <button className="cursor-pointer hidden md:block bg-white px-8 py-2 rounded-full">
          Sign up
        </button>
      </div>
    </div>
  );
};
