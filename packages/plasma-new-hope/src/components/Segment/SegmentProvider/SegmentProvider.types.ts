import type { PropsWithChildren } from 'react';

export type SegmentSelectionMode = 'single' | 'multiple';

export type SegmentContextType = {
    selectedSegmentItems: string[];
    handleSelect: (label: string) => void;
    selectionMode: SegmentSelectionMode;
    setSelectionMode: (mode: SegmentSelectionMode) => void;
};

export type SegmentProviderProps = {
    outerSelectionMode?: SegmentSelectionMode;
} & PropsWithChildren;
