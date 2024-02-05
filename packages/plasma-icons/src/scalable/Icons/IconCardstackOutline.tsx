import React from 'react';

import { CardstackOutline as Icon16 } from '../Icon.assets.16/CardstackOutline';
import { CardstackOutline as Icon24 } from '../Icon.assets.24/CardstackOutline';
import { CardstackOutline as Icon36 } from '../Icon.assets.36/CardstackOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCardstackOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
