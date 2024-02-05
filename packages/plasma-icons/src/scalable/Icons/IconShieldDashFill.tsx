import React from 'react';

import { ShieldDashFill as Icon16 } from '../Icon.assets.16/ShieldDashFill';
import { ShieldDashFill as Icon24 } from '../Icon.assets.24/ShieldDashFill';
import { ShieldDashFill as Icon36 } from '../Icon.assets.36/ShieldDashFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconShieldDashFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
