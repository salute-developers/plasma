import React from 'react';

import { BlockOutline as Icon16 } from '../Icon.assets.16/BlockOutline';
import { BlockOutline as Icon24 } from '../Icon.assets.24/BlockOutline';
import { BlockOutline as Icon36 } from '../Icon.assets.36/BlockOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBlockOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
