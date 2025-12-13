import React from 'react';
import { Quote, Lightbulb, Heart } from 'lucide-react';
import poemLinesData from '../data/poemLines.json';

const poemLines: Array<{text: string; analysis: string; reality: string}> = poemLinesData;

interface PoemLine {
  text: string;
  analysis: string;
  reality: string;
}

interface PoemSectionProps {
  activeAnnotation: PoemLine | null;
  setActiveAnnotation: (annotation: PoemLine | null) => void;
}

const PoemLineComponent = ({ line, onClick, active }: any) => (
  <div 
    onClick={() => onClick(line)}
    className={`
      cursor-pointer transition-all duration-300 ease-in-out px-4 py-1 rounded-lg relative group flex gap-3 items-center
      ${active?.text === line.text 
        ? 'bg-amber-50 scale-[1] border-l-4 border-amber-600' 
        : 'hover:bg-stone-50/50 hover:pl-6 text-stone-600 border-l-4 border-transparent'}
    `}
  >
    <span className={`relative z-10 transition-all duration-300 ${active?.text === line.text ? 'text-stone-900 font-medium' : ''}`}>
      {line.text}
    </span>
  </div>
);

const PoemSection: React.FC<PoemSectionProps> = ({ activeAnnotation, setActiveAnnotation }) => {
  return (
    <section id="poem" className="mx-auto max-w-screen-lg px-4 p-10 mt-10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl alegreya-bold text-stone-800 mb-2">Interactive Reading</h2>
          <p className="text-stone-500 text-sm sm:text-base">Click a line to reveal the life lesson behind it.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8">
        {/* Poem Column */}
        <div className="lg:col-span-6 bg-white p-6 sm:p-8 md:p-12 rounded-2xl shadow-lg border border-stone-200">
          <h3 className="text-center alegreya-bold text-2xl sm:text-3xl mb-2">The Road Not Taken</h3>
          <p className="text-center text-stone-500 italic mb-10 text-sm sm:text-sm">Originally published 1916</p>
          
          <div className="space-y-6  alegreya-regular text-base sm:text-lg md:text-lg leading-relaxed sm:leading-loose text-stone-800">
            {[0, 5, 10, 15].map((start, sIdx) => (
              <div key={sIdx} className="space-y-1">
                {poemLines.slice(start, start + 5).map((line: PoemLine, i: number) => (
                  <PoemLineComponent 
                    key={start + i} 
                    line={line} 
                    index={start + i} 
                    onClick={setActiveAnnotation} 
                    active={activeAnnotation} 
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Analysis Column */}
        <div className="lg:col-span-6">
          <div className="sticky top-24 transition-colors duration-500 bg-stone-900 text-stone-200 p-6 sm:p-8 rounded-2xl shadow-2xl min-h-[600px] flex flex-col border-l-8 border-amber-600">
            {activeAnnotation ? (
              <div className="animate-fade-in flex-grow">
                <div className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-4">Selected Line</div>
                <h4 className="text-xl sm:text-2xl alegreya-semibold-italic text-white mb-8 border-l-4 border-amber-600 pl-4">
                  "{activeAnnotation.text}"
                </h4>
                
                <div className="bg-stone-800 p-6 rounded-xl mb-6 border border-stone-700">
                  <h5 className="alegreya-bold text-amber-100 mb-3 flex items-center gap-2 uppercase tracking-wider text-xs">
                    <Lightbulb className="w-4 h-4 text-yellow-400"/> What does it mean?
                  </h5>
                  <p className="text-stone-300 leading-relaxed text-base sm:text-sm">{activeAnnotation.analysis}</p>
                </div>

                <div className="bg-amber-900/30 p-6 rounded-xl border border-amber-700/50">
                  <h5 className="alegreya-bold text-white mb-3 flex items-center gap-2 uppercase tracking-wider text-xs">
                    <Heart className="w-4 h-4 text-red-400"/> Life Lesson
                  </h5>
                  <p className="text-amber-50/90 leading-relaxed alegreya-semibold-italic text-sm sm:text-sm">{activeAnnotation.reality}</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center opacity-40">
                <Quote className="w-16 h-16 mb-4" />
                <p className="text-lg sm:text-xl alegreya-bold">Select a line to explore its hidden lesson.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoemSection;
