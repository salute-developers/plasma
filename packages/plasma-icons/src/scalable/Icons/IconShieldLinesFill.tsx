import React from 'react';

import { ShieldLinesFill as Icon16 } from '../Icon.assets.16/ShieldLinesFill';
import { ShieldLinesFill as Icon24 } from '../Icon.assets.24/ShieldLinesFill';
import { ShieldLinesFill as Icon36 } from '../Icon.assets.36/ShieldLinesFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconShieldLinesFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
