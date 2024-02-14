import React from 'react';

import { Mastercard as Icon16 } from '../Icon.assets.16/Mastercard';
import { Mastercard as Icon24 } from '../Icon.assets.24/Mastercard';
import { Mastercard as Icon36 } from '../Icon.assets.36/Mastercard';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMastercard: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
