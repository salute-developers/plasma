import React from 'react';

import { InfoCircleOutline } from '../Icon.assets/InfoCircleOutline';
import { IconRoot, IconProps } from '../IconRoot';

export const IconInfoCircleOutline: React.FC<IconProps> = ({ size = 's', color, className, sizeCustomProperty }) => {
    return (
        <IconRoot
            className={className}
            size={size}
            color={color}
            icon={InfoCircleOutline}
            sizeCustomProperty={sizeCustomProperty}
        />
    );
};
