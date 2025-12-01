import BtnChangeTheme from "../buttons/BtnChangeTheme";

const Navbar = () => {
  return (
    <nav className="bg-neutral-primary fixed w-full z-20 top-0 start-0 border-b border-gray-300 border-default">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 shadow-sm">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="######"
            className="h-7"
            alt="logom"
          />
          <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
            title mo
          </span>
        </a>

        <BtnChangeTheme />
      </div>
    </nav>
  );
};

export default Navbar;
