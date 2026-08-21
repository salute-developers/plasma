import React from 'react';

import { Close } from '../Icon.assets/Close';
import { IconRoot, IconProps } from '../IconRoot';

export const IconClose: React.FC<IconProps> = ({
    size = 's',
    color,
    className,
    sizeCustomProperty,
    sizeCustomValue,
    ...rest
}) => {
    return (
        <IconRoot
            className={className}
            size={size}
            color={color}
            sizeCustomProperty={sizeCustomProperty}
            sizeCustomValue={sizeCustomValue}
            icon={Close}
            {...rest}
        />
    );
};
