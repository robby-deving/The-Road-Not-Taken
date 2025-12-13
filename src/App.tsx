import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import AuthorSection from "./sections/AuthorSection"
import HomeSection from "./sections/HomeSection"
import ContextSection from "./sections/ContextSection" 
import SummarySection from "./sections/SummarySection" 
import PoemSection from "./sections/PoemSection"
import AnalysisSection from "./sections/AnalysisSection"

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

      <section id="author">
        <AuthorSection />
      </section>

      <section id="poem">
        <PoemSection activeAnnotation={activeAnnotation} setActiveAnnotation={setActiveAnnotation} />
      </section>

      <section id="context" className="my-10">
        <ContextSection />
      </section>

      <section id="summary">
        <SummarySection />
        <SummarySection />
      </section>

      <section id="analysis">
        <AnalysisSection expandedAnalysis={expandedAnalysis} toggleAnalysis={toggleAnalysis} />
      </section>


      <footer>
        <div className="bg-[#1C1917] text-white text-center p-5 py-10 flex flex-col gap-2 items-center">
          <div>
            <span className="alegreya-bold text-white text-4xl">Great</span>
            <span className="alegreya-bold text-[#D76D01] text-4xl"> Books</span>
          </div>
          <h2 className="text-[12px]">Created for educational purposes</h2>
        </div>
      </footer>
            
    </div>
  )
}

export default App
