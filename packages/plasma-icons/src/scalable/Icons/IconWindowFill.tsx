import React from 'react';

import { WindowFill as Icon16 } from '../Icon.assets.16/WindowFill';
import { WindowFill as Icon24 } from '../Icon.assets.24/WindowFill';
import { WindowFill as Icon36 } from '../Icon.assets.36/WindowFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconWindowFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
