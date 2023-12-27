import React from 'react';

import { Cross } from '../Icon.assets/Cross';
import { IconRoot, IconProps } from '../IconRoot';

export const IconCross: React.FC<IconProps> = ({ size = 's', color, className, sizeCustomProperty }) => {
    return (
        <IconRoot
            className={className}
            size={size}
            color={color}
            sizeCustomProperty={sizeCustomProperty}
            icon={Cross}
        />
    );
};
