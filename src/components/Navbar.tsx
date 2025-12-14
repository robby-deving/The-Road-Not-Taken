import { useEffect, useState } from 'react';


export default function Navbar() {
    const [isHome, setIsHome] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsHome(window.scrollY < 100);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => {
      setIsMenuOpen(false);
    };

    return (
      <div className={`fixed top-0 z-50 w-full h-16 px-5 md:px-20 flex justify-between items-center text-sm font-medium transition-colors ${
        isHome 
          ? 'text-[#0F253A]' 
          : 'bg-[#282523] text-white'
      }`}>
        <div>
            <span className={`alegreya-extrabold ${isHome ? 'text-[#0F253A]' : 'text-white'} text-xl`}>Great</span>
            <span className="alegreya-extrabold text-[#D76D01] text-xl"> Books</span>
        </div>

        {/* Hamburger Menu Button - Mobile Only */}
        <button 
          className="md:hidden flex flex-col gap-1 w-6 h-6 justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-full transition-all ${isHome ? 'bg-[#0F253A]' : 'bg-white'} ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`h-0.5 w-full transition-all ${isHome ? 'bg-[#0F253A]' : 'bg-white'} ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-0.5 w-full transition-all ${isHome ? 'bg-[#0F253A]' : 'bg-white'} ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-5">
            <a href="#home" className="hover:text-[#D76D01] transition-colors duration-200">Home</a>
            <a href="#author" className="hover:text-[#D76D01] transition-colors duration-200">Author</a>
            <a href="#poem" className="hover:text-[#D76D01] transition-colors duration-200">Poem</a>
            <a href="#context" className="hover:text-[#D76D01] transition-colors duration-200">Context</a>
            <a href="#summary" className="hover:text-[#D76D01] transition-colors duration-200">Summary</a>
            <a href="#analysis" className="hover:text-[#D76D01] transition-colors duration-200">Analysis</a>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-16 left-0 w-full ${
          isHome ? 'bg-white' : 'bg-[#282523]'
        } shadow-lg transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="flex flex-col py-4">
            <a href="#home" onClick={handleLinkClick} className="px-5 py-3 hover:bg-[#D76D01] hover:text-white transition-colors duration-200">Home</a>
            <a href="#author" onClick={handleLinkClick} className="px-5 py-3 hover:bg-[#D76D01] hover:text-white transition-colors duration-200">Author</a>
            <a href="#poem" onClick={handleLinkClick} className="px-5 py-3 hover:bg-[#D76D01] hover:text-white transition-colors duration-200">Poem</a>
            <a href="#context" onClick={handleLinkClick} className="px-5 py-3 hover:bg-[#D76D01] hover:text-white transition-colors duration-200">Context</a>
            <a href="#summary" onClick={handleLinkClick} className="px-5 py-3 hover:bg-[#D76D01] hover:text-white transition-colors duration-200">Summary</a>
            <a href="#analysis" onClick={handleLinkClick} className="px-5 py-3 hover:bg-[#D76D01] hover:text-white transition-colors duration-200">Analysis</a>
          </div>
        </div>
    </div>
  )
}
