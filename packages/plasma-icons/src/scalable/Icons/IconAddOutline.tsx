import React from 'react';

import { AddOutline as Icon16 } from '../Icon.assets.16/AddOutline';
import { AddOutline as Icon24 } from '../Icon.assets.24/AddOutline';
import { AddOutline as Icon36 } from '../Icon.assets.36/AddOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconAddOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
