export default function ResearchPage() {
    const researchAreas = [
        {
            title: "Letters of Marque & Privatization",
            description: "Reviving historical mechanisms of private military action for modern security challenges, from maritime security to proxy force employment.",
            topics: ["The Democratization of Violence", "Prize Court Reform", "Managing the China Trade-Off"]
        },
        {
            title: "Monroe Doctrine 2.0",
            description: "Reasserting American hemispheric dominance through territorial action, energy leverage, and countering foreign influence.",
            topics: ["The Trump Corollary", "Making Cuba Great Again", "Winning Brazil"]
        },
        {
            title: "Cognitive & Information Warfare",
            description: "Leveraging American cultural and technological advantages for strategic information operations at scale.",
            topics: ["Shitposting as a National Asset", "Computational Espionage", "Data Warfare"]
        },
        {
            title: "Defense Industrial Reinvention",
            description: "Novel approaches to rebuilding American manufacturing and technological supremacy through unconventional means.",
            topics: ["Dark SBIR", "The GIGACHAD Approach", "Acquisitions Reform is Cultural Reform"]
        },
        {
            title: "Military Transformation",
            description: "Rethinking force structure, talent management, and operational concepts for 21st century conflict.",
            topics: ["American Auxilia", "The Best and the Brightest", "Missile Superiority"]
        },
        {
            title: "Energy & Resource Hegemony",
            description: "Weaponizing American control over critical resources to achieve strategic objectives.",
            topics: ["The United States is the New OPEC", "The Separatist Strategy", "Salvage for Technology"]
        },
    ];

    return (
        <div className="darc-mode min-h-screen py-16">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="mb-12 border-l-4 border-darc-red pl-6">
                    <h1 className="text-5xl font-mono font-bold text-darc-red mb-4 chromatic" data-text="RESEARCH">
                        RESEARCH
                    </h1>
                    <p className="text-darc-green font-mono text-lg">
                        Bold defense thinking that acknowledges hard truths and confronts the urgency of this moment.
                    </p>
                    <div className="flex gap-4 text-xs mt-4">
                        <span className="border border-darc-red text-darc-red px-3 py-1 font-mono">機密</span>
                        <span className="border border-darc-cyan text-darc-cyan px-3 py-1 font-mono">CLASSIFIED</span>
                    </div>
                </div>

                {/* Research Areas */}
                <div className="space-y-6">
                    {researchAreas.map((area, index) => (
                        <article key={index} className="border-l-4 border-darc-cyan bg-darc-black bg-opacity-50 p-8 hover:bg-opacity-70 transition-all">
                            <h2 className="text-2xl font-mono font-bold text-darc-cyan mb-3 glitch-effect" data-text={area.title}>
                                {area.title}
                            </h2>
                            <p className="text-darc-green leading-relaxed mb-4 font-mono">
                                {area.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {area.topics.map((topic, i) => (
                                    <span
                                        key={i}
                                        className="text-xs border border-darc-green text-darc-green px-3 py-1 font-mono hover:bg-darc-green hover:text-black transition-all cursor-default"
                                    >
                                        {topic}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>

                {/* Philosophy Section */}
                <section className="mt-16 bg-darc-red bg-opacity-10 border-2 border-darc-red p-8">
                    <h2 className="text-2xl font-mono font-bold text-darc-red mb-6">
                        {'>> '} RESEARCH PHILOSOPHY
                    </h2>
                    <div className="space-y-4 text-darc-green font-mono">
                        <p className="leading-relaxed">
                            <span className="text-darc-red font-bold">[1]</span> We question fundamental assumptions
                            that the establishment treats as sacrosanct.
                        </p>
                        <p className="leading-relaxed">
                            <span className="text-darc-red font-bold">[2]</span> We draw from history, including
                            supposedly "outdated" concepts, to find solutions to modern problems.
                        </p>
                        <p className="leading-relaxed">
                            <span className="text-darc-red font-bold">[3]</span> We embrace asymmetric and unconventional
                            approaches that legacy institutions ignore.
                        </p>
                        <p className="leading-relaxed">
                            <span className="text-darc-red font-bold">[4]</span> We prioritize American power and interests
                            over abstract internationalist ideals.
                        </p>
                    </div>
                </section>

                {/* CTA */}
                <div className="mt-12 bg-darc-cyan bg-opacity-10 border-2 border-darc-cyan p-8 text-center">
                    <p className="text-darc-cyan font-bold text-xl mb-4 font-mono">
                        [EXPLORE OUR PUBLICATIONS]
                    </p>
                    <a
                        href="/publications"
                        className="inline-block bg-darc-cyan text-black px-8 py-3 font-bold font-mono hover:bg-darc-red transition-all text-lg"
                    >
                        VIEW ALL RESEARCH &gt;&gt;
                    </a>
                </div>
            </div>
        </div>
    );
}
