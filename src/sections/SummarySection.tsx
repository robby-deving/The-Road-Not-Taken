
import { Quote, HelpCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function SummarySection (){
  const { ref: containerRef, isVisible: containerVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();
  const { ref: sidebarRef, isVisible: sidebarVisible } = useScrollReveal();

  return (
    <section id="summary" className="mx-auto max-w-screen-lg px-4 p-10 mt-10">
      <div ref={containerRef} className={`bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-200 transition-all duration-800 ease-in-out ${containerVisible ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-sm scale-95'}`}>
        <div className="bg-amber-600 p-6 text-white text-center">
          <h2 className="text-2xl sm:text-3xl alegreya-bold">Summary of the Work</h2>
        </div>
        <div className="p-6 sm:p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
          <div ref={contentRef} className={`md:col-span-7 space-y-6 text-base sm:text-base text-stone-700 leading-relaxed transition-all duration-800 ease-out delay-200 ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <p>
              The poem creates a deceptively simple scene: a solitary traveler stands in an autumn woods where a road forks into two. The "yellow" leaves suggest the season of change. He is paralyzed by the choice, knowing he cannot travel both paths. He stares down one as far as he can until it bends into the "undergrowth," realizing that the future is unknowable.
            </p>
            <p>
              After much hesitation, he impulsively chooses the second road. He tries to rationalize this by claiming it has "the better claim" because it is grassy. However, in a moment of brutal honesty often missed by readers, he immediately retracts this claim, admitting that passing feet had worn them "really about the same."
            </p>
            <p>
              He leaves the first road for another day, though he instinctively knows that "way leads on to way" and he will likely never return. The poem ends with a projection into the future: he imagines himself as an old man, telling a story about this moment with a "sigh." He plans to claim he took the road "less traveled," rewriting his own history to give this random choice deep meaning.
            </p>
          </div>
          <div ref={sidebarRef} className={`md:col-span-5 bg-stone-100 p-6 sm:p-8 rounded-2xl flex flex-col justify-center transition-all duration-800 ease-out delay-300 ${sidebarVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
              <h4 className="alegreya-bold text-amber-700 mb-2 flex items-center gap-2"><HelpCircle className="w-4 h-4"/> Historical Context</h4>
              <p className="text-sm text-stone-600">
                Frost wrote this poem for his friend Edward Thomas, who was famously indecisive. When they walked together, Thomas would often sigh that they should have taken a different path. Frost intended the poem to be a lighthearted joke about this trait, but Thomas took it seriously—eventually leading him to enlist in WWI, where he died.
              </p>
            </div>
            <div className="text-center">
              <Quote className="w-10 h-10 text-stone-300 mx-auto mb-2" />
              <p className="alegreya-semibold-italic text-stone-600 text-lg sm:text-lg">
                "I took the one less traveled by,<br/>And that has made all the difference."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};