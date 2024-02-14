import React from 'react';

import { SberboxOutline as Icon16 } from '../Icon.assets.16/SberboxOutline';
import { SberboxOutline as Icon24 } from '../Icon.assets.24/SberboxOutline';
import { SberboxOutline as Icon36 } from '../Icon.assets.36/SberboxOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSberboxOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
