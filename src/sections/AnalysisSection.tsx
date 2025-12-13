import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import analysisModals from '../data/analysisModals.json';

interface AnalysisSectionProps {
  expandedAnalysis: string | null;
  toggleAnalysis: (key: string) => void;
}

const getIcon = (title: string) => {
  const icons: Record<string, JSX.Element> = {
    'Tone & Attitude': <div className="w-6 h-6">🎭</div>,
    'Imagery & Symbolism': <div className="w-6 h-6">🎨</div>,
    'Rhythm & Voice': <div className="w-6 h-6">🎵</div>,
    'Rhyme Scheme': <div className="w-6 h-6">🔤</div>,
    'Meter (The Beat)': <div className="w-6 h-6">📏</div>,
    'Theme / Main Idea': <div className="w-6 h-6">💡</div>,
  };
  return icons[title] || <div className="w-6 h-6">📚</div>;
};

const AnalysisSection: React.FC<AnalysisSectionProps> = ({ expandedAnalysis, toggleAnalysis }) => {
  return (
    <section id="analysis" className="mx-auto max-w-screen-lg px-4 p-10 mt-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl alegreya-bold text-stone-800 mb-4">Literary Analysis</h2>
        <p className="text-stone-500">Explore the key elements that make this poem a masterpiece of modernist literature.</p>
      </div>
      
      <div className="bg-white rounded-3xl shadow-xl border border-stone-200 overflow-hidden divide-y divide-stone-100">
        {Object.keys(analysisModals).map((key) => {
          const item = analysisModals[key as keyof typeof analysisModals];
          const isOpen = expandedAnalysis === key;
          
          return (
            <div key={key} className="group">
              {/* Header */}
              <button 
                onClick={() => toggleAnalysis(key)}
                className={`w-full text-left px-10 py-8 flex justify-betweenitems-center gap-6 transition-all hover:bg-stone-50 cursor-pointer ${isOpen ? 'bg-stone-50' : ''}`}
              >
                <div className="flex-1 text-left flex items-center gap-4">
                  <h3 className={`alegreya-bold text-2xl font-bold ${isOpen ? 'text-amber-900' : 'text-stone-900 group-hover:text-amber-800'}`}>
                    {item.title}
                  </h3>
                </div>
                <div className={`p-2 rounded-full transition-all duration-500 ${isOpen ? 'bg-amber-200 text-amber-800 rotate-180' : 'text-stone-300'}`}>
                  {isOpen ? <ChevronUp className="w-5 h-5 transition-transform duration-500"/> : <ChevronDown className="w-5 h-5 transition-transform duration-500"/>}
                </div>
              </button>

              {/* Expanded Content */}
              <div 
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  isOpen ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-8 md:p-8 bg-stone-50 border-t border-stone-200">
                  <div className="max-w-4xl mx-auto">
                    {/* Description */}
                    <p className="text-base text-stone-700 leading-6">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AnalysisSection;
