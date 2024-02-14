import React from 'react';

import { PawFill as Icon16 } from '../Icon.assets.16/PawFill';
import { PawFill as Icon24 } from '../Icon.assets.24/PawFill';
import { PawFill as Icon36 } from '../Icon.assets.36/PawFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPawFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
