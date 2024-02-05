import React from 'react';

import { SwapVertCircFill as Icon16 } from '../Icon.assets.16/SwapVertCircFill';
import { SwapVertCircFill as Icon24 } from '../Icon.assets.24/SwapVertCircFill';
import { SwapVertCircFill as Icon36 } from '../Icon.assets.36/SwapVertCircFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSwapVertCircFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
