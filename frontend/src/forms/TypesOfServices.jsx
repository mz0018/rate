import { useState, lazy } from "react";
import { offices } from "../mocks/Offices";
import { Check } from "lucide-react";
const BtnGoBack = lazy(() => import("../buttons/BtnGoBack"));
const BtnNext = lazy(() => import("../buttons/BtnNext"));

const TypesOfServices = ({ selectedOffice, setSelectedOffice, onNext, onBack }) => {
  if (!selectedOffice) return null;

  const officeObj = offices.find(
    (office) =>
      office.name === selectedOffice ||
      office.sections?.some(
        (section) => `${office.name} - ${section.name}` === selectedOffice
      )
  );

  let services = [];
  if (officeObj?.sections) {
    const section = officeObj.sections.find(
      (s) => `${officeObj.name} - ${s.name}` === selectedOffice
    );
    services = section ? section.services : officeObj.services;
  } else {
    services = officeObj?.services || [];
  }

  const [checkedServices, setCheckedServices] = useState([]);
  const [otherServiceText, setOtherServiceText] = useState("");

  const handleCheckboxChange = (id, name) => {
    setCheckedServices((prev) => {
      const serviceObj = { id, name };
      const isSelected = prev.some((s) => s.id === id);

      if (isSelected) {
        setOtherServiceText("");
        return [];
      } else {
        if (!name.toLowerCase().includes("please specify")) {
          setOtherServiceText("");
        }
        return [serviceObj];
      }
    });
  };

  const handleGoBack = () => {
    // setSelectedOffice(null);
    if (onBack) onBack();
  }

  const handleNext = () => {
    onNext({
      services: checkedServices,
      otherServiceText,
    });
  };

  const otherOptionSelected = checkedServices.some(
    (service) => service.name.toLowerCase().includes("please specify")
  );
  const isNextDisabled =
    checkedServices.length === 0 ||
    (otherOptionSelected && otherServiceText.trim() === "");

  return (
    <div
      className="p-4 sm:p-6 rounded-lg shadow-lg w-full sm:w-[350px] md:w-[450px] lg:w-[500px] transition-all duration-300 flex flex-col gap-4"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}
    >
      <div className="mb-2 border-b border-[var(--border-color)] pb-5">
        <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4" style={{ color: "var(--heading-color)" }}>
          Services for: {selectedOffice}
        </h2>
        <div
          className="flex items-start gap-2 p-3 rounded-md"
          style={{
            border: `1px solid var(--border-warning-color)`,
            backgroundColor: `var(--border-bg-warning-color)`
          }}
        >

          <p
            className="text-xs sm:text-sm font-medium"
            style={{ color: "var(--text-warning-color)" }}
          >
            Please check appropriate boxes.
          </p>
        </div>

      </div>

      {services.length > 0 ? (
        <ul className="space-y-2 sm:space-y-3">
          {services.map((service) => (
            <li key={service.id}>
              <label
                htmlFor={`service-${service.id}`}
                className="relative flex items-center cursor-pointer select-none"
              >
                <input
                  id={`service-${service.id}`}
                  type="checkbox"
                  checked={checkedServices.some((s) => s.id === service.id)}
                  onChange={() => handleCheckboxChange(service.id, service.name)}
                  className="peer absolute w-4 h-4 sm:w-5 sm:h-5 opacity-0 cursor-pointer"
                />

                <span
                  className="w-4 h-4 sm:w-5 sm:h-5 rounded border-2 border-gray-400 dark:border-gray-300
                    flex items-center justify-center transition-colors duration-300
                    peer-checked:bg-[#0052ff] peer-checked:border-[#0052ff]"
                >
                  {checkedServices.some((s) => s.id === service.id) && (
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  )}
                </span>

                <span className="ml-2 sm:ml-3 text-sm sm:text-base" style={{ color: "var(--text-color)" }}>
                  {service.name}
                </span>
              </label>

              {service.name.includes("please specify") &&
                checkedServices.some((s) => s.id === service.id) && (
                  <div className="mt-2 sm:mt-3 ml-6 sm:ml-8">
                    <input
                      type="text"
                      value={otherServiceText}
                      onChange={(e) => setOtherServiceText(e.target.value)}
                      placeholder="Please specify your service request..."
                      className="w-full px-2 sm:px-3 py-1 sm:py-2 rounded border text-sm sm:text-base transition-colors duration-300"
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
      ) : (
        <p className="text-sm sm:text-base">No services available for this office.</p>
      )}

      <div className="flex gap-2 sm:gap-3 justify-between mt-3 sm:mt-4">
        <BtnGoBack onClick={handleGoBack} />
        <BtnNext onClick={handleNext} disabled={isNextDisabled} />
      </div>
    </div>
  );
};

export default TypesOfServices;
