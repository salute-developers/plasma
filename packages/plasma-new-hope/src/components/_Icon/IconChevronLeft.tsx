import React from 'react';

import { ChevronLeft } from './Icon.assets/ChevronLeft';
import { IconRoot, IconProps } from './IconRoot';

export const IconChevronLeft: React.FC<IconProps> = ({ size = 's', color, className, sizeCustomProperty }) => {
    return (
        <IconRoot
            className={className}
            size={size}
            color={color}
            icon={ChevronLeft}
            sizeCustomProperty={sizeCustomProperty}
        />
    );
};
