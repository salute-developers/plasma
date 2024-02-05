import React from 'react';

import { MegaphoneOutline as Icon16 } from '../Icon.assets.16/MegaphoneOutline';
import { MegaphoneOutline as Icon24 } from '../Icon.assets.24/MegaphoneOutline';
import { MegaphoneOutline as Icon36 } from '../Icon.assets.36/MegaphoneOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMegaphoneOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
