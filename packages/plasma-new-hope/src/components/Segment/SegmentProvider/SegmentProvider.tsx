import React, { createContext, useCallback, useContext, useRef, useState } from 'react';
import type { FC } from 'react';

import {
    SegmentContextType,
    SegmentOrientation,
    SegmentProviderProps,
    SegmentSelectionMode,
} from './SegmentProvider.types';

export const dividerOrientationMap = {
    horizontal: 'vertical',
    vertical: 'horizontal',
};

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

export const SegmentProvider: FC<SegmentProviderProps> = ({
    children,
    defaultSelected,
    selected: outerSelected,
    singleSelectedRequired,

    onChangeSelected,
}) => {
    const [selectionMode, setSelectionMode] = useState<SegmentSelectionMode>('single');
    const [disabledGroup, setDisabledGroup] = useState(false);
    const [hasDivider, setHasDivider] = useState(false);
    const [orientation, setOrientation] = useState<SegmentOrientation>('horizontal');

    const [selectedSegmentItems, setSelectedSegmentItems] = useState<string[]>(defaultSelected || []);
    const selected = outerSelected ?? selectedSegmentItems;

    const itemNodesRef = useRef<Map<string, HTMLElement | null>>(new Map());

    const registerItemRef = (itemValue: string, node: HTMLElement | null) => {
        if (node) {
            itemNodesRef.current.set(itemValue, node);
        } else {
            itemNodesRef.current.delete(itemValue);
        }
    };

    const getItemRef = useCallback((itemValue: string) => itemNodesRef.current.get(itemValue), []);

    const handleSelect = (label: string) => {
        if (selectionMode !== 'multiple') {
            setSelectedSegmentItems((prevSelected) =>
                prevSelected.includes(label) && !singleSelectedRequired ? [] : [label],
            );
        } else {
            setSelectedSegmentItems((prevSelected) =>
                prevSelected.includes(label) && !singleSelectedRequired && prevSelected.length !== 1
                    ? prevSelected.filter((item) => item !== label)
                    : [...prevSelected, label],
            );
        }

        if (onChangeSelected) {
            onChangeSelected(label);
        }
    };

    const contextValue: SegmentContextType = {
        selectedSegmentItems: selected,
        setSelectedSegmentItems,
        handleSelect,
        selectionMode,
        setSelectionMode,
        disabledGroup,
        setDisabledGroup,
        hasDivider,
        setHasDivider,
        orientation,
        setOrientation,
        registerItemRef,
        getItemRef,
    };

    return <SegmentContext.Provider value={contextValue}>{children}</SegmentContext.Provider>;
};
