import BtnChangeTheme from "../buttons/BtnChangeTheme";

const Navbar = () => {
  return (
    <nav className="bg-neutral-primary fixed w-full z-20 top-0 left-0 border-b border-gray-300 border-default">
      <div className="flex items-center justify-between w-full p-4 shadow-sm">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/img/logo.png"
            className="h-24"
            alt="logom"
            loading="lazy"
            preload="auto"
          />
          <div className="flex flex-col">
            <span className="self-start text-2xl text-heading font-bold tracking-wider whitespace-nowrap uppercase">
              municipality of solano
            </span>
            <span className="text-sm capitalize text-gray-600">
              client's satisfaction and feedback form
            </span>
          </div>
        </a>

        <BtnChangeTheme />
      </div>
    </nav>
  );
};

export default Navbar;
