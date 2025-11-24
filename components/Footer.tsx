'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useMode } from './ModeProvider';
import { usePathname } from 'next/navigation';

export function Footer() {
    const { isDarcMode } = useMode();
    const pathname = usePathname();
    const [periodClickCount, setPeriodClickCount] = useState(0);
    const [showCartel, setShowCartel] = useState(false);

    const handlePeriodClick = () => {
        const newCount = periodClickCount + 1;
        setPeriodClickCount(newCount);

        if (newCount === 5) {
            window.location.href = '/about';
        }
    };

    const handleCorpHover = () => {
        setShowCartel(true);
        setTimeout(() => setShowCartel(false), 300);
    };

    if (isDarcMode) {
        return (
            <footer className="border-t-2 border-darc-red bg-darc-black py-8 mt-16">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <div className="font-mono text-sm text-darc-green">
                            <p>Defense Analyses and Research Corporation</p>
                            <p className="text-darc-cyan mt-1">Arlington, VA • El Segundo, CA • London, UK</p>
                        </div>

                        <div className="text-right font-mono">
                            <p className="text-darc-red text-sm mb-2">
                                © 2025 DARC. Established 2038
                            </p>
                            {pathname !== '/' && (
                                <Link
                                    href="/"
                                    className="text-xs text-darc-cyan hover:text-darc-red border border-darc-cyan hover:border-darc-red px-3 py-1 inline-block transition-all"
                                >
                                    [Return to cope]
                                </Link>
                            )}
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <a
                            href="https://x.com/DefenseAnalyses"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-darc-cyan hover:text-darc-red font-mono text-sm"
                        >
                            @DefenseAnalyses
                        </a>
                        <span className="text-darc-green mx-3">|</span>
                        <a
                            href="mailto:contact@defenseanalyses.org"
                            className="text-darc-cyan hover:text-darc-red font-mono text-sm"
                        >
                            contact@defenseanalyses.org
                        </a>
                    </div>
                </div>
            </footer>
        );
    }

    // Boring mode
    return (
        <footer className="bg-boring-lightgray py-8 mt-16 border-t border-boring-gray">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center text-sm text-boring-gray">
                    <div>
                        <p className="font-semibold text-boring-navy">
                            Defense Analyses and Research{' '}
                            <span
                                onMouseEnter={handleCorpHover}
                                className="cursor-default"
                            >
                                {showCartel ? 'Cartel' : 'Corporation'}
                            </span>
                            , Inc<span onClick={handlePeriodClick} className="cursor-default">.</span>
                        </p>
                        <p className="mt-1">Arlington, Virginia • El Segundo, California</p>
                    </div>

                    <div className="text-right">
                        <p>© 2025 DARC. Established 2038</p>
                        <p className="mt-1">All rights reserved</p>
                    </div>
                </div>

                <div className="mt-6 text-center text-sm">
                    <a href="mailto:contact@defenseanalyses.org" className="text-boring-navy hover:underline">
                        contact@defenseanalyses.org
                    </a>
                    <span className="mx-3 text-boring-gray">|</span>
                    <Link href="/about" className="text-boring-navy hover:underline">
                        Privacy Policy
                    </Link>
                    <span className="mx-3 text-boring-gray">|</span>
                    <Link href="/contact" className="text-boring-navy hover:underline">
                        Contact Us
                    </Link>
                </div>
            </div>
        </footer>
    );
}
