import { useState } from "react";
import { demographic } from "../mocks/DemoGraphic";
import { Check } from "lucide-react";
import BtnGoBack from "../buttons/BtnGoBack";
import BtnNext from "../buttons/BtnNext";

const DemographicForm = ({ onBack, selectedOffice, selectedServices, otherServiceText }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [addressInputs, setAddressInputs] = useState({});

  const currentCategory = demographic[currentStep];
  const isLastStep = currentStep === demographic.length - 1;
  const isAddressStep = currentCategory.id === 4;

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) => {
      const categorySelections = prev[currentCategory.id] || [];
      const isSelected = categorySelections.includes(option);
      return {
        ...prev,
        [currentCategory.id]: isSelected
          ? categorySelections.filter((item) => item !== option)
          : [...categorySelections, option],
      };
    });
  };

  const handleAddressInputChange = (option, value) => {
    setAddressInputs((prev) => ({
      ...prev,
      [option]: value,
    }));
  };

  const handleNext = () => {
    if (isLastStep) {
      const formData = {
        selectedOffice,
        selectedServices,
        otherServiceText,
        demographics: selectedOptions,
        addressDetails: addressInputs,
      };
      console.log("Complete Form Data:", formData);
      // Add submission logic here
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

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
        <h2 className="text-lg font-semibold">Demographic Information</h2>
        <p className="text-sm opacity-75">
          Step {currentStep + 1} of {demographic.length}
        </p>
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-base mb-4">{currentCategory.name}</h3>
        <ul className="space-y-3">
          {currentCategory.options.map((option) => (
            <li key={`${currentCategory.id}-${option}`}>
              <label className="relative flex items-center cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={
                    selectedOptions[currentCategory.id]?.includes(option) || false
                  }
                  onChange={() => handleCheckboxChange(option)}
                  className="peer absolute w-5 h-5 opacity-0 cursor-pointer"
                />

                <span
                  className="w-5 h-5 rounded border-2 border-gray-400 dark:border-gray-300
                    flex items-center justify-center transition-colors duration-300
                    peer-checked:bg-[#0052ff] peer-checked:border-[#0052ff]"
                >
                  {selectedOptions[currentCategory.id]?.includes(option) && (
                    <Check className="w-4 h-4 text-white" />
                  )}
                </span>

                <span className="ml-3" style={{ color: "var(--text-color)" }}>
                  {option.replace("(Barangay: ____)", "").replace("(Municipality: ____)", "")}
                </span>
              </label>

              {isAddressStep &&
                selectedOptions[currentCategory.id]?.includes(option) && (
                  <div className="mt-3 ml-8">
                    <input
                      type="text"
                      value={addressInputs[option] || ""}
                      onChange={(e) =>
                        handleAddressInputChange(option, e.target.value)
                      }
                      placeholder={
                        option.includes("Within")
                          ? "Enter barangay name..."
                          : "Enter municipality name..."
                      }
                      className="w-full px-3 py-2 rounded border transition-colors duration-300"
                      style={{
                        backgroundColor: "var(--bg-color)",
                        borderColor: "rgba(128,128,128,0.3)",
                        color: "var(--text-color)",
                      }}
                    />
                  </div>
                )}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-3 justify-between mt-4">
        <BtnGoBack onClick={handleBack} />
        <BtnNext onClick={handleNext} />
      </div>
    </div>
  );
};

export default DemographicForm;