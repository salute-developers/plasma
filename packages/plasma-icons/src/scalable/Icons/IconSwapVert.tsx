import React from 'react';

import { SwapVert as Icon16 } from '../Icon.assets.16/SwapVert';
import { SwapVert as Icon24 } from '../Icon.assets.24/SwapVert';
import { SwapVert as Icon36 } from '../Icon.assets.36/SwapVert';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSwapVert: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
