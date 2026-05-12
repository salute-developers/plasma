import type { ReactNode } from 'react';

export type LabelWrapperProps = {
    labelIcon?: ReactNode;
    labelTextPlacement?: 'left' | 'right' | 'none';
    label?: string;
};
