import { useState } from "react";
import { serviceRatings } from "../mocks/ServiceRatings";
import BtnGoBack from "../buttons/BtnGoBack";
import BtnNext from "../buttons/BtnNext";

const ServiceRatingForm = ({
  onBack,
  onSubmit,
  selectedOffice,
  selectedServices,
  otherServiceText,
  demographics,
  addressDetails,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [ratings, setRatings] = useState({});

  const currentRating = serviceRatings[currentStep];
  const isLastStep = currentStep === serviceRatings.length - 1;

  const handleRatingSelect = (option) => {
    setRatings((prev) => ({
      ...prev,
      [currentRating.id]: option.value,
    }));
  };

  const handleNext = () => {
    if (isLastStep) {
      const completeFormData = {
        selectedOffice,
        selectedServices,
        otherServiceText,
        demographics,
        addressDetails,
        serviceRatings: ratings,
      };
      console.table(completeFormData);
      onSubmit(completeFormData);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };
  const isNextDisabled = !Boolean(ratings[currentRating.id]);

  const handleBack = () => {
    if (currentStep === 0) {
      onBack();
    } else {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div
      className="p-6 rounded-lg shadow-lg w-150 transition-colors duration-300 flex flex-col gap-4"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}
    >
      <div className="mb-2">
        <h2 className="text-lg font-semibold">Service Rating</h2>
        <p className="text-sm opacity-75">
          Step {currentStep + 1} of {serviceRatings.length}
        </p>
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-base mb-2">{currentRating.name}</h3>
        <p className="text-sm opacity-75 mb-6">{currentRating.description}</p>

        <div className="flex justify-center gap-6">
          {currentRating.options.map((option, index) => {
            const isSelected = ratings[currentRating.id] === option.label;

            return (
              <button
                key={`${currentRating.id}-${index}`}
                onClick={() => handleRatingSelect(option)}
                className="flex flex-col items-center"
              >
                <span
                  className={`text-4xl transition-transform duration-300 ${
                    isSelected ? "scale-125" : "scale-100"
                  } hover:scale-110 cursor-pointer`}
                >
                  {option.icon}
                </span>

                <span className="text-xs mt-2 text-center opacity-80">
                  {option.label}
                </span>
              </button>
            );
          })}
        </div>

        {ratings[currentRating.id] && (
          <p className="text-center mt-4 text-sm">
            Selected: {ratings[currentRating.id]}
          </p>
        )}
      </div>

        <div className="flex gap-3 justify-between mt-4">
          <BtnGoBack onClick={handleBack} />
          <BtnNext onClick={handleNext} disabled={isNextDisabled} />
        </div>
    </div>
  );
};

export default ServiceRatingForm;