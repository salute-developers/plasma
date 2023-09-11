'use client';

import React from 'react';
import { useEffect } from "react"

interface PlasmaTokensProps {
    activeTheme: string;
}

// TODO: import css tokens here
export const PlasmaTokens: React.FC<PlasmaTokensProps> = ({ activeTheme }) => {
    
    useEffect(() => {
        const data = document.documentElement.dataset;
        data['plasmaTheme'] = activeTheme;
    }, [activeTheme]);

    return null;
}