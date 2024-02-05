import React from 'react';

import { BackwardFill as Icon16 } from '../Icon.assets.16/BackwardFill';
import { BackwardFill as Icon24 } from '../Icon.assets.24/BackwardFill';
import { BackwardFill as Icon36 } from '../Icon.assets.36/BackwardFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBackwardFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
