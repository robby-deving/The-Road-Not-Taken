import { useState } from "react"
import Navbar from "./components/Navbar"
import AuthorSection from "./sections/AuthorSection"
import HomeSection from "./sections/HomeSection"
import ContextSection from "./sections/ContextSection" 
import SummarySection from "./sections/SummarySection" 
import PoemSection from "./sections/PoemSection"
import AnalysisSection from "./sections/AnalysisSection"
import ResourcesSection from "./sections/ResourcesSection"
import { Sparkles, Award } from 'lucide-react'

function App() {
  const [activeAnnotation, setActiveAnnotation] = useState<any>(null)
  const [expandedAnalysis, setExpandedAnalysis] = useState('Tone')

  const toggleAnalysis = (key: string) => {
    setExpandedAnalysis(expandedAnalysis === key ? '' : key)
  }

  return (
    <div className="bg-[#FAFAF9]">
      <Navbar />
      <section id="home">
        <HomeSection />
      </section>

      <section id="author" className="scroll-mt-15">
        <AuthorSection />
      </section>

      <section id="poem" className="scroll-mt-15">
        <PoemSection activeAnnotation={activeAnnotation} setActiveAnnotation={setActiveAnnotation} />
      </section>

      <section id="context" className="my-10 scroll-mt-15">
        <ContextSection />
      </section>

      <section id="summary" className="scroll-mt-15">
        <SummarySection />
      </section>

      <section id="analysis" className="scroll-mt-15">
        <AnalysisSection expandedAnalysis={expandedAnalysis} toggleAnalysis={toggleAnalysis} />
      </section>

      {/* What Makes it Great Section */}
      <section className="mx-auto max-w-screen-lg px-4 p-20">
        <div className="bg-stone-900 text-stone-300 rounded-3xl p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-64 bg-amber-600 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
          
          <h2 className="text-4xl alegreya-bold text-white mb-8 relative z-10 flex items-center gap-3"><Sparkles className="w-10 h-10 text-amber-400" /> What Makes This Work Great?</h2>
          
          <div className="space-y-6 text-base leading-relaxed relative z-10 max-w-4xl">
            <p>
              <strong className="text-amber-500">It is Universal.</strong> Everyone, regardless of age or culture, understands the fear of making the wrong choice. We all have moments where we stand at a fork in the road—choosing a major, choosing a partner, choosing a city to live in. Frost captures that specific feeling of hesitation perfectly.
            </p>
            <p>
              <strong className="text-amber-500">It is Deceptive.</strong> The poem seems simple. It uses easy words and a nice rhyme. A child can read it. But the meaning is actually very complex. It tricks the reader. Most people think it's a happy poem about being unique, but it's actually a slightly sad poem about how we can't have everything. This depth allows you to read it differently when you are 15, 30, and 60 years old.
            </p>
            <p>
              <strong className="text-amber-500">It captures the Human Condition.</strong> We are creatures who need meaning. We hate the idea that our life is random. The poem shows us how humans create meaning by telling stories. The speaker turns a random walk in the woods into a life-changing event just by how he talks about it. It shows the power of storytelling.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <ResourcesSection />

      {/* Pulitzer Prize Section */}
      <section className="mx-auto max-w-screen-lg px-4 p-10 mb-20">
        <div className="bg-amber-100 rounded-3xl p-12 text-center border border-amber-200">
          <div className="inline-block p-4 bg-white rounded-full shadow-md mb-6">
            <Award className="w-8 h-8 text-amber-600" />
          </div>
          <h2 className="text-3xl alegreya-bold text-amber-900 mb-4">Does it deserve the Pulitzer Prize?</h2>
          <p className="max-w-3xl mx-auto text-base text-amber-900/80 leading-relaxed mb-8">
            "The Road Not Taken" is part of the collection <em>Mountain Interval</em>, which actually did not win the Pulitzer. However, Robert Frost went on to win <strong>Four Pulitzer Prizes</strong> for his later books. 
          </p>
          <p className="max-w-3xl mx-auto text-base text-amber-900/80 leading-relaxed">
            <strong>Yes, his work deserves it.</strong> He took simple American language and made it deep and philosophical. He didn't need fancy words to talk about big ideas. He taught us that poetry isn't just for fancy people in libraries—it's for everyone walking in the woods.
          </p>
        </div>
      </section>

      <footer>
        <div className="bg-[#1C1917] text-white text-center p-5 py-10 flex flex-col gap-2 items-center">
          <div>
            <span className="alegreya-bold text-white text-3xl">Great</span>
            <span className="alegreya-bold text-[#D76D01] text-3xl"> Books</span>
          </div>
          <h2 className="text-[12px]">Created for educational purposes</h2>
        </div>
      </footer>
            
    </div>
  )
}

export default App
