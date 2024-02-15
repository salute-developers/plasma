import React from 'react';

import { BlankOutline as Icon16 } from '../Icon.assets.16/BlankOutline';
import { BlankOutline as Icon24 } from '../Icon.assets.24/BlankOutline';
import { BlankOutline as Icon36 } from '../Icon.assets.36/BlankOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBlankOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
