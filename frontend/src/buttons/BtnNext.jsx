import { ChevronRight } from "lucide-react";

const BtnNext = ({ onClick, disabled = false }) => {
  const base = "inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition duration-200 shadow-sm";
  const enabledStyle = {
    backgroundColor: "var(--text-color)",
    color: "var(--bg-color)",
  };
  const disabledStyle = {
    backgroundColor: "rgba(128,128,128,0.35)",
    color: "rgba(255,255,255,0.8)",
    cursor: "not-allowed",
    opacity: 0.85,
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={base}
      style={disabled ? disabledStyle : enabledStyle}
      aria-disabled={disabled}
    >
      <span>Next</span>
      <ChevronRight size={18} />
    </button>
  );
};

export default BtnNext;
