import React from 'react';

import { PowerWireDashFill as Icon16 } from '../Icon.assets.16/PowerWireDashFill';
import { PowerWireDashFill as Icon24 } from '../Icon.assets.24/PowerWireDashFill';
import { PowerWireDashFill as Icon36 } from '../Icon.assets.36/PowerWireDashFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPowerWireDashFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
