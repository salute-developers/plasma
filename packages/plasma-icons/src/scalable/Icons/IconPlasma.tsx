import React from 'react';

import { Plasma as Icon16 } from '../Icon.assets.16/Plasma';
import { Plasma as Icon24 } from '../Icon.assets.24/Plasma';
import { Plasma as Icon36 } from '../Icon.assets.36/Plasma';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPlasma: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
