const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 py-4 mt-auto w-full">
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Municipality of Solano. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
