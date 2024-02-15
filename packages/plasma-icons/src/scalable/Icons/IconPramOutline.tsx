import React from 'react';

import { PramOutline as Icon16 } from '../Icon.assets.16/PramOutline';
import { PramOutline as Icon24 } from '../Icon.assets.24/PramOutline';
import { PramOutline as Icon36 } from '../Icon.assets.36/PramOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPramOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
