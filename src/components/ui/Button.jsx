function Button({ children, onClick }) {
  if (onClick)
    return (
      <button
        className="absolute bottom-0 right-0 bg-[#527bf7] px-5 py-2 text-white transition-colors duration-200 hover:bg-[#334c96]"
        onClick={onClick}
      >
        {children}
      </button>
    );
  return (
    <button className="absolute bottom-0 right-0 bg-[#527bf7] px-5 py-2 text-white transition-colors duration-300 hover:bg-[#334c96]">
      {children}
    </button>
  );
}

export default Button;
