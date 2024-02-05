import React from 'react';

import { ArrowWideForwardBack as Icon16 } from '../Icon.assets.16/ArrowWideForwardBack';
import { ArrowWideForwardBack as Icon24 } from '../Icon.assets.24/ArrowWideForwardBack';
import { ArrowWideForwardBack as Icon36 } from '../Icon.assets.36/ArrowWideForwardBack';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconArrowWideForwardBack: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
