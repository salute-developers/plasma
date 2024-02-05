import React from 'react';

import { LockFill as Icon16 } from '../Icon.assets.16/LockFill';
import { LockFill as Icon24 } from '../Icon.assets.24/LockFill';
import { LockFill as Icon36 } from '../Icon.assets.36/LockFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconLockFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
