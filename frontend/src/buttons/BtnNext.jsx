const BtnNext = ({ onClick, disabled = false }) => {
  const base = "px-6 py-2 rounded-lg font-semibold transition-colors duration-300";
  const enabledCls = "bg-[#0052ff] text-white hover:bg-blue-700 cursor-pointer";
  const disabledCls = "bg-gray-400 text-gray-200 cursor-not-allowed opacity-70";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${disabled ? disabledCls : enabledCls}`}
    >
      Next
    </button>
  );
};

export default BtnNext;
