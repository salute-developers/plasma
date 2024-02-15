import React from 'react';

import { WindowMaximizeLFill as Icon16 } from '../Icon.assets.16/WindowMaximizeLFill';
import { WindowMaximizeLFill as Icon24 } from '../Icon.assets.24/WindowMaximizeLFill';
import { WindowMaximizeLFill as Icon36 } from '../Icon.assets.36/WindowMaximizeLFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconWindowMaximizeLFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
