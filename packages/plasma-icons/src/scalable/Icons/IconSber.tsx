import React from 'react';

import { Sber as Icon16 } from '../Icon.assets.16/Sber';
import { Sber as Icon24 } from '../Icon.assets.24/Sber';
import { Sber as Icon36 } from '../Icon.assets.36/Sber';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSber: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
