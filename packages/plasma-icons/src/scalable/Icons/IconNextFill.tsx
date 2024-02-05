import React from 'react';

import { NextFill as Icon16 } from '../Icon.assets.16/NextFill';
import { NextFill as Icon24 } from '../Icon.assets.24/NextFill';
import { NextFill as Icon36 } from '../Icon.assets.36/NextFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconNextFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
