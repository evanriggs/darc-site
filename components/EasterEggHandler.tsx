'use client';

import { useEffect } from 'react';
import { useMode } from './ModeProvider';
import { useRouter } from 'next/navigation';

const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

export function EasterEggHandler() {
    const { unlockDarcMode } = useMode();
    const router = useRouter();

    useEffect(() => {
        let darcBuffer = '';
        let konamiBuffer: string[] = [];

        const handleKeyDown = (e: KeyboardEvent) => {
            // DARC typing detection
            darcBuffer += e.key.toLowerCase();
            if (darcBuffer.length > 4) {
                darcBuffer = darcBuffer.slice(-4);
            }
            if (darcBuffer === 'darc') {
                unlockDarcMode();
                router.push('/about');
                darcBuffer = '';
            }

            // Konami code detection
            konamiBuffer.push(e.key);
            if (konamiBuffer.length > KONAMI_CODE.length) {
                konamiBuffer.shift();
            }
            if (konamiBuffer.join(',') === KONAMI_CODE.join(',')) {
                unlockDarcMode();
                router.push('/about');
                konamiBuffer = [];
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [unlockDarcMode, router]);

    return null;
}
