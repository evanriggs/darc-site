'use client';

import Link from 'next/link';
import { useMode } from './ModeProvider';
import { usePathname } from 'next/navigation';

export function Navigation() {
    const { isDarcMode } = useMode();
    const pathname = usePathname();

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: 'https://defenseanalyses.substack.com/about', label: 'About', external: true },
        { href: 'https://defenseanalyses.substack.com/archive', label: 'Research', external: true },
        { href: '/team', label: 'Team' },
        { href: 'https://x.com/DefenseAnalyses', label: 'Contact', external: true },
    ];

    if (isDarcMode) {
        return (
            <nav className="border-b-2 border-darc-red bg-darc-black py-4 relative">
                {/* Warning stripe */}
                <div className="absolute top-0 left-0 w-full h-1 warning-stripe opacity-50"></div>

                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="text-2xl font-bold font-mono tracking-wider">
                            <span className="text-darc-red glitch-effect" data-text="D A R C">D A R C</span>
                        </Link>

                        <div className="flex gap-6 items-center">
                            {navLinks.map((link) => {
                                if (link.external) {
                                    return (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`font-mono uppercase text-sm tracking-wider transition-all
                            ${pathname === link.href ? 'text-darc-red' : 'text-darc-green hover:text-darc-cyan'}
                          `}
                                        >
                                            {link.label}
                                        </a>
                                    );
                                }
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`font-mono uppercase text-sm tracking-wider transition-all
                        ${pathname === link.href ? 'text-darc-red' : 'text-darc-green hover:text-darc-cyan'}
                      `}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                            <a
                                href="https://defenseanalyses.substack.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono uppercase text-lg font-bold text-darc-red border-2 border-darc-red px-4 py-2 hover:bg-darc-red hover:text-black transition-all"
                            >
                                <span className="glitch-effect" data-text="SUBSTACK">SUBSTACK</span>
                            </a>
                            <div className="text-xs text-darc-red border border-darc-red px-2 py-1 font-mono">
                                機密
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

    // Boring mode
    return (
        <nav className="bg-boring-navy text-white py-4 shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-lg font-semibold text-white hover:opacity-90">
                        Defense Analyses and Research Corporation
                    </Link>

                    <div className="flex gap-8">
                        {navLinks.map((link) => {
                            if (link.external) {
                                return (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`text-white hover:text-boring-lightgray transition-colors text-sm
                          ${pathname === link.href ? 'border-b-2 border-white' : ''}
                        `}
                                    >
                                        {link.label}
                                    </a>
                                );
                            }
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-white hover:text-boring-lightgray transition-colors text-sm
                      ${pathname === link.href ? 'border-b-2 border-white' : ''}
                    `}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
}
