import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => (
  <div className="min-h-screen flex flex-col bg-green-500">
    <Navbar />
    <main className="flex-1 flex items-center justify-center">
      <Main />
    </main>
    <Footer />
  </div>
);

export default App;
