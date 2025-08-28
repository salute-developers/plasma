import React from 'react';

import { DotsHorizontalOutline } from '../Icon.assets/DotsHorizontalOutline';
import { IconRoot, IconProps } from '../IconRoot';

export const IconDotsHorizontalOutline: React.FC<IconProps> = ({
    size = 's',
    color,
    className,
    sizeCustomProperty,
    sizeCustomValue,
}) => {
    return (
        <IconRoot
            className={className}
            size={size}
            color={color}
            sizeCustomProperty={sizeCustomProperty}
            sizeCustomValue={sizeCustomValue}
            icon={DotsHorizontalOutline}
        />
    );
};
