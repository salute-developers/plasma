import React from 'react';

import { Battery10Outline as Icon16 } from '../Icon.assets.16/Battery10Outline';
import { Battery10Outline as Icon24 } from '../Icon.assets.24/Battery10Outline';
import { Battery10Outline as Icon36 } from '../Icon.assets.36/Battery10Outline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBattery10Outline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
