import { BookOpen, ExternalLink } from 'lucide-react';

const ResourcesSection = () => {
  return (
    <section id="media" className="mx-auto max-w-screen-lg px-4 p-20 mb-10">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-4xl alegreya-bold text-stone-800 flex items-center gap-3">
          <BookOpen className="w-10 h-10 text-amber-600" />
          Reading Resources
        </h2>
        <div className="h-px bg-stone-300 flex-1"></div>
      </div>

      <div className="space-y-4">
        <a href="https://www.poetryfoundation.org/poets/robert-frost" target="_blank" rel="noreferrer" className="group block bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-lg hover:border-amber-300 transition-all">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-2xl alegreya-bold text-stone-900 mb-2">Poetry Foundation Bio</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                A comprehensive guide to Frost's entire life, complete bibliography, and analysis of his major phases.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-stone-400 uppercase tracking-widest group-hover:text-amber-600 mt-3">
                Read Bio
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-amber-600 flex-shrink-0 ml-4" />
          </div>
        </a>

        <a href="https://www.theatlantic.com/past/docs/unbound/poetry/frost/frost.html" target="_blank" rel="noreferrer" className="group block bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-lg hover:border-amber-300 transition-all">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-2xl alegreya-bold text-stone-900 mb-2">The Atlantic Archives</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                View the original context where Frost's poems were often published. Historical essays and primary sources.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-stone-400 uppercase tracking-widest group-hover:text-amber-600 mt-3">
                View Archive
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-amber-600 flex-shrink-0 ml-4" />
          </div>
        </a>

        <a href="http://www.english.illinois.edu/maps/poets/a_f/frost/road.htm" target="_blank" rel="noreferrer" className="group block bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-lg hover:border-amber-300 transition-all">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-2xl alegreya-bold text-stone-900 mb-2">MAPs Criticism</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Modern American Poetry service. Deep academic essays and critical commentary on the poem's reception.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-stone-400 uppercase tracking-widest group-hover:text-amber-600 mt-3">
                Read Criticism
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-amber-600 flex-shrink-0 ml-4" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default ResourcesSection;
