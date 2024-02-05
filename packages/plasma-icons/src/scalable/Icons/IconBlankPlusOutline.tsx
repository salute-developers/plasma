import React from 'react';

import { BlankPlusOutline as Icon16 } from '../Icon.assets.16/BlankPlusOutline';
import { BlankPlusOutline as Icon24 } from '../Icon.assets.24/BlankPlusOutline';
import { BlankPlusOutline as Icon36 } from '../Icon.assets.36/BlankPlusOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBlankPlusOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
