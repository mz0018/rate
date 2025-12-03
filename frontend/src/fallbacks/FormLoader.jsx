const FormLoader = () => {
  return (
    <div
      className="p-6 rounded-lg shadow-lg w-150 transition-colors duration-300 flex flex-col gap-4"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}
    >
      <div className="mb-2 space-y-2">
        <div
          className="h-6 rounded-lg animate-pulse"
          style={{ backgroundColor: "rgba(128,128,128,0.3)" }}
        ></div>
        <div
          className="h-4 rounded-lg w-1/3 animate-pulse"
          style={{ backgroundColor: "rgba(128,128,128,0.2)" }}
        ></div>
      </div>

      <div className="flex-1 space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="space-y-2">
            <div
              className="h-4 rounded-lg w-2/5 animate-pulse"
              style={{ backgroundColor: "rgba(128,128,128,0.3)" }}
            ></div>
            <div className="space-y-2 pl-2">
              {[1, 2, 3].map((j) => (
                <div key={j} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded border-2 animate-pulse"
                    style={{ backgroundColor: "rgba(128,128,128,0.2)", borderColor: "rgba(128,128,128,0.3)" }}
                  ></div>
                  <div
                    className="h-4 rounded-lg flex-1 animate-pulse"
                    style={{ backgroundColor: "rgba(128,128,128,0.2)" }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3 justify-between mt-4">
        <div
          className="px-4 py-2 rounded-lg w-20 animate-pulse"
          style={{ backgroundColor: "rgba(128,128,128,0.3)" }}
        ></div>
        <div
          className="px-4 py-2 rounded-lg w-20 animate-pulse"
          style={{ backgroundColor: "rgba(128,128,128,0.3)" }}
        ></div>
      </div>
    </div>
  );
};

export default FormLoader;
