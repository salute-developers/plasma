import React from 'react';

import { CapsuleOutline as Icon16 } from '../Icon.assets.16/CapsuleOutline';
import { CapsuleOutline as Icon24 } from '../Icon.assets.24/CapsuleOutline';
import { CapsuleOutline as Icon36 } from '../Icon.assets.36/CapsuleOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCapsuleOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
