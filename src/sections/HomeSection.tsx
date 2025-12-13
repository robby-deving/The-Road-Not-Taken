
export default function HomeSection() {
  return (
    <div className="p-10 flex items-center justify-center" style={{
      background: 'linear-gradient(180deg, #FFFAE3 0%, #FFF9CC 100%)',
      minHeight: '100vh',
      width: '100%'
    }}>
        <div className="flex-col justify-center items-center text-center gap-5 flex">
            <div className="border border-[#D76D01] p-1 px-3 rounded-4xl w-fit text-[#D76D01]">
                An Interactive Journey
            </div>
            <h1 className="mt-16">
                <span className="alegreya-semibold text-5xl md:text-7xl text-[#0F253A]">The Road</span>
                <span className="alegreya-semibold-italic text-5xl md:text-7xl text-[#D76D01]"> Not Taken</span>
            </h1>
            <h2 className="alegreya-medium text-xl text-[#0F253A] mb-16">By Robert Frost</h2>
            <p className="italic text-base md:text-lg text-[#0F253A] max-w-2xl">
                Two roads diverged in a yellow wood. Does the choice you make changes everything—or is it merely the story we tell ourselves?            
            </p>
          <div className="mt-5">
            <p>Choose a path to start...</p>
            <div className="flex gap-5">
                <div className="flex items-center gap-3 border border-gray-300 bg-white rounded-2xl px-10 py-5 mt-4 cursor-pointer hover:bg-[#FEFCF4] transition-colors shadow-md hover:text-[#D76D01]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                        <path d="M1 4.75V12.25H21L24.75 8.5L21 4.75H1Z" stroke="#D76D01" stroke-width="2" stroke-linejoin="round"/>
                        <path d="M11.625 12.25V26M11.625 1V4.75M8.5 26H14.75" stroke="#D76D01" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    <h2 className="alegreya-medium text-2xl text-[#0F253A] ">The Grassy Road</h2>
                </div>
                                <div className="flex items-center gap-3 border border-gray-300 bg-white rounded-2xl px-10 py-5 mt-4 cursor-pointer hover:bg-[#FEFCF4] transition-colors shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                        <path d="M1 4.75V12.25H21L24.75 8.5L21 4.75H1Z" stroke="#D76D01" stroke-width="2" stroke-linejoin="round"/>
                        <path d="M11.625 12.25V26M11.625 1V4.75M8.5 26H14.75" stroke="#D76D01" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    <h2 className="alegreya-medium text-2xl text-[#0F253A]">The Other Road</h2>
                </div>

            </div>
           

          </div>
        </div>

    </div>
  )
}
