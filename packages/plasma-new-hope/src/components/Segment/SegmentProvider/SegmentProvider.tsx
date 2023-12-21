import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import type { FC, PropsWithChildren } from 'react';

import { SegmentContextType, SegmentSelectionMode } from './SegmentProvider.types';

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

export const SegmentProvider: FC<PropsWithChildren> = ({ children }) => {
    const [selectedSegmentItems, setSelectedSegmentItems] = useState<string[]>([]);
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
