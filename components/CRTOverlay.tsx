'use client';

import { useMode } from './ModeProvider';
import { useEffect, useState } from 'react';

export function CRTOverlay() {
    const { isDarcMode } = useMode();
    const [particles, setParticles] = useState<{ id: number; text: string; x: number; y: number }[]>([]);

    useEffect(() => {
        if (!isDarcMode) return;

        const texts = ['警告', '危険', 'CLASSIFIED', '機密'];
        let id = 0;

        const interval = setInterval(() => {
            const newParticle = {
                id: id++,
                text: texts[Math.floor(Math.random() * texts.length)],
                x: Math.random() * 100,
                y: -10,
            };

            setParticles(prev => [...prev.slice(-5), newParticle]);
        }, 3000);

        return () => clearInterval(interval);
    }, [isDarcMode]);

    if (!isDarcMode) return null;

    return (
        <>
            {/* Floating particles */}
            {particles.map(particle => (
                <div
                    key={particle.id}
                    className="fixed pointer-events-none text-darc-red opacity-20 font-mono text-xs z-50"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        animation: 'scanline 15s linear forwards',
                    }}
                >
                    {particle.text}
                </div>
            ))}
        </>
    );
}
