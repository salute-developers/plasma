import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
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
    const [viewGroup, setViewGroup] = useState('');
    const [disabledGroup, setDisabledGroup] = useState(false);

    const handleSelect = useCallback(
        (label: string) => {
            if (selectionMode !== 'multiple') {
                setSelectedSegmentItems((prevSelected) => (prevSelected.includes(label) ? [] : [label]));
                return;
            }

            setSelectedSegmentItems((prevSelected) =>
                prevSelected.includes(label) ? prevSelected.filter((item) => item !== label) : [...prevSelected, label],
            );
        },
        [selectionMode, setSelectedSegmentItems],
    );

    const contextValue: SegmentContextType = {
        viewGroup,
        setViewGroup,
        selectedSegmentItems,
        handleSelect,
        selectionMode,
        setSelectionMode,
        disabledGroup,
        setDisabledGroup,
    };

    useEffect(() => {
        setSelectedSegmentItems([]);
    }, [selectionMode]);

    return <SegmentContext.Provider value={contextValue}>{children}</SegmentContext.Provider>;
};
