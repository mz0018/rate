import { useState, lazy } from "react";
const BtnGoBack = lazy(() => import("../buttons/BtnGoBack"));
const BtnNext = lazy(() => import("../buttons/BtnNext"));

const OtherSuggestions = ({ onBack, onSave, onSkip, defaultText = "" }) => {
  const [text, setText] = useState(defaultText);
  const isSaveDisabled = false;

  return (
    <div
      className="p-4 sm:p-6 rounded-lg shadow-lg w-full sm:w-[350px] md:w-[450px] lg:w-[600px] transition-all duration-300 flex flex-col gap-4"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}
    >
      <div className="mb-2 border-b border-[var(--border-color)] pb-5">
        <h2 className="text-base sm:text-lg font-semibold" style={{ color: "var(--heading-color)" }}>Other Suggestions (optional)</h2>
        <p className="text-xs sm:text-sm opacity-75 mt-1">If you have suggestions or comments about the service, you may leave them here. This is optional.</p>
      </div>

      <div className="flex-1">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your suggestion... (optional)"
          className="w-full min-h-[120px] p-3 rounded border border-[var(--border-color)] bg-[var(--input-bg)]"
        />
      </div>

      <div className="flex gap-2 sm:gap-3 justify-between mt-3 sm:mt-4">
        <BtnGoBack onClick={onBack} />
        <div className="flex gap-2">

          <BtnNext onClick={() => onSave(text)} disabled={isSaveDisabled} />
        </div>
      </div>
    </div>
  );
};

export default OtherSuggestions;
