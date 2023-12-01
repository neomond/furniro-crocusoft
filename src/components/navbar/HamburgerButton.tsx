const HamburgerButton = ({ isMenuOpen, setIsMenuOpen }: any) => {
  return (
    <div className="md:hidden flex items-center z-50 text-2xl">
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? "✕" : "☰"}
      </button>
    </div>
  );
};

export default HamburgerButton;
