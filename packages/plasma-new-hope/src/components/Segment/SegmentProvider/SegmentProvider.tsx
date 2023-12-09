import React, { createContext, useContext, useEffect, useState } from 'react';
import type { FC } from 'react';

import { SegmentContextType, SegmentProviderProps, SegmentSelectionMode } from './SegmentProvider.types';

const SegmentContext = createContext<SegmentContextType | undefined>(undefined);

export const useSegment = () => {
    const context = useContext(SegmentContext);
    if (!context) {
        throw new Error('useSegment must be used within a SegmentProvider');
    }
    return context;
};

export const SegmentProvider: FC<SegmentProviderProps> = ({ outerSelectionMode = 'single', children }) => {
    const [selectedSegmentItems, setSelectedSegmentItems] = useState<string[]>([]);
    const [selectionMode, setSelectionMode] = useState<SegmentSelectionMode>(outerSelectionMode);

    const handleSelect = (label: string) => {
        if (selectionMode !== 'multiple') {
            setSelectedSegmentItems([label]);
            return;
        }

        setSelectedSegmentItems((prevSelected) =>
            prevSelected.includes(label) ? prevSelected.filter((item) => item !== label) : [...prevSelected, label],
        );
    };

    const contextValue: SegmentContextType = {
        selectedSegmentItems,
        handleSelect,
        selectionMode,
        setSelectionMode,
    };

    useEffect(() => {
        setSelectedSegmentItems([]);
        setSelectionMode(outerSelectionMode);
    }, [outerSelectionMode]);

    return <SegmentContext.Provider value={contextValue}>{children}</SegmentContext.Provider>;
};
