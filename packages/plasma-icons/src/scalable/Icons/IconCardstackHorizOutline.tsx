import React from 'react';

import { CardstackHorizOutline as Icon16 } from '../Icon.assets.16/CardstackHorizOutline';
import { CardstackHorizOutline as Icon24 } from '../Icon.assets.24/CardstackHorizOutline';
import { CardstackHorizOutline as Icon36 } from '../Icon.assets.36/CardstackHorizOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCardstackHorizOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
