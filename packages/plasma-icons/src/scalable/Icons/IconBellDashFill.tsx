import React from 'react';

import { BellDashFill as Icon16 } from '../Icon.assets.16/BellDashFill';
import { BellDashFill as Icon24 } from '../Icon.assets.24/BellDashFill';
import { BellDashFill as Icon36 } from '../Icon.assets.36/BellDashFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBellDashFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
