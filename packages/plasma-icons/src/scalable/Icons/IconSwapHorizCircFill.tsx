import React from 'react';

import { SwapHorizCircFill as Icon16 } from '../Icon.assets.16/SwapHorizCircFill';
import { SwapHorizCircFill as Icon24 } from '../Icon.assets.24/SwapHorizCircFill';
import { SwapHorizCircFill as Icon36 } from '../Icon.assets.36/SwapHorizCircFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSwapHorizCircFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
