export default function ContactPage() {
    return (
        <div className="darc-mode min-h-screen py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="mb-12 border-l-4 border-darc-red pl-6">
                    <h1 className="text-5xl font-mono font-bold text-darc-red mb-4 chromatic" data-text="CONTACT">
                        CONTACT
                    </h1>
                    <div className="flex gap-4 text-xs">
                        <span className="border border-darc-cyan text-darc-cyan px-3 py-1 font-mono">SECURE CHANNEL</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <section className="bg-darc-black bg-opacity-50 border border-darc-red p-6">
                            <h2 className="text-xl text-darc-red mb-4 font-bold">
                                {'>> '} PRIMARY CHANNELS
                            </h2>
                            <div className="space-y-3 text-darc-green">
                                <div>
                                    <p className="text-darc-cyan text-sm mb-1">EMAIL</p>
                                    <a
                                        href="mailto:contact@defenseanalyses.org"
                                        className="text-darc-green hover:text-darc-red"
                                    >
                                        contact@defenseanalyses.org
                                    </a>
                                </div>
                                <div>
                                    <p className="text-darc-cyan text-sm mb-1">TWITTER/X</p>
                                    <a
                                        href="https://x.com/DefenseAnalyses"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-darc-green hover:text-darc-red"
                                    >
                                        @DefenseAnalyses
                                    </a>
                                </div>
                                <div>
                                    <p className="text-darc-cyan text-sm mb-1">SUBSTACK</p>
                                    <a
                                        href="https://defenseanalyses.substack.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-darc-green hover:text-darc-red"
                                    >
                                        defenseanalyses.substack.com
                                    </a>
                                </div>
                            </div>
                        </section>

                        <section className="bg-darc-black bg-opacity-50 border border-darc-cyan p-6">
                            <h2 className="text-xl text-darc-cyan mb-4 font-bold">
                                {'>> '} LOCATIONS
                            </h2>
                            <div className="space-y-3 text-darc-green text-sm">
                                <div>
                                    <p className="text-darc-cyan mb-1">HEADQUARTERS</p>
                                    <p>Arlington, Virginia</p>
                                    <p className="text-xs opacity-70">Greater Washington DC Area</p>
                                </div>
                                <div>
                                    <p className="text-darc-cyan mb-1">WEST COAST</p>
                                    <p>El Segundo, California</p>
                                    <p className="text-xs opacity-70">Defense Innovation Hub</p>
                                </div>
                                <div>
                                    <p className="text-darc-cyan mb-1">INTERNATIONAL</p>
                                    <p>London, United Kingdom</p>
                                    <p className="text-xs opacity-70">European Operations</p>
                                </div>
                            </div>
                        </section>

                        <section className="bg-darc-black bg-opacity-50 border border-darc-green p-6">
                            <h2 className="text-xl text-darc-green mb-4 font-bold">
                                {'>> '} INQUIRIES
                            </h2>
                            <div className="text-darc-green text-sm space-y-2">
                                <p>→ Media & Press Inquiries</p>
                                <p>→ Research Collaboration</p>
                                <p>→ Senior Fellow Applications</p>
                                <p>→ Speaking Engagements</p>
                                <p>→ General Correspondence</p>
                            </div>
                        </section>
                    </div>

                    {/* Right column */}
                    <div className="space-y-8">
                        <section className="border-2 border-darc-red bg-darc-red bg-opacity-5 p-8">
                            <h2 className="text-2xl text-darc-red mb-6 font-bold">
                                [BECOME A FELLOW]
                            </h2>
                            <p className="text-darc-green leading-relaxed mb-4 text-sm">
                                DARC seeks defense intellectuals willing to publish candid, pseudonymous
                                analysis that challenges establishment orthodoxy.
                            </p>
                            <p className="text-darc-green leading-relaxed mb-6 text-sm">
                                If you're straightjacketed by risk-averse institutions and have ideas
                                that need to be heard, reach out via DM or email.
                            </p>
                            <a
                                href="/team"
                                className="inline-block bg-darc-red text-black px-6 py-2 font-bold hover:bg-darc-cyan transition-all"
                            >
                                LEARN MORE &gt;&gt;
                            </a>
                        </section>

                        <section className="border-2 border-darc-cyan bg-darc-cyan bg-opacity-5 p-8">
                            <h2 className="text-2xl text-darc-cyan mb-6 font-bold">
                                [SUBSCRIBE]
                            </h2>
                            <p className="text-darc-green leading-relaxed mb-6 text-sm">
                                Stay updated with our latest research, analysis, and commentary on
                                defense strategy and national security.
                            </p>
                            <a
                                href="https://defenseanalyses.substack.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-darc-cyan text-black px-6 py-2 font-bold hover:bg-darc-red transition-all"
                            >
                                SUBSTACK &gt;&gt;
                            </a>
                        </section>

                        {/* Warning */}
                        <div className="border border-darc-red p-4 bg-darc-black">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-darc-red">⚠️</span>
                                <p className="text-darc-red text-xs font-bold">NOTICE</p>
                            </div>
                            <p className="text-darc-green text-xs">
                                All communications are treated with appropriate operational security.
                                Fellow applications are reviewed internally. Response time: 3-7 days.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
