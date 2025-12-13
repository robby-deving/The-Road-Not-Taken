import { useEffect, useState } from 'react';


export default function Navbar() {
    const [isHome, setIsHome] = useState(true);

    useEffect(() => {
      const handleScroll = () => {
        setIsHome(window.scrollY < 100);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <div className={`fixed top-0 z-50 w-full h-16 px-20 flex justify-between items-center px-5 text-sm font-medium transition-colors ${
        isHome 
          ? 'text-[#0F253A]' 
          : 'bg-[#282523] text-white'
      }`}>  <div>
            <span className={`alegreya-extrabold ${isHome ? 'text-[#0F253A]' : 'text-white'} text-xl`}>Great</span>
            <span className="alegreya-extrabold text-[#D76D01] text-xl"> Books</span>
        </div>
        <div className="flex gap-5">
            <a href="#home" className="hover:text-[#D76D01] transition-colors duration-200">Home</a>
            <a href="#author" className="hover:text-[#D76D01] transition-colors duration-200">Author</a>
            <a href="#poem" className="hover:text-[#D76D01] transition-colors duration-200">Poem</a>
            <a href="#context" className="hover:text-[#D76D01] transition-colors duration-200">Context</a>
            <a href="#summary" className="hover:text-[#D76D01] transition-colors duration-200">Summary</a>
            <a href="#analysis" className="hover:text-[#D76D01] transition-colors duration-200">Analysis</a>

        </div>
    </div>
  )
}
