import type { MouseEventHandler, ReactNode } from 'react';

import type { PopoverPlacement, PopoverPlacementBasic } from '../../../Popover';

export type TextFieldHintProps = {
    hintText: string;
    isHintVisible: boolean;
    hintTrigger: 'hover' | 'click';
    hintTargetIcon: ReactNode;
    hintPlacement: PopoverPlacement | Array<PopoverPlacementBasic>;
    hintOffset: [number, number];
    hintContentLeft: ReactNode;
    hintHasArrow?: boolean;
    hintWidth?: string;
    handleHintShow: () => void;
    handleHintHide: () => void;
    handleHintClick: MouseEventHandler;
};
