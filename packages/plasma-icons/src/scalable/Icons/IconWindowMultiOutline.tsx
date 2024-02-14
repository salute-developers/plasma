import React from 'react';

import { WindowMultiOutline as Icon16 } from '../Icon.assets.16/WindowMultiOutline';
import { WindowMultiOutline as Icon24 } from '../Icon.assets.24/WindowMultiOutline';
import { WindowMultiOutline as Icon36 } from '../Icon.assets.36/WindowMultiOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconWindowMultiOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
