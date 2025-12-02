import BtnChangeTheme from "../buttons/BtnChangeTheme";

const Navbar = () => (
  <nav
    className="fixed w-full z-20 top-0 left-0 shadow-md"
    style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
  >
    <div className="flex items-center justify-between w-full p-4">
      <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src="/img/logo.png"
          className="h-24"
          alt="logo"
          loading="lazy"
          preload="auto"
        />
        <div className="flex flex-col">
          <span className="self-start text-2xl font-bold tracking-wider whitespace-nowrap uppercase" style={{ color: "var(--text-color)" }}>
            Municipality of Solano
          </span>
          <span className="text-sm capitalize" style={{ color: "var(--text-color)" }}>
            Client's satisfaction and feedback form
          </span>
        </div>
      </a>
      <BtnChangeTheme />
    </div>
  </nav>
);

export default Navbar;
