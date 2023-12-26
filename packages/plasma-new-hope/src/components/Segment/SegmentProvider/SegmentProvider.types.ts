import type { SetStateAction } from 'react';

export type SegmentSelectionMode = 'single' | 'multiple';

export type SegmentContextType = {
    disabledGroup: boolean;
    setDisabledGroup: (value: SetStateAction<boolean>) => void;
    selectedSegmentItems: string[];
    handleSelect: (label: string) => void;
    selectionMode: SegmentSelectionMode;
    setSelectionMode: (mode: SegmentSelectionMode) => void;
};
