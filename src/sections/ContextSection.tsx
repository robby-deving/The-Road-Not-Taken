
export default function ContextSection() {
  return (
    <section id="stats" className="mx-4 sm:mx-8 md:mx-20 lg:mx-40 mb-20">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-12">
        <h2 className="text-2xl sm:text-3xl alegreya-bold text-stone-800 flex items-center gap-3">
          
          About the Work
        </h2>
        <div className="h-px bg-stone-300 flex-1 hidden sm:block"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
        {/* Highlight Card */}
        <div className="col-span-1 md:col-span-4 bg-amber-600 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden min-h-[280px] sm:min-h-auto">
          <div className="relative z-10">
            <div className="text-amber-200 font-bold uppercase tracking-widest text-xs sm:text-sm mb-2">Publication Year</div>
            <div className="text-5xl sm:text-7xl alegreya-extrabold mb-4">1916</div>
            <p className="text-amber-100 leading-relaxed text-sm sm:text-base">
              Published in the collection <em>Mountain Interval</em>, this work cemented Frost's reputation as a master of conversational poetry.
            </p>
          </div>
        </div>

        {/* Data Grid */}
        <div className="col-span-1 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-stone-200 hover:border-amber-400 transition-colors shadow-sm flex flex-col items-center justify-center min-h-[200px] sm:min-h-auto">        
            <div className="w-full text-left">
              <div className="text-xs font-bold text-stone-400 uppercase">Meter</div>
              <div className="text-lg sm:text-2xl alegreya-extrabold text-stone-900 pt-2">Iambic Tetrameter</div>
              <div className="text-xs sm:text-sm text-stone-500">Four beats per line</div>
            </div>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-stone-200 hover:border-amber-400 transition-colors shadow-sm flex flex-col items-center justify-center min-h-[200px] sm:min-h-auto">
            <div className="w-full text-left">
              <div className="text-xs font-bold text-stone-400 uppercase">Rhyme Scheme</div>
              <div className="text-lg sm:text-2xl alegreya-extrabold text-stone-900 pt-2">ABAAB</div>
              <div className="text-xs sm:text-sm text-stone-500">Strict & Circular</div>
            </div>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-stone-200 hover:border-amber-400 transition-colors shadow-sm flex flex-col items-center justify-center min-h-[200px] sm:min-h-auto">
            <div className="w-full text-left">
              <div className="text-xs font-bold text-stone-400 uppercase">Setting</div>
              <div className="text-lg sm:text-2xl alegreya-extrabold text-stone-900 pt-2">Yellow Wood</div>
              <div className="text-xs sm:text-sm text-stone-500">Autumn Morning</div>
            </div>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-stone-200 hover:border-amber-400 transition-colors shadow-sm flex flex-col items-center justify-center min-h-[200px] sm:min-h-auto">
            <div className="w-full text-left">
              <div className="text-xs font-bold text-stone-400 uppercase">Genre</div>
              <div className="text-lg sm:text-2xl alegreya-extrabold text-stone-900 pt-2">Lyric Poetry</div>
              <div className="text-xs sm:text-sm text-stone-500">Modernist</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


