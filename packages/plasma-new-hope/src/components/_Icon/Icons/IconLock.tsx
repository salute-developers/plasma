import React from 'react';

import { Lock } from '../Icon.assets/Lock';
import { IconRoot, IconProps } from '../IconRoot';

export const IconLock: React.FC<IconProps> = ({ size = 's', color, className, sizeCustomValue, ...rest }) => {
    return (
        <IconRoot
            className={className}
            sizeCustomValue={sizeCustomValue}
            size={size}
            color={color}
            icon={Lock}
            {...rest}
        />
    );
};
