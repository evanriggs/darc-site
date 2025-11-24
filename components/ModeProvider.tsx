'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface ModeContextType {
    isDarcMode: boolean;
    unlockDarcMode: () => void;
    toggleDarcMode: () => void;
}

const ModeContext = createContext<ModeContextType>({
    isDarcMode: false,
    unlockDarcMode: () => { },
    toggleDarcMode: () => { },
});

export const useMode = () => useContext(ModeContext);

export function ModeProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [permanentUnlock, setPermanentUnlock] = useState(false);
    const [forceMode, setForceMode] = useState<'darc' | 'normal' | null>(null);

    useEffect(() => {
        // Check localStorage for permanent unlock
        const unlocked = localStorage.getItem('darc_unlocked') === 'true';
        setPermanentUnlock(unlocked);
        
        // Check localStorage for forced mode preference
        const savedMode = localStorage.getItem('darc_mode_preference');
        if (savedMode === 'darc' || savedMode === 'normal') {
            setForceMode(savedMode);
        }
    }, []);

    const unlockDarcMode = () => {
        localStorage.setItem('darc_unlocked', 'true');
        setPermanentUnlock(true);
    };

    const toggleDarcMode = () => {
        const currentMode = forceMode || (pathname !== '/' || permanentUnlock ? 'darc' : 'normal');
        const newMode = currentMode === 'darc' ? 'normal' : 'darc';
        setForceMode(newMode);
        localStorage.setItem('darc_mode_preference', newMode);
    };

    // DARC mode is active if:
    // 1. Force mode is set to 'darc', OR
    // 2. Force mode is not set and (not on homepage OR permanently unlocked)
    const isDarcMode = forceMode === 'darc' || (forceMode === null && (pathname !== '/' || permanentUnlock));

    return (
        <ModeContext.Provider value={{ isDarcMode, unlockDarcMode, toggleDarcMode }}>
            {children}
        </ModeContext.Provider>
    );
}
