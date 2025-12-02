const BtnGoBack = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mt-6 px-4 py-2 rounded-md font-medium transition-colors duration-300 hover:brightness-90 cursor-pointer"
      style={{
        backgroundColor: "var(--text-color)",
        color: "var(--bg-color)",
      }}
    >
      Go Back
    </button>
  );
};

export default BtnGoBack;
