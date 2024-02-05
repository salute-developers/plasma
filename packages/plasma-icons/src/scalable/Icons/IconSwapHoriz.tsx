import React from 'react';

import { SwapHoriz as Icon16 } from '../Icon.assets.16/SwapHoriz';
import { SwapHoriz as Icon24 } from '../Icon.assets.24/SwapHoriz';
import { SwapHoriz as Icon36 } from '../Icon.assets.36/SwapHoriz';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSwapHoriz: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
