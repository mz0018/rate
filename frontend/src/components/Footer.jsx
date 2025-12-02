const Footer = () => (
  <footer
    className="py-4 mt-auto w-full border-t"
    style={{
      backgroundColor: "var(--bg-color)",
      color: "var(--text-color)",
      borderColor: "rgba(128,128,128,0.3)",
    }}
  >
    <div className="max-w-screen-xl mx-auto text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Municipality of Solano. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
