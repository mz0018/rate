import { useState } from "react";
import { Search } from "lucide-react";
import { offices } from "../mocks/Offices";

const SelectOffice = ({ setSelectedOffice }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [search, setSearch] = useState("");

  const handleSelect = (value) => {
    setSelected(value);        
    setSelectedOffice(value);
    setSearch("");
    setOpen(false);
  };

  const filteredOffices = offices.filter(
    (office) =>
      office.name.toLowerCase().includes(search.toLowerCase()) ||
      office.sections?.some((s) =>
        s.name.toLowerCase().includes(search.toLowerCase())
      )
  );

  return (
    <div className="relative w-150">
      <label className="block mb-2 font-semibold text-white">Select an Office</label>

      <div
        className="w-full p-2 rounded-lg border flex items-center shadow-sm hover:shadow-md transition-shadow duration-200 focus-within:ring-2"
        style={{
          backgroundColor: "var(--bg-color)",
          borderColor: "rgba(128,128,128,0.3)",
          color: selected ? "var(--text-color)" : "rgba(128,128,128,0.7)",
        }}
      >
        {open ? (
          <div className="relative w-full">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              autoFocus
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full pl-7 bg-transparent outline-none"
              style={{ color: "var(--text-color)" }}
            />
          </div>
        ) : (
          <span
            onClick={() => setOpen(true)}
            className="w-full cursor-pointer"
          >
            {selected || "-- Choose an office --"}
          </span>
        )}

        <svg
          className={`w-4 h-4 ml-2 transform transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {open && (
        <div
          className="absolute left-0 right-0 mt-1 max-h-64 overflow-y-auto rounded-lg shadow-lg z-50"
          style={{ backgroundColor: "var(--bg-color)", borderColor: "rgba(128,128,128,0.3)", color: "var(--text-color)" }}
        >
          {filteredOffices.length ? (
            filteredOffices.map((office) => (
              <div key={office.id}>
                {office.name.toLowerCase().includes(search.toLowerCase()) && (
                  <div
                    className="p-2 cursor-pointer rounded hover:bg-gray-200/20 transition-colors duration-150"
                    onClick={() => handleSelect(office.name)}
                  >
                    {office.name}
                  </div>
                )}
                {office.sections
                  ?.filter((s) => s.name.toLowerCase().includes(search.toLowerCase()))
                  .map((section) => (
                    <div
                      key={section.id}
                      className="pl-6 p-2 cursor-pointer text-sm rounded hover:bg-gray-200/20 transition-colors duration-150"
                      onClick={() => handleSelect(`${office.name} - ${section.name}`)}
                    >
                      {section.name}
                    </div>
                  ))}
              </div>
            ))
          ) : (
            <div className="p-2 text-gray-400">No results found</div>
          )}
        </div>
      )}

      {selected && (
        <p className="mt-2 text-white">
          You selected: <strong>{selected}</strong>
        </p>
      )}
    </div>
  );
};

export default SelectOffice;
