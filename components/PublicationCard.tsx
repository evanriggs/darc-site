'use client';

import { useMode } from './ModeProvider';

interface PublicationCardProps {
    title: string;
    description: string;
    date: string;
    url?: string;
}

export function PublicationCard({ title, description, date, url }: PublicationCardProps) {
    const { isDarcMode } = useMode();

    if (isDarcMode) {
        return (
            <div className="border-l-4 border-darc-red bg-darc-black bg-opacity-50 p-6 hover:bg-opacity-70 transition-all group">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-mono font-bold text-darc-red group-hover:text-darc-cyan transition-colors">
                        {url ? (
                            <a href={url} target="_blank" rel="noopener noreferrer" className="glitch-effect" data-text={title}>
                                {title}
                            </a>
                        ) : (
                            <span className="glitch-effect" data-text={title}>{title}</span>
                        )}
                    </h3>
                    <span className="text-xs font-mono text-darc-green border border-darc-green px-2 py-1 ml-4">
                        機密
                    </span>
                </div>
                <p className="text-darc-green font-mono text-sm mb-3">{description}</p>
                <p className="text-xs text-darc-cyan font-mono">{date}</p>
            </div>
        );
    }

    // Boring mode
    return (
        <div className="bg-white border border-boring-lightgray p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-boring-navy mb-2">{title}</h3>
            <p className="text-boring-gray text-sm mb-3">{description}</p>
            <p className="text-xs text-boring-gray">{date}</p>
        </div>
    );
}
