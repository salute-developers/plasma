import React, { createContext, useCallback, useContext, useState } from 'react';
import type { FC } from 'react';

import { SegmentContextType, SegmentProviderProps, SegmentSelectionMode } from './SegmentProvider.types';

export const SegmentContext = createContext<SegmentContextType | undefined>(undefined);

export const useSegmentInner = () => {
    const context = useContext(SegmentContext);
    if (!context) {
        throw new Error('useSegment must be used within a SegmentProvider');
    }
    return context;
};

export const useSegment = () => {
    const { selectedSegmentItems } = useSegmentInner();
    return { selectedSegmentItems };
};

export const SegmentProvider: FC<SegmentProviderProps> = ({ children, defaultSelected }) => {
    const [selectedSegmentItems, setSelectedSegmentItems] = useState<string[]>(defaultSelected || []);
    const [selectionMode, setSelectionMode] = useState<SegmentSelectionMode>('single');
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
        selectedSegmentItems,
        setSelectedSegmentItems,
        handleSelect,
        selectionMode,
        setSelectionMode,
        disabledGroup,
        setDisabledGroup,
    };

    return <SegmentContext.Provider value={contextValue}>{children}</SegmentContext.Provider>;
};
