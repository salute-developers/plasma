import type { MouseEventHandler, ReactNode, RefObject } from 'react';

import type { PopoverPlacement, PopoverPlacementBasic } from '../../../Popover';

export type TextFieldHintProps = {
    hintText: string;
    isHintVisible: boolean;
    hintTrigger: 'hover' | 'click';
    hintTargetIcon: ReactNode;
    hintPlacement: PopoverPlacement | Array<PopoverPlacementBasic>;
    hintOffset: [number, number];
    hintContentLeft: ReactNode;
    size?: string;
    isInnerLabel?: boolean;
    hintHasArrow?: boolean;
    hintWidth?: string;
    hintPortal?: string | RefObject<HTMLElement | null>;
    handleHintShow: () => void;
    handleHintHide: () => void;
    handleHintClick: MouseEventHandler;
};
