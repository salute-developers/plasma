import React from 'react';

import { Visa as Icon16 } from '../Icon.assets.16/Visa';
import { Visa as Icon24 } from '../Icon.assets.24/Visa';
import { Visa as Icon36 } from '../Icon.assets.36/Visa';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconVisa: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
