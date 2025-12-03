import React, { Suspense, lazy, useState } from "react";
import FormLoader from "../fallbacks/FormLoader";

const SelectOffice = lazy(() => import("../forms/SelectOffice"));
const TypesOfServices = lazy(() => import("../forms/TypesOfServices"));
const DemographicForm = lazy(() => import("../forms/DemographicForm"));
const ServiceRatingForm = lazy(() => import("../forms/ServiceRatingForm"));

const Main = () => {
  const [selectedOffice, setSelectedOffice] = useState(null);
  const [showDemographic, setShowDemographic] = useState(false);
  const [showServiceRating, setShowServiceRating] = useState(false);
  const [selectedServices, setSelectedServices] = useState(null);
  const [otherServiceText, setOtherServiceText] = useState("");
  const [demographicsData, setDemographicsData] = useState(null);

  const handleGoToDemographic = (serviceData) => {
    setSelectedServices(serviceData.services);
    setOtherServiceText(serviceData.otherServiceText);
    setShowDemographic(true);
  };

  const handleGoToServiceRating = (demData) => {
    setDemographicsData(demData);
    setShowDemographic(false);
    setShowServiceRating(true);
  };

  const handleBackFromServiceRating = () => {
    setShowServiceRating(false);
    setShowDemographic(true);
  };

  const handleSubmitServiceRating = (completeData) => {
    // All data is logged in ServiceRatingForm
    console.log("Final Submission:", completeData);
    // Add API submission logic here
  };

  return (
    <div
      className="w-full flex items-center justify-center min-h-screen relative bg-neutral-primary bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/img/three.webp")' }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="relative z-10 space-y-4">
        {!selectedOffice && !showDemographic && (
          <Suspense fallback={<FormLoader />}>
            <SelectOffice setSelectedOffice={setSelectedOffice} />
          </Suspense>
        )}

        {selectedOffice && !showDemographic && !showServiceRating && (
          <Suspense fallback={<FormLoader />}>
            <TypesOfServices
              selectedOffice={selectedOffice}
              setSelectedOffice={setSelectedOffice}
              onNext={handleGoToDemographic}
            />
          </Suspense>
        )}

        {showDemographic && !showServiceRating && (
          <Suspense fallback={<FormLoader />}>
            <DemographicForm
              onBack={() => {
                setShowDemographic(false);
                setSelectedOffice(null);
              }}
              onNext={handleGoToServiceRating}
              selectedOffice={selectedOffice}
              selectedServices={selectedServices}
              otherServiceText={otherServiceText}
            />
          </Suspense>
        )}

        {showServiceRating && (
          <Suspense fallback={<FormLoader />}>
            <ServiceRatingForm
              onBack={handleBackFromServiceRating}
              onSubmit={handleSubmitServiceRating}
              selectedOffice={selectedOffice}
              selectedServices={selectedServices}
              otherServiceText={otherServiceText}
              demographics={demographicsData?.selectedOptions}
              addressDetails={demographicsData?.addressInputs}
            />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default Main;
