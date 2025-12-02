const BtnNext = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 bg-[#0052ff] text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
    >
      Next
    </button>
  );
};

export default BtnNext;
