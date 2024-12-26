import { ReactNode } from 'react';

export const convertIconSize = (size?: string) => {
    switch (size) {
        case 's':
        case 'xs':
            return 'xs';
        default:
            return 's';
    }
};

export const addSeparator = (items: ReactNode[], renderSeparator: ReactNode) => {
    return items.flatMap((item, idx) => (idx < items.length - 1 ? [item, renderSeparator] : [item]));
};
