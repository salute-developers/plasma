import React from 'react';

import { CrossThin } from '../Icon.assets/CrossThin';
import { IconRoot, IconProps } from '../IconRoot';

export const IconCrossThin: React.FC<IconProps> = ({ size = 's', color, className, sizeCustomProperty }) => {
    return (
        <IconRoot
            className={className}
            size={size}
            color={color}
            sizeCustomProperty={sizeCustomProperty}
            icon={CrossThin}
        />
    );
};
