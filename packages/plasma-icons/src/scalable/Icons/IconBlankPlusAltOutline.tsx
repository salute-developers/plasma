import React from 'react';

import { BlankPlusAltOutline as Icon16 } from '../Icon.assets.16/BlankPlusAltOutline';
import { BlankPlusAltOutline as Icon24 } from '../Icon.assets.24/BlankPlusAltOutline';
import { BlankPlusAltOutline as Icon36 } from '../Icon.assets.36/BlankPlusAltOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBlankPlusAltOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
