import React from 'react';

import { IconProps } from '../IconRoot';

export const DisclosureDownCentered: React.FC<IconProps> = (props) => {
    if (props.size === 'xs') {
        return (
            <svg width="100%" viewBox="0 0 16 16" fill="none" {...props}>
                <path
                    id="path"
                    d="M4.64 6.14C4.84 5.95 5.15 5.95 5.35 6.14L8 8.79L10.64 6.14C10.84 5.95 11.15 5.95 11.35 6.14C11.54 6.34 11.54 6.65 11.35 6.85L8 10.2L4.64 6.85C4.45 6.65 4.45 6.34 4.64 6.14Z"
                    fill="currentColor"
                />
            </svg>
        );
    }

    return (
        <svg width="100%" viewBox="0 0 24 24" fill="none" {...props}>
            <path
                id="path"
                d="M6.96 9.21C7.26 8.92 7.73 8.92 8.03 9.21L12 13.18L15.96 9.21C16.26 8.92 16.73 8.92 17.03 9.21C17.32 9.51 17.32 9.98 17.03 10.28L12 15.31L6.96 10.28C6.67 9.98 6.67 9.51 6.96 9.21Z"
                fill="currentColor"
            />
        </svg>
    );
};
