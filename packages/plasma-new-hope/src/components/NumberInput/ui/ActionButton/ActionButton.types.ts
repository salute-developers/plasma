import type { ReactNode } from 'react';

export type ActionButtonProps = {
    icon: ReactNode;
    className?: string;
    onClick: () => void;
};
