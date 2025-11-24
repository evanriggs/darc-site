'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface ModeContextType {
    isDarcMode: boolean;
    unlockDarcMode: () => void;
}

const ModeContext = createContext<ModeContextType>({
    isDarcMode: false,
    unlockDarcMode: () => { },
});

export const useMode = () => useContext(ModeContext);

export function ModeProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [permanentUnlock, setPermanentUnlock] = useState(false);

    useEffect(() => {
        // Check localStorage for permanent unlock
        const unlocked = localStorage.getItem('darc_unlocked') === 'true';
        setPermanentUnlock(unlocked);
    }, []);

    const unlockDarcMode = () => {
        localStorage.setItem('darc_unlocked', 'true');
        setPermanentUnlock(true);
    };

    // DARC mode is active if:
    // 1. Not on homepage, OR
    // 2. Permanently unlocked via Easter egg
    const isDarcMode = pathname !== '/' || permanentUnlock;

    return (
        <ModeContext.Provider value={{ isDarcMode, unlockDarcMode }}>
            {children}
        </ModeContext.Provider>
    );
}
