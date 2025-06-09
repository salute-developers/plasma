import { ReactNode } from 'react';

export interface TourStep {
    target: string | React.RefObject<HTMLElement> | HTMLElement | ReactNode;
    renderItem: () => JSX.Element;
    placement?: string;
}

export interface TourProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    steps: TourStep[];
    current?: number;
    defaultCurrent?: number;
    open?: boolean;
    defaultOpen?: boolean;
    onChange?: (current: number) => void;
    onClose?: () => void;
    withMask?: boolean;
    zIndex?: string;
    view?: string;
    size?: string;
    maskColor?: string;
}
