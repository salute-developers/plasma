import type { HTMLAttributes } from 'react';

export interface ToastContainerProps extends HTMLAttributes<HTMLDivElement> {
    hasClose?: boolean;
}
