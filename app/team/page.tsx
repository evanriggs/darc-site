'use client';

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
        name: 'Gilbert Trejo',
        title: 'Contributing Editor, Counter-Cartel Operations',
        bio: 'Low-key and ultra-reliable, Gilbert Trejo is the NR team\'s backbone for Latin American organized crime analysis. With years spent undercover with federal agencies, his grounded, detail-oriented intelligence work has busted numerous mythologies about the border. Avoids the limelight but is a trusted source for reporters facing tight deadlines.',
    },
    {
        name: 'Waingro',
        title: 'Freelance Reporter (Suspended)',
        bio: 'Waingro\'s string of sensational exposés was cut short after a pattern of reckless, unverified claims and ethical violations surfaced. Once touted as a rising star, his volatility and penchant for sensationalism led to his permanent exclusion from the NR editorial masthead.',
        status: 'suspended',
    },
];

export default function TeamPage() {
    return (
        <div className="min-h-screen bg-white py-16">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="mb-12 border-b-2 border-gray-200 pb-6">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Our Team
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Meet the analysts and contributors behind DARC
                    </p>
                </div>

                {/* Authors Section */}
                <section className="mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {authors.map((author, index) => (
                            <div
                                key={index}
                                className={`border rounded-lg p-6 transition-shadow bg-white ${
                                    author.status === 'suspended'
                                        ? 'border-red-300 bg-red-50 opacity-75'
                                        : 'border-gray-200 hover:border-darc-green hover:shadow-md'
                                }`}
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className={`text-xl font-bold ${
                                        author.status === 'suspended' 
                                            ? 'text-gray-400 line-through' 
                                            : 'text-gray-900'
                                    }`}>
                                        {author.name}
                                    </h3>
                                    {author.status === 'suspended' && (
                                        <span className="text-xs text-red-600 border border-red-300 px-2 py-1 rounded bg-red-50">
                                            Suspended
                                        </span>
                                    )}
                                </div>
                                <p className={`text-sm mb-3 font-semibold ${
                                    author.status === 'suspended' 
                                        ? 'text-red-700 opacity-70' 
                                        : 'text-gray-800'
                                }`}>
                                    {author.title}
                                </p>
                                <p className={`text-sm leading-relaxed ${
                                    author.status === 'suspended' 
                                        ? 'text-gray-500' 
                                        : 'text-gray-700'
                                }`}>
                                    {author.bio}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
