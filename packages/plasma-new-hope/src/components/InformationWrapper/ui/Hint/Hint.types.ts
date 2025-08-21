import type { MouseEventHandler, ReactNode } from 'react';

import type { PopoverPlacement, PopoverPlacementBasic } from '../../../Popover';

export type HintProps = {
    hintText: string;
    isHintVisible: boolean;
    hintContentLeft: ReactNode;
    hintTrigger?: 'hover' | 'click';
    hintTargetIcon?: ReactNode;
    hintPlacement?: PopoverPlacement | Array<PopoverPlacementBasic>;
    hintOffset?: [number, number];
    size?: string;
    withoutLabel?: boolean;
    hintHasArrow?: boolean;
    hintWidth?: string;
    handleHintShow: () => void;
    handleHintHide: () => void;
    handleHintClick: MouseEventHandler;
};
