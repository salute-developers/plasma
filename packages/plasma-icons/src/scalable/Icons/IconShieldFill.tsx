import React from 'react';

import { ShieldFill as Icon16 } from '../Icon.assets.16/ShieldFill';
import { ShieldFill as Icon24 } from '../Icon.assets.24/ShieldFill';
import { ShieldFill as Icon36 } from '../Icon.assets.36/ShieldFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconShieldFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
