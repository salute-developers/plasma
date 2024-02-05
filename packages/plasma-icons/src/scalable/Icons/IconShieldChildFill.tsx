import React from 'react';

import { ShieldChildFill as Icon16 } from '../Icon.assets.16/ShieldChildFill';
import { ShieldChildFill as Icon24 } from '../Icon.assets.24/ShieldChildFill';
import { ShieldChildFill as Icon36 } from '../Icon.assets.36/ShieldChildFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconShieldChildFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
