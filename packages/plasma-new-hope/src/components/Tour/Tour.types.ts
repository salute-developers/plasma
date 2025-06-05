import { ReactNode } from 'react';

import { PopoverPlacement, PopoverPlacementBasic } from '../Popover';

export interface TourStep {
    target: string | React.RefObject<HTMLElement> | HTMLElement | ReactNode;
    title?: ReactNode;
    description?: ReactNode;
    placement?: PopoverPlacement | Array<PopoverPlacementBasic>;
    hasArrow?: boolean;
    maskClosable?: boolean;
}

export interface TourProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    steps: TourStep[];
    current?: number;
    defaultCurrent?: number;
    open?: boolean;
    defaultOpen?: boolean;
    onChange?: (current: number) => void;
    onClose?: () => void;
    nextButton?: ReactNode;
    prevButton?: ReactNode;
    closeButton?: ReactNode;
    withMask?: boolean;
    zIndex?: string;
    view?: string;
    size?: string;
}
