import type { MouseEventHandler, ReactNode } from 'react';

import type { PopoverPlacement, PopoverPlacementBasic } from '../../../Popover';

export type TextAreaHintProps = {
    hintText: string;
    isHintVisible: boolean;
    hintTrigger: 'hover' | 'click';
    hintTargetIcon: ReactNode;
    hintPlacement: PopoverPlacement | Array<PopoverPlacementBasic>;
    hintHasArrow?: boolean;
    hintOffset: [number, number];
    hintWidth?: string;
    hintContentLeft: ReactNode;
    handleHintShow: () => void;
    handleHintHide: () => void;
    handleHintClick: MouseEventHandler;
};
