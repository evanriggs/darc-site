export default function AboutPage() {
    return (
        <div className="darc-mode min-h-screen py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header with glitch effect */}
                <div className="mb-12 border-l-4 border-darc-red pl-6">
                    <h1 className="text-5xl font-mono font-bold text-darc-red mb-4 chromatic" data-text="ABOUT DARC">
                        ABOUT DARC
                    </h1>
                    <div className="flex gap-4 text-xs">
                        <span className="border border-darc-red text-darc-red px-3 py-1 font-mono">機密</span>
                        <span className="border border-darc-cyan text-darc-cyan px-3 py-1 font-mono">CLASSIFIED</span>
                        <span className="border border-darc-green text-darc-green px-3 py-1 font-mono">警告</span>
                    </div>
                </div>

                {/* Main content */}
                <div className="space-y-8 font-mono">
                    <section className="bg-darc-black bg-opacity-50 border border-darc-red p-8">
                        <h2 className="text-2xl text-darc-red mb-4 font-bold">
                            {'>> '} A NEW KIND OF DEFENSE THINK TANK
                        </h2>
                        <p className="text-darc-green leading-relaxed mb-4">
                            The Defense Analyses and Research Corporation (DARC) is a new kind of defense think tank.
                        </p>
                        <p className="text-darc-green leading-relaxed mb-4">
                            We are founded on the proposition that the present era requires bold defense thinking
                            that acknowledges hard truths and genuinely confronts the urgency of this moment.
                        </p>
                        <p className="text-darc-green leading-relaxed">
                            The future demands fresh and strange ideas, ones that offer answers to the deepest
                            questions that the sclerotic machinery of defense intellectualism is no longer able
                            to provide.
                        </p>
                    </section>

                    <section className="border-l-4 border-darc-cyan pl-6">
                        <h2 className="text-2xl text-darc-cyan mb-4 font-bold">
                            {'>> '} THE PROBLEM
                        </h2>
                        <p className="text-darc-green leading-relaxed mb-4">
                            We live in an era where the most fundamental assumptions of warfare and foreign
                            affairs that have defined the recent decades of US statecraft are rapidly and
                            obviously disintegrating.
                        </p>
                        <p className="text-darc-green leading-relaxed mb-4">
                            But strategy remains shackled by a narrow, insular universe of DC "think tank
                            intellectuals", resistant to change, captured by incumbent interests, and jealous
                            of their status.
                        </p>
                        <p className="text-darc-red leading-relaxed font-bold">
                            This ecosystem undermines American power and must be replaced.
                        </p>
                    </section>

                    <section className="bg-darc-black bg-opacity-50 border border-darc-green p-8">
                        <h2 className="text-2xl text-darc-green mb-4 font-bold">
                            {'>> '} LOCATIONS
                        </h2>
                        <div className="space-y-2 text-darc-cyan">
                            <p>HEADQUARTERS: Arlington, VA</p>
                            <p>WEST COAST: El Segundo, CA</p>
                            <p>INTERNATIONAL: London, UK</p>
                        </div>
                    </section>

                    <section className="border-l-4 border-darc-red pl-6">
                        <h2 className="text-2xl text-darc-red mb-4 font-bold">
                            {'>> '} FOLLOW OUR WORK
                        </h2>
                        <div className="space-y-3">
                            <p>
                                <a
                                    href="https://x.com/DefenseAnalyses"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-darc-cyan hover:text-darc-red glitch-effect"
                                    data-text="@DefenseAnalyses"
                                >
                                    @DefenseAnalyses
                                </a>
                                <span className="text-darc-green ml-3">// Twitter/X</span>
                            </p>
                            <p>
                                <a
                                    href="https://defenseanalyses.substack.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-darc-cyan hover:text-darc-red glitch-effect"
                                    data-text="defenseanalyses.substack.com"
                                >
                                    defenseanalyses.substack.com
                                </a>
                                <span className="text-darc-green ml-3">// Newsletter</span>
                            </p>
                            <p>
                                <a
                                    href="https://defenseanalyses.org/publications/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-darc-cyan hover:text-darc-red glitch-effect"
                                    data-text="Browse Publications"
                                >
                                    Browse Publications
                                </a>
                                <span className="text-darc-green ml-3">// Full Archive</span>
                            </p>
                        </div>
                    </section>

                    {/* Substack CTA */}
                    <div className="mt-12 bg-darc-red bg-opacity-10 border-2 border-darc-red p-8 text-center">
                        <p className="text-darc-red font-bold text-xl mb-4 font-mono">
                            [SUBSCRIBE FOR UPDATES]
                        </p>
                        <a
                            href="https://defenseanalyses.substack.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-darc-red text-black px-8 py-3 font-bold font-mono hover:bg-darc-cyan hover:text-black transition-all text-lg"
                        >
                            READ MORE ON SUBSTACK &gt;&gt;
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
