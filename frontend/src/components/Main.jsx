import React, { Suspense, lazy } from "react";
import FormLoader from "../fallbacks/FormLoader";
import useFormSubmission from "../hooks/useFormSubmission";

const SelectOffice = lazy(() => import("../forms/SelectOffice"));
const TypesOfServices = lazy(() => import("../forms/TypesOfServices"));
const DemographicForm = lazy(() => import("../forms/DemographicForm"));
const ServiceRatingForm = lazy(() => import("../forms/ServiceRatingForm"));

const Main = () => {
  const formHook = useFormSubmission();
  const [showDemographic, setShowDemographic] = React.useState(false);
  const [showServiceRating, setShowServiceRating] = React.useState(false);

  const handleSelectOffice = (office) => {
    formHook.updateOffice(office);
  };

  const handleGoToDemographic = (serviceData) => {
    formHook.updateServices(serviceData.services, serviceData.otherServiceText);
    setShowDemographic(true);
  };

  const handleGoToServiceRating = (demData) => {
    formHook.updateDemographics(demData);
    setShowDemographic(false);
    setShowServiceRating(true);
  };

  const handleBackFromServiceRating = () => {
    setShowServiceRating(false);
    setShowDemographic(true);
  };

  const handleSubmitServiceRating = (completeData) => {
    formHook.submitForm(completeData.serviceRatings); 
  };

  return (
    <div
      className="w-full flex items-center justify-center min-h-screen relative bg-neutral-primary bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/img/munisipyo.jpg")' }}
    >
      <div
        className="absolute inset-0 opacity-80"
        style={{ backgroundColor: "var(--overlay-color, rgba(0, 0, 0, 0.8))" }}
      ></div>
      <div className="relative z-10 space-y-4">
        {!formHook.selectedOffice && !showDemographic && (
          <Suspense fallback={<FormLoader />}>
            <SelectOffice setSelectedOffice={handleSelectOffice} />
          </Suspense>
        )}

        {formHook.selectedOffice && !showDemographic && !showServiceRating && (
          <Suspense fallback={<FormLoader />}>
            <TypesOfServices
              selectedOffice={formHook.selectedOffice}
              setSelectedOffice={(office) => {
                if (office === null) {
                  formHook.updateOffice(null);
                }
              }}
              onNext={handleGoToDemographic}
            />
          </Suspense>
        )}

        {showDemographic && !showServiceRating && (
          <Suspense fallback={<FormLoader />}>
            <DemographicForm
              onBack={() => {
                setShowDemographic(false);
                formHook.updateOffice(null);
              }}
              onNext={handleGoToServiceRating}
              selectedOffice={formHook.selectedOffice}
              selectedServices={formHook.selectedServices}
              otherServiceText={formHook.otherServiceText}
            />
          </Suspense>
        )}

        {showServiceRating && (
          <Suspense fallback={<FormLoader />}>
            <ServiceRatingForm
              onBack={handleBackFromServiceRating}
              onSubmit={handleSubmitServiceRating}
              selectedOffice={formHook.selectedOffice}
              selectedServices={formHook.selectedServices}
              otherServiceText={formHook.otherServiceText}
              demographics={formHook.demographics}
              addressDetails={formHook.addressDetails}
            />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default Main;
