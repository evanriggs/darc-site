'use client';

import { useMode } from '@/components/ModeProvider';

interface Author {
    name: string;
    title: string;
    bio: string;
    status?: 'suspended' | 'active';
}

const authors: Author[] = [
    {
        name: 'Neil McCauley',
        title: 'Senior Fellow, Strategic Deterrence & Irregular Warfare',
        bio: 'A reserved, highly disciplined analyst, McCauley brings decades of experience in strategic risk assessment and counterterrorism. Known for his "no ties, no distractions" ethos, he is regarded for his measured, quietly rigorous policy briefs and deep dives into the psychology of transnational actors. He previously served as an independent contractor on covert assignments for unnamed federal entities.',
    },
    {
        name: 'Vincent Hanna',
        title: 'Opinion Columnist and Law Enforcement Contributor (Ret. Lt. Col.)',
        bio: 'A tempestuous but brilliant commentator, Hanna is a veteran of the LAPD\'s Major Robbery Task Force and a vocal advocate of urban security reform. He writes with relentless energy on America\'s policing challenges and the overlap of criminal and extremist networks. His essays blend passion and insight, and he\'s infamous in editorial meetings for his dramatic outbursts and unwavering pursuit of "hard truths."',
    },
    {
        name: 'Chris Shiherlis',
        title: 'Defense Technology & Acquisition Staff Writer',
        bio: 'Shiherlis specializes in the intersection of defense procurement and personal resilience. Once a military logistics officer who managed high-value contracts in volatile regions, Chris now investigates how human factors influence tech adoption in defense. Open about his past struggles and triumphs, he\'s known for his authenticity and fiercely loyal mentorship of younger correspondents.',
    },
    {
        name: 'Michael Cheritto',
        title: 'Columnist, Domestic Security & Civil Preparedness',
        bio: 'Cheritto brings a blue-collar pragmatism to his writing, covering infrastructure protection and law enforcement training for homeland defense. A former National Guard sergeant, he is renowned for relatable stories and his advocacy for small-town emergency response reforms—though he\'s also been rumored to take risks to break a story.',
    },
    {
        name: 'Trejo',
        title: 'Contributing Editor, Counter-Cartel Operations',
        bio: 'Low-key and ultra-reliable, Trejo is the NR team\'s backbone for Latin American organized crime analysis. With years spent undercover with federal agencies, his grounded, detail-oriented intelligence work has busted numerous mythologies about the border. Avoids the limelight but is a trusted source for reporters facing tight deadlines.',
    },
    {
        name: 'Waingro',
        title: 'Freelance Reporter (Suspended)',
        bio: 'Waingro\'s string of sensational exposés was cut short after a pattern of reckless, unverified claims and ethical violations surfaced. Once touted as a rising star, his volatility and penchant for sensationalism led to his permanent exclusion from the NR editorial masthead.',
        status: 'suspended',
    },
];

export default function AboutPage() {
    const { isDarcMode } = useMode();

    if (isDarcMode) {
        return (
            <div className="darc-mode min-h-screen py-16">
                <div className="container mx-auto px-4 max-w-6xl">
                    {/* Header */}
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

                    {/* Intro Section */}
                    <section className="bg-darc-black bg-opacity-50 border border-darc-red p-8 mb-12">
                        <h2 className="text-2xl text-darc-red mb-4 font-bold font-mono">
                            {'>> '} A NEW KIND OF DEFENSE THINK TANK
                        </h2>
                        <p className="text-darc-green leading-relaxed mb-4 font-mono">
                            The Defense Analyses and Research Corporation (DARC) is a new kind of defense think tank.
                        </p>
                        <p className="text-darc-green leading-relaxed mb-4 font-mono">
                            We are founded on the proposition that the present era requires bold defense thinking
                            that acknowledges hard truths and genuinely confronts the urgency of this moment.
                        </p>
                        <p className="text-darc-green leading-relaxed font-mono">
                            The future demands fresh and strange ideas, ones that offer answers to the deepest
                            questions that the sclerotic machinery of defense intellectualism is no longer able
                            to provide.
                        </p>
                    </section>

                    {/* Authors Section */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-mono font-bold text-darc-cyan mb-8 border-l-4 border-darc-cyan pl-6">
                            {'>> '} OUR TEAM
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {authors.map((author, index) => (
                                <div
                                    key={index}
                                    className={`border p-6 font-mono transition-all ${
                                        author.status === 'suspended'
                                            ? 'border-darc-red bg-darc-black bg-opacity-30 opacity-60'
                                            : 'border-darc-green bg-darc-black bg-opacity-50 hover:border-darc-cyan'
                                    }`}
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className={`text-xl font-bold ${
                                            author.status === 'suspended' ? 'text-darc-red line-through' : 'text-darc-red'
                                        }`}>
                                            {author.name}
                                        </h3>
                                        {author.status === 'suspended' && (
                                            <span className="text-xs text-darc-red border border-darc-red px-2 py-1">
                                                SUSPENDED
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-darc-cyan text-sm mb-3 font-semibold">
                                        {author.title}
                                    </p>
                                    <p className={`text-sm leading-relaxed ${
                                        author.status === 'suspended' ? 'text-darc-red opacity-50' : 'text-darc-green'
                                    }`}>
                                        {author.bio}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Locations */}
                    <section className="bg-darc-black bg-opacity-50 border border-darc-green p-8 mb-12">
                        <h2 className="text-2xl text-darc-green mb-4 font-bold font-mono">
                            {'>> '} LOCATIONS
                        </h2>
                        <div className="space-y-2 text-darc-cyan font-mono">
                            <p>HEADQUARTERS: Arlington, VA</p>
                            <p>WEST COAST: El Segundo, CA</p>
                            <p>INTERNATIONAL: London, UK</p>
                        </div>
                    </section>

                    {/* Follow Section */}
                    <section className="border-l-4 border-darc-red pl-6 mb-12">
                        <h2 className="text-2xl text-darc-red mb-4 font-bold font-mono">
                            {'>> '} FOLLOW OUR WORK
                        </h2>
                        <div className="space-y-3 font-mono">
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
        );
    }

    // Boring mode
    return (
        <div className="boring-mode min-h-screen py-16">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="mb-12 border-b-2 border-boring-navy pb-6">
                    <h1 className="text-4xl font-bold text-boring-navy mb-4">
                        About the Defense Analyses and Research Corporation
                    </h1>
                    <p className="text-boring-gray text-lg">
                        Rigorous, non-partisan analysis of defense and foreign policy challenges
                    </p>
                </div>

                {/* Intro Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-boring-navy mb-6">
                        A New Kind of Defense Think Tank
                    </h2>
                    <div className="space-y-4 text-boring-gray leading-relaxed">
                        <p>
                            The Defense Analyses and Research Corporation (DARC) is a new kind of defense think tank.
                            We are founded on the proposition that the present era requires bold defense thinking
                            that acknowledges hard truths and genuinely confronts the urgency of this moment.
                        </p>
                        <p>
                            The future demands fresh and strange ideas, ones that offer answers to the deepest
                            questions that the sclerotic machinery of defense intellectualism is no longer able
                            to provide.
                        </p>
                    </div>
                </section>

                {/* Authors Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-boring-navy mb-8">Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {authors.map((author, index) => (
                            <div
                                key={index}
                                className={`border rounded-lg p-6 transition-shadow ${
                                    author.status === 'suspended'
                                        ? 'border-red-300 bg-gray-50 opacity-75'
                                        : 'border-boring-lightgray hover:shadow-md'
                                }`}
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className={`text-xl font-bold text-boring-navy ${
                                        author.status === 'suspended' ? 'line-through text-gray-400' : ''
                                    }`}>
                                        {author.name}
                                    </h3>
                                    {author.status === 'suspended' && (
                                        <span className="text-xs text-red-600 border border-red-300 px-2 py-1 rounded bg-red-50">
                                            Suspended
                                        </span>
                                    )}
                                </div>
                                <p className="text-boring-navy font-semibold text-sm mb-3">
                                    {author.title}
                                </p>
                                <p className={`text-sm leading-relaxed ${
                                    author.status === 'suspended' ? 'text-gray-500' : 'text-boring-gray'
                                }`}>
                                    {author.bio}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Locations */}
                <section className="bg-boring-lightgray rounded-lg p-8 mb-12">
                    <h2 className="text-2xl font-bold text-boring-navy mb-6">Locations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-boring-gray">
                        <div>
                            <p className="font-semibold text-boring-navy mb-1">Headquarters</p>
                            <p>Arlington, VA</p>
                        </div>
                        <div>
                            <p className="font-semibold text-boring-navy mb-1">West Coast</p>
                            <p>El Segundo, CA</p>
                        </div>
                        <div>
                            <p className="font-semibold text-boring-navy mb-1">International</p>
                            <p>London, UK</p>
                        </div>
                    </div>
                </section>

                {/* Follow Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-boring-navy mb-6">Follow Our Work</h2>
                    <div className="space-y-3">
                        <p>
                            <a
                                href="https://x.com/DefenseAnalyses"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-boring-navy hover:underline font-semibold"
                            >
                                @DefenseAnalyses
                            </a>
                            <span className="text-boring-gray ml-2">on Twitter/X</span>
                        </p>
                        <p>
                            <a
                                href="https://defenseanalyses.substack.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-boring-navy hover:underline font-semibold"
                            >
                                defenseanalyses.substack.com
                            </a>
                            <span className="text-boring-gray ml-2">Newsletter</span>
                        </p>
                        <p>
                            <a
                                href="https://defenseanalyses.org/publications/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-boring-navy hover:underline font-semibold"
                            >
                                Browse Publications
                            </a>
                            <span className="text-boring-gray ml-2">Full Archive</span>
                        </p>
                    </div>
                </section>

                {/* Substack CTA */}
                <div className="bg-boring-navy text-white rounded-lg p-8 text-center">
                    <p className="text-xl font-bold mb-4">Subscribe for Updates</p>
                    <a
                        href="https://defenseanalyses.substack.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-boring-navy px-8 py-3 font-semibold rounded hover:bg-boring-lightgray transition-colors"
                    >
                        Read More on Substack →
                    </a>
                </div>
            </div>
        </div>
    );
}
