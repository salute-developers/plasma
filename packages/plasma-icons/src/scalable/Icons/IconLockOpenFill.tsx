import React from 'react';

import { LockOpenFill as Icon16 } from '../Icon.assets.16/LockOpenFill';
import { LockOpenFill as Icon24 } from '../Icon.assets.24/LockOpenFill';
import { LockOpenFill as Icon36 } from '../Icon.assets.36/LockOpenFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconLockOpenFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
