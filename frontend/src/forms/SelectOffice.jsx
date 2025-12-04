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
    <div className="relative w-[250px] sm:w-[480px] md:w-[500px] lg:w-[600px] transition-all duration-300 ease-in-out">
      <label className="block mb-2 font-semibold text-white text-sm sm:text-base">
        Select an Office
      </label>

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
              className="w-full pl-7 py-1 sm:py-2 bg-transparent outline-none text-sm sm:text-base"
              style={{ color: "var(--text-color)" }}
            />
          </div>
        ) : (
          <span
            onClick={() => setOpen(true)}
            className="w-full cursor-pointer text-sm sm:text-base"
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
          style={{
            backgroundColor: "var(--bg-color)",
            borderColor: "rgba(128,128,128,0.3)",
            color: "var(--text-color)"
          }}
        >
          {filteredOffices.length ? (
            filteredOffices.map((office) => (
              <div key={office.id}>
                {office.name.toLowerCase().includes(search.toLowerCase()) && (
                  <div
                    className="p-2 sm:p-3 cursor-pointer rounded hover:bg-gray-200/20 transition-colors duration-150 text-sm sm:text-base"
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
                      className="pl-4 sm:pl-6 p-2 sm:p-3 cursor-pointer rounded hover:bg-gray-200/20 transition-colors duration-150 text-xs sm:text-sm"
                      onClick={() => handleSelect(`${office.name} - ${section.name}`)}
                    >
                      {section.name}
                    </div>
                  ))}
              </div>
            ))
          ) : (
            <div className="p-2 sm:p-3 text-gray-400 text-sm sm:text-base">No results found</div>
          )}
        </div>
      )}

      {selected && (
        <p className="mt-2 text-white text-sm sm:text-base">
          You selected: <strong>{selected}</strong>
        </p>
      )}
    </div>
  );
};

export default SelectOffice;
