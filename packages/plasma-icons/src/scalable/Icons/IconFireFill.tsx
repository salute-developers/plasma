import React from 'react';

import { FireFill as Icon16 } from '../Icon.assets.16/FireFill';
import { FireFill as Icon24 } from '../Icon.assets.24/FireFill';
import { FireFill as Icon36 } from '../Icon.assets.36/FireFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconFireFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
