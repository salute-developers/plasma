import React from 'react';

import { Battery10Fill as Icon16 } from '../Icon.assets.16/Battery10Fill';
import { Battery10Fill as Icon24 } from '../Icon.assets.24/Battery10Fill';
import { Battery10Fill as Icon36 } from '../Icon.assets.36/Battery10Fill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBattery10Fill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
