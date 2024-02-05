import React from 'react';

import { PowerWireOutline as Icon16 } from '../Icon.assets.16/PowerWireOutline';
import { PowerWireOutline as Icon24 } from '../Icon.assets.24/PowerWireOutline';
import { PowerWireOutline as Icon36 } from '../Icon.assets.36/PowerWireOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPowerWireOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
