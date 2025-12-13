import Navbar from "./components/Navbar"
import AuthorSection from "./sections/AuthorSection"
import HomeSection from "./sections/HomeSection"


function App() {

  return (
    < div className="bg-[#FAFAF9]">
      <Navbar />
      <section id="home">
        <HomeSection />
      </section>

      <section id="author">
        <AuthorSection />
      </section>

      <section id="poem">
        // Poem section content goes here
      </section>

      <section id="context">
        // Context section content goes here
      </section>

      <section id="summary">
        // Summary section content goes here
      </section>

      <section id="analysis">
        // Summary section content goes here
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
