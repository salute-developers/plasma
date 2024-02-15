import React from 'react';

import { PowerWireCableFill as Icon16 } from '../Icon.assets.16/PowerWireCableFill';
import { PowerWireCableFill as Icon24 } from '../Icon.assets.24/PowerWireCableFill';
import { PowerWireCableFill as Icon36 } from '../Icon.assets.36/PowerWireCableFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPowerWireCableFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
