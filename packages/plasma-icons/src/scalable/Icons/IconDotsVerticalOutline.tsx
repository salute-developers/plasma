import React from 'react';

import { DotsVerticalOutline as Icon16 } from '../Icon.assets.16/DotsVerticalOutline';
import { DotsVerticalOutline as Icon24 } from '../Icon.assets.24/DotsVerticalOutline';
import { DotsVerticalOutline as Icon36 } from '../Icon.assets.36/DotsVerticalOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDotsVerticalOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
