import { offices } from "../mocks/Offices";
import { useState } from "react";

const SelectOffice = () => {
  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    setSelected(e.target.value);
    console.log("Selected office:", e.target.value);
  };

  return (
    <div>
      <label htmlFor="office" className="block mb-2 font-semibold">
        Select an Office
      </label>
      <select
        id="office"
        value={selected}
        onChange={handleChange}
        className="border p-2 rounded"
      >
        <option value="">-- Choose an office --</option>
        {offices.map((office) => (
          <>
            <option key={office.id} value={office.name}>
              {office.name}
            </option>
            {office.sections &&
              office.sections.map((section) => (
                <option
                  key={section.id}
                  value={`${office.name} - ${section.name}`}
                >
                  {"\u00A0\u00A0"} {section.name} {/* Indent subsections */}
                </option>
              ))}
          </>
        ))}
      </select>

      {selected && (
        <p className="mt-2">You selected: <strong>{selected}</strong></p>
      )}
    </div>
  );
};

export default SelectOffice;
