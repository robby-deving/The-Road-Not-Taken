import { useState } from "react";
import LifeStory from "../components/AuthorSection/LifeStory";
import LifeWorks from "../components/AuthorSection/LifeWorks";
import Awards from "../components/AuthorSection/Awards";

export default function AuthorSection() {
    const [activeTab, setActiveTab] = useState<"story" | "works" | "awards">(
        "story"
    );
  return (
  <div className="mx-auto max-w-screen-lg px-4 p-10 mt-10">
    <div className="flex items-center justify-center gap-5">
      <div className="bg-gray-300 h-px flex-1"></div>
      <div className="text-center alegreya-bold text-4xl text-[#D76D01]">Author</div>
      <div className="bg-gray-300 h-px flex-1"></div>
    </div>

    <div className="mt-10 shadow-lg rounded-2xl overflow-hidden">
        <div className="bg-[#1C1917] rounded-t-2xl flex gap-20 ">
            <div className="flex flex-col flex-1 p-10">
                <div className="text-white alegreya-semibold text-4xl">Robert Lee Frost</div>
                <div className="flex gap-3 mt-3">
                    <div className="flex items-center gap-3 text-white bg-[#292524] rounded-2xl px-3 py-1 w-fit alegreya-regular ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path d="M12.75 1.5H11.25V0.75C11.25 0.551088 11.171 0.360322 11.0303 0.21967C10.8897 0.0790176 10.6989 0 10.5 0C10.3011 0 10.1103 0.0790176 9.96967 0.21967C9.82902 0.360322 9.75 0.551088 9.75 0.75V1.5H5.25V0.75C5.25 0.551088 5.17098 0.360322 5.03033 0.21967C4.88968 0.0790176 4.69891 0 4.5 0C4.30109 0 4.11032 0.0790176 3.96967 0.21967C3.82902 0.360322 3.75 0.551088 3.75 0.75V1.5H2.25C1.65326 1.5 1.08097 1.73705 0.65901 2.15901C0.237053 2.58097 0 3.15326 0 3.75V12.75C0 13.3467 0.237053 13.919 0.65901 14.341C1.08097 14.7629 1.65326 15 2.25 15H12.75C13.3467 15 13.919 14.7629 14.341 14.341C14.7629 13.919 15 13.3467 15 12.75V3.75C15 3.15326 14.7629 2.58097 14.341 2.15901C13.919 1.73705 13.3467 1.5 12.75 1.5ZM13.5 12.75C13.5 12.9489 13.421 13.1397 13.2803 13.2803C13.1397 13.421 12.9489 13.5 12.75 13.5H2.25C2.05109 13.5 1.86032 13.421 1.71967 13.2803C1.57902 13.1397 1.5 12.9489 1.5 12.75V7.5H13.5V12.75ZM13.5 6H1.5V3.75C1.5 3.55109 1.57902 3.36032 1.71967 3.21967C1.86032 3.07902 2.05109 3 2.25 3H3.75V3.75C3.75 3.94891 3.82902 4.13968 3.96967 4.28033C4.11032 4.42098 4.30109 4.5 4.5 4.5C4.69891 4.5 4.88968 4.42098 5.03033 4.28033C5.17098 4.13968 5.25 3.94891 5.25 3.75V3H9.75V3.75C9.75 3.94891 9.82902 4.13968 9.96967 4.28033C10.1103 4.42098 10.3011 4.5 10.5 4.5C10.6989 4.5 10.8897 4.42098 11.0303 4.28033C11.171 4.13968 11.25 3.94891 11.25 3.75V3H12.75C12.9489 3 13.1397 3.07902 13.2803 3.21967C13.421 3.36032 13.5 3.55109 13.5 3.75V6Z" fill="#D76D01"/>
                        </svg>
                        Born March 26, 1874
                    </div>
                    <div  className="flex items-center gap-3 text-white bg-[#292524] rounded-2xl px-3 py-1 w-fit alegreya-regular ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <path d="M15.3958 8.07292C15.3958 6.13076 14.6243 4.26815 13.251 2.89483C11.8777 1.52152 10.0151 0.75 8.07292 0.75M15.3958 8.07292H0.75M15.3958 8.07292C15.3958 10.0151 14.6243 11.8777 13.251 13.251C11.8777 14.6243 10.0151 15.3958 8.07292 15.3958M8.07292 0.75C6.13076 0.75 4.26815 1.52152 2.89483 2.89483C1.52152 4.26815 0.75 6.13076 0.75 8.07292M8.07292 0.75C7.67708 0.75 4.90625 4.02829 4.90625 8.07292C4.90625 12.1175 7.67708 15.3958 8.07292 15.3958M8.07292 0.75C8.46875 0.75 11.2396 4.02829 11.2396 8.07292C11.2396 12.1175 8.46875 15.3958 8.07292 15.3958M0.75 8.07292C0.75 10.0151 1.52152 11.8777 2.89483 13.251C4.26815 14.6243 6.13076 15.3958 8.07292 15.3958" stroke="#D76D01" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        American
                    </div>
                    <div  className="flex items-center gap-3 text-white bg-[#292524] rounded-2xl px-3 py-1 w-fit alegreya-regular ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                            <path d="M14.5698 2.37343C13.9706 1.77651 12.9256 1.77889 12.331 2.37739L10.9187 3.79526L9.17226 5.54168H5.54168C5.3793 5.54179 5.22089 5.59183 5.08792 5.68501C4.95494 5.7782 4.85383 5.91001 4.7983 6.0626L1.63164 14.7709C1.52634 15.0599 1.59839 15.3837 1.8153 15.6014L3.39864 17.1847C3.50524 17.2912 3.64 17.365 3.78711 17.3975C3.93421 17.4301 4.08754 17.42 4.22909 17.3684L12.9374 14.2017C13.09 14.1462 13.2218 14.0451 13.315 13.9121C13.4082 13.7791 13.4582 13.6207 13.4583 13.4583V9.82776L15.2056 8.08055L15.2063 8.07976L16.625 6.65714C16.9243 6.35789 17.0889 5.95968 17.0881 5.53693C17.0881 5.11339 16.9227 4.71518 16.6226 4.41672L14.5698 2.37343ZM12.107 8.9403C11.9585 9.08874 11.8751 9.29007 11.875 9.50001V12.9042L4.55289 15.5666L8.25076 11.8687C8.27134 11.8695 8.29193 11.875 8.31251 11.875C8.54738 11.875 8.77697 11.8054 8.97225 11.6749C9.16753 11.5444 9.31974 11.3589 9.40962 11.1419C9.4995 10.925 9.52301 10.6862 9.47719 10.4558C9.43137 10.2255 9.31828 10.0139 9.1522 9.84782C8.98613 9.68175 8.77453 9.56865 8.54418 9.52283C8.31383 9.47701 8.07506 9.50053 7.85807 9.5904C7.64109 9.68028 7.45562 9.83249 7.32514 10.0278C7.19466 10.2231 7.12501 10.4526 7.12501 10.6875C7.12501 10.7081 7.13055 10.7287 7.13134 10.7493L3.43347 14.4471L6.09584 7.12501H9.50001C9.71059 7.12501 9.91168 7.04189 10.0597 6.89305L11.4792 5.4736L13.5264 7.52085L12.107 8.9403ZM14.6451 6.40064L12.5978 4.35339L13.452 3.49522L15.5048 5.53851L14.6451 6.40064Z" fill="#D76D01"/>
                        </svg>
                        Modernist Poet
                    </div>
                </div>
                <div className="bg-[#292524] border border-[#D76D01] rounded-2xl p-5 font-medium text-[12px] text-white mt-5 flex flex-col gap-3">
                    <div className="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9 12.75C9.2125 12.75 9.39075 12.678 9.53475 12.534C9.67875 12.39 9.7505 12.212 9.75 12V9C9.75 8.7875 9.678 8.6095 9.534 8.466C9.39 8.3225 9.212 8.2505 9 8.25C8.788 8.2495 8.61 8.3215 8.466 8.466C8.322 8.6105 8.25 8.7885 8.25 9V12C8.25 12.2125 8.322 12.3907 8.466 12.5347C8.61 12.6787 8.788 12.7505 9 12.75ZM9 6.75C9.2125 6.75 9.39075 6.678 9.53475 6.534C9.67875 6.39 9.7505 6.212 9.75 6C9.7495 5.788 9.6775 5.61 9.534 5.466C9.3905 5.322 9.2125 5.25 9 5.25C8.7875 5.25 8.6095 5.322 8.466 5.466C8.3225 5.61 8.2505 5.788 8.25 6C8.2495 6.212 8.3215 6.39025 8.466 6.53475C8.6105 6.67925 8.7885 6.751 9 6.75ZM9 16.5C7.9625 16.5 6.9875 16.303 6.075 15.909C5.1625 15.515 4.36875 14.9808 3.69375 14.3063C3.01875 13.6318 2.4845 12.838 2.091 11.925C1.6975 11.012 1.5005 10.037 1.5 9C1.4995 7.963 1.6965 6.988 2.091 6.075C2.4855 5.162 3.01975 4.36825 3.69375 3.69375C4.36775 3.01925 5.1615 2.485 6.075 2.091C6.9885 1.697 7.9635 1.5 9 1.5C10.0365 1.5 11.0115 1.697 11.925 2.091C12.8385 2.485 13.6323 3.01925 14.3063 3.69375C14.9803 4.36825 15.5148 5.162 15.9098 6.075C16.3048 6.988 16.5015 7.963 16.5 9C16.4985 10.037 16.3015 11.012 15.909 11.925C15.5165 12.838 14.9823 13.6318 14.3063 14.3063C13.6303 14.9808 12.8365 15.5152 11.925 15.9097C11.0135 16.3042 10.0385 16.501 9 16.5ZM9 15C10.675 15 12.0938 14.4187 13.2563 13.2562C14.4187 12.0937 15 10.675 15 9C15 7.325 14.4187 5.90625 13.2563 4.74375C12.0938 3.58125 10.675 3 9 3C7.325 3 5.90625 3.58125 4.74375 4.74375C3.58125 5.90625 3 7.325 3 9C3 10.675 3.58125 12.0937 4.74375 13.2562C5.90625 14.4187 7.325 15 9 15Z" fill="#D76D01"/>
                        </svg>
                        Did you know?
                    </div>
                    <p>
                        Frost recited poetry at the inauguration of President John F. Kennedy in 1961. He was 86 years old and blinded by the sun, so he recited "The Gift Outright" from memory instead of the new poem he had written.
                    </p>
                </div>
            </div>
            <div className=" h-full flex items-center img">
                <img src="\public\image 3.png" alt="" className="h-full object-cover rounded-tr-2xl" />
            </div>
        </div>
                <div className="p-10">
                        <div className="flex gap-3 mb-5 ">
                                <button
                                    onClick={() => setActiveTab("story")}
                                    className={`px-4 py-2 border-b-2 font-bold transition ${
                                        activeTab === "story"
                                            ? "border-[#D76D01] text-[#D76D01]"
                                            : "border-transparent text-gray-500 hover:text-[#D76D01]"
                                    }`}
                                >
                                        Life Story
                                </button>
                                <button
                                    onClick={() => setActiveTab("works")}
                                    className={`px-4 py-2 border-b-2 font-bold transition ${
                                        activeTab === "works"
                                            ? "border-[#D76D01] text-[#D76D01]"
                                            : "border-transparent text-gray-500 hover:text-[#D76D01]"
                                    }`}
                                >
                                        Life Works
                                </button>
                                <button
                                    onClick={() => setActiveTab("awards")}
                                    className={`px-4 py-2 border-b-2 font-bold transition ${
                                        activeTab === "awards"
                                            ? "border-[#D76D01] text-[#D76D01]"
                                            : "border-transparent text-gray-500 hover:text-[#D76D01]"
                                    }`}
                                >
                                        Awards & Pulitzer
                                </button>
                        </div>
                        {activeTab === "story" && <LifeStory />}
                        {activeTab === "works" && <LifeWorks />}
                        {activeTab === "awards" && <Awards />}
                </div>
    </div>
  </div>
  )
}
