
import { useState } from 'react';

export default function HomeSection() {
  const [selectedPath, setSelectedPath] = useState<'explorer' | 'connection' | null>(null);

  const handleNavigateToAuthor = () => {
    setSelectedPath(null);
    setTimeout(() => {
      document.getElementById('author')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="p-10 flex items-center justify-center relative" style={{
      background: 'linear-gradient(180deg, #FFFAE3 0%, #FFF9CC 100%)',
      minHeight: '100vh',
      width: '100%'
    }}>
        <div className="flex-col justify-center items-center text-center gap-5 flex">
            <div className="border border-[#D76D01] p-1 px-3 rounded-4xl w-fit text-[#D76D01] animate-[fadeInUp_0.6s_ease-in_forwards] opacity-0" style={{ animationDelay: '0.1s' }}>
                An Interactive Journey
            </div>
            <h1 className="mt-16 animate-[fadeInUp_0.6s_ease-in_forwards] opacity-0" style={{ animationDelay: '0.3s' }}>
                <span className="alegreya-semibold text-5xl md:text-7xl text-[#0F253A]">The Road</span>
                <span className="alegreya-semibold-italic text-5xl md:text-7xl text-[#D76D01]"> Not Taken</span>
            </h1>
            <h2 className="alegreya-medium text-xl text-[#0F253A] mb-16 animate-[fadeInUp_0.6s_ease-in_forwards] opacity-0" style={{ animationDelay: '0.5s' }}>By Robert Frost</h2>
            <p className="italic text-base md:text-lg text-[#0F253A] max-w-2xl animate-[fadeInUp_0.6s_ease-in_forwards] opacity-0" style={{ animationDelay: '0.7s' }}>
                Two roads diverged in a yellow wood. Does the choice you make changes everything—or is it merely the story we tell ourselves?            
            </p>
          <div className="mt-5 animate-[fadeInUp_0.6s_ease-in_forwards] opacity-0" style={{ animationDelay: '0.9s' }}>
            <p>Choose a path to start...</p>
            <div className="flex flex-col sm:flex-row gap-5">
                <div onClick={() => setSelectedPath('explorer')} className="flex items-center gap-3 border border-gray-300 bg-white rounded-2xl px-10 py-5 mt-4 cursor-pointer hover:bg-[#FEFCF4] transition-colors shadow-md hover:text-[#D76D01]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                        <path d="M1 4.75V12.25H21L24.75 8.5L21 4.75H1Z" stroke="#D76D01" stroke-width="2" stroke-linejoin="round"/>
                        <path d="M11.625 12.25V26M11.625 1V4.75M8.5 26H14.75" stroke="#D76D01" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    <h2 className="alegreya-medium text-2xl text-[#0F253A] ">The Grassy Road</h2>
                </div>
                <div onClick={() => setSelectedPath('connection')} className="flex items-center gap-3 border border-gray-300 bg-white rounded-2xl px-10 py-5 mt-4 cursor-pointer hover:bg-[#FEFCF4] transition-colors shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                        <path d="M1 4.75V12.25H21L24.75 8.5L21 4.75H1Z" stroke="#D76D01" stroke-width="2" stroke-linejoin="round"/>
                        <path d="M11.625 12.25V26M11.625 1V4.75M8.5 26H14.75" stroke="#D76D01" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    <h2 className="alegreya-medium text-2xl text-[#0F253A]">The Other Road</h2>
                </div>

            </div>
           

          </div>
        </div>

        {/* Backdrop and Modal */}
        {selectedPath && (
          <>
            {/* Backdrop with blur */}
            <div 
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              onClick={() => setSelectedPath(null)}
            />
            
            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative">
                {/* Close button */}
                <button 
                  onClick={() => setSelectedPath(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>

                <div className="flex flex-col items-center gap-5 mt-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="38" viewBox="0 0 26 27" fill="none">
                    <path d="M1 4.75V12.25H21L24.75 8.5L21 4.75H1Z" stroke="#D76D01" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M11.625 12.25V26M11.625 1V4.75M8.5 26H14.75" stroke="#D76D01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>

                  <h1 className="alegreya-semibold text-4xl text-[#B24900]">
                    {selectedPath === 'explorer' ? 'The Path of the Explorer' : 'The Path of Connection'}
                  </h1>
                  
                  <p className="text-[#CE9051] text-center">
                    {selectedPath === 'explorer' 
                      ? "You chose the grassy road. You want to go where few have gone before. You value being unique. But remember: the road doesn't make you special—you make the road special by walking it."
                      : "You chose the worn road. You trust the wisdom of those who walked before you. You value shared experiences. But remember: even on a well-known path, your journey is yours alone."}
                  </p>

                  <button 
                    onClick={handleNavigateToAuthor}
                    className="bg-[#FEE98D] rounded-full h-12 w-12 flex items-center justify-center cursor-pointer hover:bg-[#FDD951] transition-all animate-bounce"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                      <path d="M13.0087 0.292799C12.8212 0.105329 12.5669 1.28104e-05 12.3017 1.27872e-05C12.0366 1.2764e-05 11.7823 0.105328 11.5947 0.292799L6.64473 5.2428L1.69473 0.292798C1.50613 0.11064 1.25352 0.00984611 0.991326 0.0121244C0.72913 0.0144027 0.478316 0.119572 0.292908 0.30498C0.107501 0.490388 0.00233234 0.7412 5.39874e-05 1.0034C-0.00222436 1.26559 0.0985695 1.5182 0.280728 1.7068L5.93773 7.3638C6.12526 7.55127 6.37956 7.65659 6.64473 7.65659C6.90989 7.65659 7.1642 7.55127 7.35173 7.3638L13.0087 1.7068C13.1962 1.51927 13.3015 1.26496 13.3015 0.999799C13.3015 0.734635 13.1962 0.480327 13.0087 0.292799Z" fill="#922E00"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

    </div>
  )
}
