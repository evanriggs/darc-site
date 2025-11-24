import { PublicationCard } from '@/components/PublicationCard';
import { publications } from '@/data/publications';

export default function PublicationsPage() {
    return (
        <div className="darc-mode min-h-screen py-16">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="mb-12 border-l-4 border-darc-red pl-6">
                    <h1 className="text-5xl font-mono font-bold text-darc-red mb-4 chromatic" data-text="PUBLICATIONS">
                        PUBLICATIONS
                    </h1>
                    <p className="text-darc-green font-mono text-lg">
                        Articles, reports, and other material published by the Fellows of the Defense Analyses and Research Corporation.
                    </p>
                    <div className="flex gap-4 text-xs mt-4">
                        <span className="border border-darc-red text-darc-red px-3 py-1 font-mono">機密 CLASSIFIED</span>
                        <span className="border border-darc-cyan text-darc-cyan px-3 py-1 font-mono">TOTAL: {publications.length}</span>
                    </div>
                </div>

                {/* Featured/Recent */}
                <section className="mb-12">
                    <h2 className="text-2xl font-mono font-bold text-darc-cyan mb-6 border-b border-darc-cyan pb-2">
                        {'>> '} RECENT WORK
                    </h2>
                    <div className="grid grid-cols-1 gap-4">
                        {publications.slice(0, 6).map((pub, index) => (
                            <PublicationCard
                                key={index}
                                title={pub.title}
                                description={pub.description}
                                date={pub.date}
                                url={pub.url}
                            />
                        ))}
                    </div>
                </section>

                {/* Full Archive */}
                <section>
                    <h2 className="text-2xl font-mono font-bold text-darc-green mb-6 border-b border-darc-green pb-2">
                        {'>> '} ARCHIVE
                    </h2>
                    <div className="grid grid-cols-1 gap-4">
                        {publications.slice(6).map((pub, index) => (
                            <PublicationCard
                                key={index}
                                title={pub.title}
                                description={pub.description}
                                date={pub.date}
                                url={pub.url}
                            />
                        ))}
                    </div>
                </section>

                {/* Substack CTA */}
                <div className="mt-16 bg-darc-red bg-opacity-10 border-2 border-darc-red p-8 text-center">
                    <p className="text-darc-red font-bold text-xl mb-4 font-mono">
                        [MORE ON SUBSTACK]
                    </p>
                    <a
                        href="https://defenseanalyses.substack.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-darc-red text-black px-8 py-3 font-bold font-mono hover:bg-darc-cyan hover:text-black transition-all text-lg"
                    >
                        SUBSCRIBE &gt;&gt;
                    </a>
                </div>
            </div>
        </div>
    );
}
