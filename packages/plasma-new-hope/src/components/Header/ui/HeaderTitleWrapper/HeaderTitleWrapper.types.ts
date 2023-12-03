import type { HTMLAttributes, ReactNode } from 'react';

export type HeaderTitleWrapperProps = HTMLAttributes<HTMLDivElement> & {
    label?: string;
    title?: string;
    subTitle?: string;
    caption?: string;
    children?: ReactNode;
    withBigTitle?: boolean;
};
