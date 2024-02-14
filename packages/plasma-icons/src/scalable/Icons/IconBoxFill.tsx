import React from 'react';

import { BoxFill as Icon16 } from '../Icon.assets.16/BoxFill';
import { BoxFill as Icon24 } from '../Icon.assets.24/BoxFill';
import { BoxFill as Icon36 } from '../Icon.assets.36/BoxFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBoxFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
