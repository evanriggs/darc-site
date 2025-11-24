'use client';

import { useMode } from './ModeProvider';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { CRTOverlay } from './CRTOverlay';

export function BodyWrapper({ children }: { children: React.ReactNode }) {
    const { isDarcMode } = useMode();

    return (
        <div className={isDarcMode ? 'darc-mode' : 'boring-mode'}>
            <Navigation />
            <CRTOverlay />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
