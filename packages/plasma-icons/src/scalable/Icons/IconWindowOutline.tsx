import React from 'react';

import { WindowOutline as Icon16 } from '../Icon.assets.16/WindowOutline';
import { WindowOutline as Icon24 } from '../Icon.assets.24/WindowOutline';
import { WindowOutline as Icon36 } from '../Icon.assets.36/WindowOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconWindowOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
