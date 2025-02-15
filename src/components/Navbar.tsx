import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="w-full py-6 px-6 flex items-center justify-between fixed top-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-gray-800/50">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
            <span className="text-black font-semibold">A</span>
          </div>
          <span className="text-white font-semibold text-xl">
            <agent />
          </span>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center gap-12">
        <a
          href="#"
          className="text-gray-300 hover:text-white transition-colors text-lg font-medium"
        >
          About
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-white transition-colors text-lg font-medium"
        >
          Integrations
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-white transition-colors text-lg font-medium"
        >
          Pricing
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-white transition-colors text-lg font-medium"
        >
          Blog
        </a>
      </div>

      <div className="flex-1 flex justify-end">
        <Button className="bg-teal-500 hover:bg-teal-600 text-black font-medium">
          Sign In
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
