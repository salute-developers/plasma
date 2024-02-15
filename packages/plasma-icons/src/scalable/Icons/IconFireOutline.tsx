import React from 'react';

import { FireOutline as Icon16 } from '../Icon.assets.16/FireOutline';
import { FireOutline as Icon24 } from '../Icon.assets.24/FireOutline';
import { FireOutline as Icon36 } from '../Icon.assets.36/FireOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconFireOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
