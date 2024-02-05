import React from 'react';

import { Percent as Icon16 } from '../Icon.assets.16/Percent';
import { Percent as Icon24 } from '../Icon.assets.24/Percent';
import { Percent as Icon36 } from '../Icon.assets.36/Percent';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPercent: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
