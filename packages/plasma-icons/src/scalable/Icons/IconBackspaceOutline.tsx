import React from 'react';

import { BackspaceOutline as Icon16 } from '../Icon.assets.16/BackspaceOutline';
import { BackspaceOutline as Icon24 } from '../Icon.assets.24/BackspaceOutline';
import { BackspaceOutline as Icon36 } from '../Icon.assets.36/BackspaceOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBackspaceOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
