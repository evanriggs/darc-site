import { fakePublications } from '@/data/fake-publications';

export default function HomePage() {
    return (
        <div className="boring-mode min-h-screen">
            {/* 
        ███╗   ██╗███████╗██████╗ ██╗   ██╗
        ████╗  ██║██╔════╝██╔══██╗██║   ██║
        ██╔██╗ ██║█████╗  ██████╔╝██║   ██║
        ██║╚██╗██║██╔══╝  ██╔══██╗╚██╗ ██╔╝
        ██║ ╚████║███████╗██║  ██║ ╚████╔╝ 
        ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝  ╚═══╝  
        ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═══╝  ╚═══╝  
      -->
      
      {/* Hidden normie curtain for Easter egg */}
            <div id="normie-curtain"></div>

            {/* Hero Image - Easter egg: alt text says "cope" and filename is dc_conference_aux.jpg */}
            <section className="relative h-48 md:h-56 lg:h-64 bg-boring-lightgray overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(/images/dc_conference_aux.jpg)',
                        backgroundPosition: 'center 42%'
                    }}
                    role="img"
                    aria-label="cope"
                />
            </section>

            {/* Featured Content Section */}
            <section className="py-12 bg-white border-b border-boring-lightgray">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Main Featured */}
                        <div className="md:col-span-2">
                            <div className="mb-4">
                                <span className="text-xs font-semibold text-boring-navy uppercase tracking-wide">
                                    Featured Analysis
                                </span>
                            </div>
                            <h2 className="text-3xl font-bold text-boring-navy mb-4">
                                {fakePublications[1].title}
                            </h2>
                            <p className="text-boring-gray leading-relaxed mb-4">
                                {fakePublications[1].description} This comprehensive analysis examines
                                the institutional frameworks necessary for effective policy implementation
                                in contemporary security environments.
                            </p>
                            <div className="text-sm text-boring-gray">
                                <span className="font-semibold">Policy Brief</span> • {fakePublications[1].date}
                            </div>
                        </div>

                        {/* Side Featured */}
                        <div className="space-y-6">
                            <div>
                                <span className="text-xs font-semibold text-boring-navy uppercase tracking-wide block mb-3">
                                    Recent Commentary
                                </span>
                                <h3 className="text-lg font-semibold text-boring-navy mb-2">
                                    {fakePublications[2].title}
                                </h3>
                                <p className="text-sm text-boring-gray mb-2">
                                    {fakePublications[2].description}
                                </p>
                                <div className="text-xs text-boring-gray">{fakePublications[2].date}</div>
                            </div>

                            <div className="border-t border-boring-lightgray pt-6">
                                <h3 className="text-lg font-semibold text-boring-navy mb-2">
                                    {fakePublications[3].title}
                                </h3>
                                <p className="text-sm text-boring-gray mb-2">
                                    {fakePublications[3].description}
                                </p>
                                <div className="text-xs text-boring-gray">{fakePublications[3].date}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topic Areas */}
            <section className="py-12 bg-boring-lightgray">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-2xl font-bold text-boring-navy mb-8">Research Topics</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            'Defense Policy',
                            'Strategic Deterrence',
                            'Alliance Management',
                            'Defense Innovation',
                            'Regional Security',
                            'Emerging Technologies',
                            'Force Structure',
                            'Acquisition Reform'
                        ].map((topic, index) => (
                            <div key={index} className="bg-white p-4 border border-boring-gray hover:border-boring-navy transition-colors">
                                <h3 className="font-semibold text-boring-navy text-sm">{topic}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Publications Grid */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold text-boring-navy">Recent Publications</h2>
                        <a href="#" className="text-sm text-boring-navy hover:underline">View All →</a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {fakePublications.slice(0, 3).map((pub, index) => (
                            <div key={index} className="border border-boring-lightgray p-6 hover:shadow-md transition-shadow bg-white">
                                <div className="text-xs text-boring-gray uppercase tracking-wide mb-2">
                                    Policy Paper
                                </div>
                                <h3 className="text-lg font-semibold text-boring-navy mb-3 leading-tight">
                                    {pub.title}
                                </h3>
                                <p className="text-sm text-boring-gray mb-4">{pub.description}</p>
                                <div className="text-xs text-boring-gray">{pub.date}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-12 bg-boring-lightgray border-t border-boring-gray">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-xl font-bold text-boring-navy mb-6">
                            About the Defense Analyses and Research Corporation
                        </h2>
                        <p className="text-boring-gray leading-relaxed mb-4">
                            The Defense Analyses and Research Corporation is committed to advancing
                            thoughtful, evidence-based policy recommendations that strengthen American
                            national security and promote stability in key regions around the world.
                        </p>
                        <p className="text-boring-gray leading-relaxed">
                            Through collaborative research and sustained engagement with policymakers,
                            military leaders, and academic institutions, the Defense Analyses and Research
                            Corporation seeks to bridge the gap between theoretical frameworks and
                            practical implementation in defense strategy.
                        </p>
                    </div>
                </div>
            </section>

            {/* Additional Publications */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-xl font-bold text-boring-navy mb-6">Latest Analysis</h2>
                    <div className="space-y-4">
                        {fakePublications.slice(3, 6).map((pub, index) => (
                            <div key={index} className="border-l-4 border-boring-navy pl-4 py-2">
                                <h3 className="font-semibold text-boring-navy mb-1">{pub.title}</h3>
                                <p className="text-sm text-boring-gray">{pub.description}</p>
                                <div className="text-xs text-boring-gray mt-2">{pub.date} • Policy Brief</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="py-12 bg-boring-navy text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-4">Stay Informed</h2>
                        <p className="mb-6">
                            Subscribe to receive updates on our latest research and analysis.
                        </p>
                        <form className="flex gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 rounded text-boring-navy focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <button
                                type="submit"
                                className="bg-white text-boring-navy px-6 py-2 rounded font-semibold hover:bg-boring-lightgray transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
