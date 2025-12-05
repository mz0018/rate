import React, { Suspense, lazy } from "react";
import FormLoader from "../fallbacks/FormLoader";
import useFormSubmission from "../hooks/useFormSubmission";

const SelectOffice = lazy(() => import("../forms/SelectOffice"));
const TypesOfServices = lazy(() => import("../forms/TypesOfServices"));
const DemographicForm = lazy(() => import("../forms/DemographicForm"));
const RespondentProfile = lazy(() => import("../forms/RespondentProfile"));
const ServiceRatingForm = lazy(() => import("../forms/ServiceRatingForm"));

const Main = () => {
  const formHook = useFormSubmission();

  const [showRespondent, setShowRespondent] = React.useState(false);
  const [showDemographic, setShowDemographic] = React.useState(false);
  const [showServiceRating, setShowServiceRating] = React.useState(false);

  // SELECT OFFICE -> RESPONDENT PROFILE
  const handleSelectOffice = (office) => {
    formHook.updateOffice(office);
    setShowRespondent(true);
  };

  // RESPONDENT -> TYPES OF SERVICES
  const handleRespondentNext = (respondentData) => {
    if (respondentData) formHook.updateRespondent(respondentData);
    setShowRespondent(false);
  };

  const handleBackFromRespondent = () => {
    setShowRespondent(false);
    formHook.updateOffice(null);
  };

  // TYPES OF SERVICES -> DEMOGRAPHIC
  const handleGoToDemographic = (serviceData) => {
    formHook.updateServices(serviceData.services, serviceData.otherServiceText);
    setShowDemographic(true);
  };

  // DEMOGRAPHIC -> SERVICE RATING
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

        {/* SELECT OFFICE */}
        {!formHook.selectedOffice && !showRespondent && (
          <Suspense fallback={<FormLoader />}>
            <SelectOffice setSelectedOffice={handleSelectOffice} />
          </Suspense>
        )}

        {/* RESPONDENT PROFILE (AFTER OFFICE) */}
        {showRespondent && (
          <Suspense fallback={<FormLoader />}>
            <RespondentProfile
              onBack={handleBackFromRespondent}
              onNext={handleRespondentNext}
            />
          </Suspense>
        )}

        {/* TYPES OF SERVICES */}
        {formHook.selectedOffice && !showRespondent && !showDemographic && !showServiceRating && (
          <Suspense fallback={<FormLoader />}>
            <TypesOfServices
              selectedOffice={formHook.selectedOffice}
              onBack={() => {
                setShowRespondent(true);
              }}
              onNext={handleGoToDemographic}
            />
          </Suspense>
        )}

        {/* DEMOGRAPHIC FORM */}
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

        {/* SERVICE RATING */}
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
