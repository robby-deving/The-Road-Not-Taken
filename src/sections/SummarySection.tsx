import infoIcon from '../assets/info-rounded.svg';

export default function SummarySection() {
	return (
		<section className="mx-4 sm:mx-8 md:mx-20 lg:mx-40 mb-20">
			<div className="bg-white border border-stone-200 rounded-3xl shadow-sm p-6 sm:p-8">
				<div className="-mx-6 sm:-mx-8 -mt-6 sm:-mt-8 bg-amber-600 text-white text-2xl sm:text-3xl alegreya-bold tracking-wide px-6 sm:px-8 py-3 sm:py-4 rounded-t-3xl shadow-sm text-center">
					Summary of the Work
				</div>
				
				<div className="grid grid-cols-1 md:grid-cols-[53fr_47fr] gap-6 sm:gap-8 mt-6 sm:mt-8">
					{/* Left Column */}
					<div className="text-stone-700 leading-relaxed text-sm sm:text-base space-y-4">
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

					{/* Right Column */}
					<div className="bg-[#F5F5F4] p-4 sm:p-6 rounded-2xl flex flex-col justify-center">
						<div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
							<div className="flex items-center gap-2 mb-4">
								<img src={infoIcon} alt="Info" className="w-5 h-5" />
								<span className="text-amber-600 text-sm sm:text-base font-semibold">
									Historical Context
								</span>
							</div>
							<p className="text-stone-700 leading-relaxed text-sm sm:text-base">
								Frost wrote this poem for his friend Edward Thomas, who was famously indecisive. When they walked together, Thomas would often sigh that they should have taken a different path. Frost intended the poem to be a lighthearted joke about this trait, but Thomas took it seriously—eventually leading him to enlist in WWI, where he died.
							</p>
						</div>
						
						<div className="mt-6 text-stone-700 text-lg sm:text-xl pl-6 pr-2 alegreya-medium-italic">
							<p>"I took the one less traveled by,</p>
							<p>And that has made all the difference."</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
