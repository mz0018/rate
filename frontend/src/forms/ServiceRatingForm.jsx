import { useState, lazy } from "react";
import { serviceRatings } from "../mocks/ServiceRatings";
const BtnGoBack = lazy(() => import("../buttons/BtnGoBack"));
const BtnNext = lazy(() => import("../buttons/BtnNext"));

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
      const ratingsArray = serviceRatings.map((r) => ({
        id: r.id,
        name: r.name,
        value: ratings[r.id] ?? null,
      }));

      const completeFormData = {
        selectedOffice,
        selectedServices,
        otherServiceText,
        demographics,
        addressDetails,
        serviceRatings: ratingsArray,
      };
      console.table(completeFormData);
      onSubmit(completeFormData);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };
  const isNextDisabled = !Boolean(ratings[currentRating.id]);

  const handleBack = () => {
    if (currentStep === 0) onBack();
    else setCurrentStep((prev) => prev - 1);
  };

  return (
    <div
      className="p-4 sm:p-6 rounded-lg shadow-lg w-full sm:w-[350px] md:w-[450px] lg:w-[600px] transition-all duration-300 flex flex-col gap-4"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}
    >
      <div className="mb-2 border-b border-[var(--border-color)] pb-5">
        <h2 className="text-base sm:text-lg font-semibold" style={{ color: "var(--heading-color)" }}>Service Rating</h2>
        <p className="text-xs sm:text-sm opacity-75">
          Step {currentStep + 1} of {serviceRatings.length}
        </p>

        <h2 className="text-base sm:text-lg font-semibold mt-3 sm:mt-4" style={{ color: "var(--heading-color)" }}>
          Legend:
        </h2>
        <div className="flex flex-wrap gap-2 mt-1 text-xs sm:text-sm opacity-75">
          <span>5 - Very Satisfactory</span>
          <span>4 - Satisfactory</span>
          <span>3 - Neutral</span>
          <span>2 - Unsatisfactory</span>
          <span>1 - Very Unsatisfactory</span>
        </div>
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-sm sm:text-base mb-2">{currentRating.name}</h3>
        <p className="text-xs sm:text-sm opacity-75 mb-4 sm:mb-6">{currentRating.description}</p>

        <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
          {currentRating.options.map((option, index) => {
            const isSelected = ratings[currentRating.id] === option.value;

            return (
              <button
                key={`${currentRating.id}-${index}`}
                onClick={() => handleRatingSelect(option)}
                className="flex flex-col items-center"
                type="button"
              >
                <span
                  className={`
                    text-5xl sm:text-6xl
                    transition-transform duration-300 
                    ${isSelected ? "scale-125 mb-3" : "scale-100 mb-2"}
                    hover:scale-110 
                    cursor-pointer
                  `}
                >
                  {option.icon}
                </span>

                <span className="text-xs sm:text-sm text-center opacity-80">
                  {option.value}
                </span>
              </button>
            );
          })}
        </div>

        {ratings[currentRating.id] && (
          <p className="text-center mt-3 sm:mt-4 text-sm sm:text-base">
            Selected: {currentRating.options.find(o => o.value === ratings[currentRating.id])?.label || ratings[currentRating.id]}
          </p>
        )}
      </div>

      <div className="flex gap-2 sm:gap-3 justify-between mt-3 sm:mt-4">
        <BtnGoBack onClick={handleBack} />
        <BtnNext onClick={handleNext} disabled={isNextDisabled} />
      </div>
    </div>
  );
};

export default ServiceRatingForm;
