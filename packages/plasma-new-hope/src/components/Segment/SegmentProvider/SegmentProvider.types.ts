import type { Dispatch, SetStateAction } from 'react';

export type SegmentSelectionMode = 'single' | 'multiple';

export type SegmentContextType = {
    disabledGroup: boolean;
    setDisabledGroup: Dispatch<SetStateAction<boolean>>;
    selectedSegmentItems: string[];
    setSelectedSegmentItems: Dispatch<SetStateAction<string[]>>;
    handleSelect: (label: string) => void;
    selectionMode: SegmentSelectionMode;
    setSelectionMode: Dispatch<SetStateAction<SegmentSelectionMode>>;
};
