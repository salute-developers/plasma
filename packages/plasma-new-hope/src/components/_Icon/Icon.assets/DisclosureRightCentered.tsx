import React from 'react';

import { IconProps } from '../IconRoot';

export const DisclosureRightCentered: React.FC<IconProps> = (props) => {
    if (props.size === 'xs') {
        return (
            <svg width="100%" viewBox="0 0 16 16" fill="none" {...props}>
                <path
                    d="M6.04 4.64C5.84 4.84 5.84 5.15 6.04 5.35L8.68 8L6.04 10.64C5.84 10.84 5.84 11.15 6.04 11.35C6.23 11.54 6.55 11.54 6.75 11.35L10.1 8L6.75 4.64C6.55 4.45 6.23 4.45 6.04 4.64Z"
                    fill="currentColor"
                />
            </svg>
        );
    }

    return (
        <svg width="100%" viewBox="0 0 24 24" fill="none" {...props}>
            <path
                d="M9.06 6.96C8.77 7.26 8.77 7.73 9.06 8.03L13.03 12L9.06 15.96C8.77 16.26 8.77 16.73 9.06 17.03C9.35 17.32 9.83 17.32 10.12 17.03L15.15 12L10.12 6.96C9.83 6.67 9.35 6.67 9.06 6.96Z"
                fill="currentColor"
            />
        </svg>
    );
};
