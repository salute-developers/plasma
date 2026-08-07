import React from 'react';

import { DisclosureDownFill } from '../Icon.assets/DisclosureDownFill';
import { IconRoot, IconProps } from '../IconRoot';

export const IconDisclosureDownFill: React.FC<IconProps> = ({ size = 's', color, className, sizeCustomProperty }) => {
    return (
        <IconRoot
            className={className}
            size={size}
            color={color}
            sizeCustomProperty={sizeCustomProperty}
            icon={DisclosureDownFill}
        />
    );
};
