import BtnChangeTheme from "../buttons/BtnChangeTheme";

const Navbar = () => (
  <nav
    className="fixed w-full z-20 top-0 left-0 shadow-md"
    style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
  >
    <div className="flex items-center justify-between w-full p-3 sm:p-4 transition-all duration-300 ease-in-out">
      <a href="#" className="flex items-center space-x-2 sm:space-x-3 rtl:space-x-reverse">
        <img
          src="/img/logo.png"
          className="h-12 sm:h-16 lg:h-24"
          alt="logo"
          loading="lazy"
          preload="auto"
        />
        <div className="flex flex-col">
          <span
            className="hidden sm:block self-start text-lg sm:text-xl lg:text-2xl font-bold tracking-wider whitespace-nowrap uppercase"
            style={{ color: "var(--text-color)" }}
          >
            Municipality of Solano
          </span>
          <span
            className="hidden sm:block text-xs sm:text-sm lg:text-base capitalize"
            style={{ color: "var(--text-color)" }}
          >
            Client's satisfaction and feedback form
          </span>
        </div>
      </a>
      <BtnChangeTheme />
    </div>
  </nav>
);

export default Navbar;
