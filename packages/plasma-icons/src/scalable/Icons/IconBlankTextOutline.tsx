import React from 'react';

import { BlankTextOutline as Icon16 } from '../Icon.assets.16/BlankTextOutline';
import { BlankTextOutline as Icon24 } from '../Icon.assets.24/BlankTextOutline';
import { BlankTextOutline as Icon36 } from '../Icon.assets.36/BlankTextOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBlankTextOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
