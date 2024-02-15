import React from 'react';

import { PowerWireDashOutline as Icon16 } from '../Icon.assets.16/PowerWireDashOutline';
import { PowerWireDashOutline as Icon24 } from '../Icon.assets.24/PowerWireDashOutline';
import { PowerWireDashOutline as Icon36 } from '../Icon.assets.36/PowerWireDashOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPowerWireDashOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
