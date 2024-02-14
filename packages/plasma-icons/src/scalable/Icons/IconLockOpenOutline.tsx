import React from 'react';

import { LockOpenOutline as Icon16 } from '../Icon.assets.16/LockOpenOutline';
import { LockOpenOutline as Icon24 } from '../Icon.assets.24/LockOpenOutline';
import { LockOpenOutline as Icon36 } from '../Icon.assets.36/LockOpenOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconLockOpenOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
