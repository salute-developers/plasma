import React from 'react';

import { AddSmileOutline as Icon16 } from '../Icon.assets.16/AddSmileOutline';
import { AddSmileOutline as Icon24 } from '../Icon.assets.24/AddSmileOutline';
import { AddSmileOutline as Icon36 } from '../Icon.assets.36/AddSmileOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconAddSmileOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
