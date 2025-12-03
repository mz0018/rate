import React, { Suspense, lazy } from "react";

const Navbar = lazy(() => import("./components/Navbar"));
const Main = lazy(() => import("./components/Main"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => (
  <div className="min-h-screen flex flex-col bg-green-500">
    <Suspense fallback={null}>
      <Navbar />
    </Suspense>
    <main className="flex-1 flex items-center justify-center">
      <Suspense fallback={null}>
        <Main />
      </Suspense>
    </main>
    <Suspense fallback={null}>
      <Footer />
    </Suspense>
  </div>
);

export default App;
