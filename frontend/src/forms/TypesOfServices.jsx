import { useState } from "react";
import { offices } from "../mocks/Offices";
import { Check } from "lucide-react";
import BtnGoBack from "../buttons/BtnGoBack";

const TypesOfServices = ({ selectedOffice, setSelectedOffice }) => {
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

  const handleCheckboxChange = (id) => {
    setCheckedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleGoBack = () => setSelectedOffice(null);

  return (
    <div
      className="p-6 rounded-lg shadow-lg w-150 transition-colors duration-300"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}
    >
      <h2 className="text-lg font-semibold mb-4">
        Services for: {selectedOffice}
      </h2>

      {services.length > 0 ? (
        <ul className="space-y-3">
          {services.map((service) => (
            <li key={service.id}>
              <label
                htmlFor={`service-${service.id}`}
                className="relative flex items-center cursor-pointer select-none"
              >
                <input
                  id={`service-${service.id}`}
                  type="checkbox"
                  checked={checkedServices.includes(service.id)}
                  onChange={() => handleCheckboxChange(service.id)}
                  className="peer absolute w-5 h-5 opacity-0 cursor-pointer"
                />

                <span
                  className="w-5 h-5 rounded border-2 border-gray-400 dark:border-gray-300
                    flex items-center justify-center transition-colors duration-300
                    peer-checked:bg-[#0052ff] peer-checked:border-[#0052ff]"
                >
                  {checkedServices.includes(service.id) && (
                    <Check className="w-4 h-4 text-white" />
                  )}
                </span>

                <span className="ml-3" style={{ color: "var(--text-color)" }}>
                  {service.name}
                </span>
              </label>
            </li>
          ))}
        </ul>
      ) : (
        <p>No services available for this office.</p>
      )}

      <BtnGoBack onClick={handleGoBack} />
    </div>
  );
};

export default TypesOfServices;
