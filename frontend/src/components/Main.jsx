import React, { Suspense, lazy, useState } from "react";
import SelectOffice from "../forms/SelectOffice";

const TypesOfServices = lazy(() => import("../forms/TypesOfServices"));
const DemographicForm = lazy(() => import("../forms/DemographicForm"));

const Main = () => {
  const [selectedOffice, setSelectedOffice] = useState(null);
  const [showDemographic, setShowDemographic] = useState(false);
  const [selectedServices, setSelectedServices] = useState(null);
  const [otherServiceText, setOtherServiceText] = useState("");

  const handleGoToDemographic = (serviceData) => {
    setSelectedServices(serviceData.services);
    setOtherServiceText(serviceData.otherServiceText);
    setShowDemographic(true);
  };

  const handleBackFromDemographic = () => {
    setShowDemographic(false);
    setSelectedServices(null);
    setOtherServiceText("");
  };

  return (
    <div
      className="w-full flex items-center justify-center min-h-screen relative bg-neutral-primary bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/img/three.webp")' }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="relative z-10 space-y-4">
        {!selectedOffice && !showDemographic && (
          <SelectOffice setSelectedOffice={setSelectedOffice} />
        )}

        {selectedOffice && !showDemographic && (
          <Suspense fallback={<div className="text-white">Loading services...</div>}>
            <TypesOfServices
              selectedOffice={selectedOffice}
              setSelectedOffice={setSelectedOffice}
              onNext={handleGoToDemographic}
            />
          </Suspense>
        )}

        {showDemographic && (
          <Suspense fallback={<div className="text-white">Loading form...</div>}>
            <DemographicForm
              onBack={handleBackFromDemographic}
              selectedOffice={selectedOffice}
              selectedServices={selectedServices}
              otherServiceText={otherServiceText}
            />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default Main;
