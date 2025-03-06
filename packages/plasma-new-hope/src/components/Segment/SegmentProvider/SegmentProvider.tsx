import React, { createContext, useContext, useState } from 'react';
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

export const SegmentProvider: FC<SegmentProviderProps> = ({ children, defaultSelected, singleSelectedRequired }) => {
    const [selectedSegmentItems, setSelectedSegmentItems] = useState<string[]>(defaultSelected || []);
    const [selectionMode, setSelectionMode] = useState<SegmentSelectionMode>('single');
    const [disabledGroup, setDisabledGroup] = useState(false);

    const handleSelect = (label: string) => {
        if (selectionMode !== 'multiple') {
            setSelectedSegmentItems((prevSelected) =>
                prevSelected.includes(label) && !singleSelectedRequired ? [] : [label],
            );

            return;
        }

        setSelectedSegmentItems((prevSelected) =>
            prevSelected.includes(label) && !singleSelectedRequired && prevSelected.length !== 1
                ? prevSelected.filter((item) => item !== label)
                : [...prevSelected, label],
        );
    };

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
