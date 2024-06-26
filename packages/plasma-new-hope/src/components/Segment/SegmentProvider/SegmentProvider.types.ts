import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';

export type SegmentSelectionMode = 'single' | 'multiple';

export type SegmentProviderProps = {
    /**
     * Выбранные по умолчанию сегменты.
     * Передается массив value сегментов, выбранных по умолчанию
     */
    defaultSelected?: Array<string>;
} & PropsWithChildren;

export type SegmentContextType = {
    disabledGroup: boolean;
    setDisabledGroup: Dispatch<SetStateAction<boolean>>;
    selectedSegmentItems: string[];
    setSelectedSegmentItems: Dispatch<SetStateAction<string[]>>;
    handleSelect: (label: string) => void;
    selectionMode: SegmentSelectionMode;
    setSelectionMode: Dispatch<SetStateAction<SegmentSelectionMode>>;
};
