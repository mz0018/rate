import React, { Suspense, lazy, useState } from "react";
import SelectOffice from "../forms/SelectOffice";

const TypesOfServices = lazy(() => import("../forms/TypesOfServices"));

const Main = () => {
  const [selectedOffice, setSelectedOffice] = useState(null);

  return (
    <div
      className="w-full flex items-center justify-center min-h-screen relative bg-neutral-primary bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/img/three.webp")' }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="relative z-10 space-y-4">
        {!selectedOffice && <SelectOffice setSelectedOffice={setSelectedOffice} />}

        {selectedOffice && (
          <Suspense fallback={<div className="text-white">Loading services...</div>}>
            <TypesOfServices selectedOffice={selectedOffice} setSelectedOffice={setSelectedOffice} />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default Main;
