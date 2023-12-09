import React, { createContext, useContext, useEffect, useState } from 'react';
import type { FC, PropsWithChildren } from 'react';

import { SegmentContextType, SegmentSelectionMode } from './SegmentProvider.types';

const SegmentContext = createContext<SegmentContextType | undefined>(undefined);

export const useSegment = () => {
    const context = useContext(SegmentContext);
    if (!context) {
        throw new Error('useSegment must be used within a SegmentProvider');
    }
    return context;
};

export const SegmentProvider: FC<PropsWithChildren> = ({ children }) => {
    const [selectedSegmentItems, setSelectedSegmentItems] = useState<string[]>([]);
    const [selectionMode, setSelectionMode] = useState<SegmentSelectionMode>('single');
    const [disabledGroup, setDisabledGroup] = useState(false);
    const [isFilledBackground, setFilledBackground] = useState(false);

    const handleSelect = (label: string) => {
        if (selectionMode !== 'multiple') {
            setSelectedSegmentItems((prevSelected) => (prevSelected.includes(label) ? [] : [label]));
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
        disabledGroup,
        setDisabledGroup,
        isFilledBackground,
        setFilledBackground,
    };

    useEffect(() => {
        setSelectedSegmentItems([]);
    }, [selectionMode]);

    return <SegmentContext.Provider value={contextValue}>{children}</SegmentContext.Provider>;
};
