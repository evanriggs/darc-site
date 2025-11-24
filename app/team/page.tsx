export default function TeamPage() {
    return (
        <div className="darc-mode min-h-screen py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="mb-12 border-l-4 border-darc-red pl-6">
                    <h1 className="text-5xl font-mono font-bold text-darc-red mb-4 chromatic" data-text="FELLOWS">
                        FELLOWS
                    </h1>
                    <div className="flex gap-4 text-xs">
                        <span className="border border-darc-red text-darc-red px-3 py-1 font-mono">機密</span>
                        <span className="border border-darc-cyan text-darc-cyan px-3 py-1 font-mono">ANONYMOUS</span>
                    </div>
                </div>

                <div className="space-y-8 font-mono">
                    <section className="bg-darc-black bg-opacity-50 border border-darc-red p-8">
                        <h2 className="text-2xl text-darc-red mb-4 font-bold">
                            {'>> '} FOR THE STRAIGHTJACKETED
                        </h2>
                        <p className="text-darc-green leading-relaxed mb-4">
                            DARC is for the many current and former thinktankers who are straightjacketed
                            by the stifling bureaucracy and deep risk aversion endemic among the defense
                            and foreign policy incumbents, from RAND and CSIS to CFR and Brookings.
                        </p>
                        <p className="text-darc-green leading-relaxed mb-4">
                            We feel that this state of affairs is an unforced error of gigantic proportions.
                        </p>
                        <p className="text-darc-green leading-relaxed">
                            In this critical time, the United States must ensure that the dynamism of its
                            strategic thinking keeps up with the pace of global change. We must foster a
                            new generation of defense intellectuals that follow in the best traditions of
                            Andy Marshall, Herman Kahn, and Edward Luttwak.
                        </p>
                    </section>

                    <section className="border-l-4 border-darc-cyan pl-6">
                        <h2 className="text-2xl text-darc-cyan mb-4 font-bold">
                            {'>> '} THE OLD GUARD
                        </h2>
                        <p className="text-darc-red leading-relaxed mb-4 font-bold">
                            Instead, a sclerotic establishment continues to pile on its limp, dithering
                            statecraft in the pages of rags like Foreign Affairs: saying nothing, proposing
                            nothing, and committing to nothing.
                        </p>
                        <p className="text-darc-green leading-relaxed">
                            DARC seeks to create a coalition of those unwilling to wait for the retirement
                            party and hearse to bring about change. We believe there would be much progress
                            in defense thinking if analysts simply did not fear the career impact of saying
                            what needed to be said.
                        </p>
                    </section>

                    <section className="bg-darc-black bg-opacity-50 border border-darc-green p-8">
                        <h2 className="text-2xl text-darc-green mb-4 font-bold">
                            {'>> '} PSEUDONYMOUS PUBLICATION
                        </h2>
                        <p className="text-darc-green leading-relaxed mb-4">
                            To that end, DARC has since its inception published an ongoing series of articles
                            and working papers authored by its Senior Fellows. These papers are published
                            largely pseudonymously, allowing for a candid expression of real views.
                        </p>
                        <p className="text-darc-cyan leading-relaxed mb-4">
                            In the past, we have covered matters as varying as:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-darc-green ml-4">
                            <li>The need to revive letters of marque as a solution to modern security issues</li>
                            <li>The bull case for US action to territorialize Cuba</li>
                            <li>A proposal to cripple China's AI progress through mass data poisoning</li>
                            <li>The latent opportunities in weaponizing US control over global energy supply</li>
                            <li>Shitposting as an active measure and national asset</li>
                            <li>The GIGACHAD approach to critical minerals governance</li>
                        </ul>
                    </section>

                    <section className="border-l-4 border-darc-red pl-6">
                        <h2 className="text-2xl text-darc-red mb-4 font-bold">
                            {'>> '} BECOME A FELLOW
                        </h2>
                        <p className="text-darc-green leading-relaxed mb-4">
                            If you would like to publish work through this program and become a DARC Senior
                            Fellow, please reach out:
                        </p>
                        <div className="space-y-3 text-darc-cyan">
                            <p>
                                <span className="text-darc-green">DM: </span>
                                <a
                                    href="https://x.com/DefenseAnalyses"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-darc-red"
                                >
                                    @DefenseAnalyses
                                </a>
                            </p>
                            <p>
                                <span className="text-darc-green">EMAIL: </span>
                                <a
                                    href="mailto:contact@defenseanalyses.org"
                                    className="hover:text-darc-red"
                                >
                                    contact@defenseanalyses.org
                                </a>
                            </p>
                        </div>
                    </section>

                    {/* Warning Box */}
                    <div className="mt-12 border-2 border-darc-red p-6 bg-darc-red bg-opacity-5">
                        <div className="flex items-center gap-4 mb-3">
                            <span className="text-3xl">⚠️</span>
                            <h3 className="text-xl font-bold text-darc-red">WARNING</h3>
                        </div>
                        <p className="text-darc-green">
                            All Fellows operate under pseudonyms to protect their careers and enable
                            candid analysis. Identity verification is handled internally. Anonymity
                            is guaranteed.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
