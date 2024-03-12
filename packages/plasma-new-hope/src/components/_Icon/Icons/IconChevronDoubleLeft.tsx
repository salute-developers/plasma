import React from 'react';

import { ChevronDoubleLeft } from '../Icon.assets/ChevronDoubleLeft';
import { IconRoot, IconProps } from '../IconRoot';

export const IconChevronDoubleLeft: React.FC<IconProps> = ({ size = 'xs', color, className, sizeCustomProperty }) => {
    return (
        <IconRoot
            sizeCustomProperty={sizeCustomProperty}
            className={className}
            size={size}
            color={color}
            icon={ChevronDoubleLeft}
        />
    );
};
