import React from 'react';

import { PowerWireFill as Icon16 } from '../Icon.assets.16/PowerWireFill';
import { PowerWireFill as Icon24 } from '../Icon.assets.24/PowerWireFill';
import { PowerWireFill as Icon36 } from '../Icon.assets.36/PowerWireFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPowerWireFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
