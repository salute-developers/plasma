import React from 'react';

import { OpenFill as Icon16 } from '../Icon.assets.16/OpenFill';
import { OpenFill as Icon24 } from '../Icon.assets.24/OpenFill';
import { OpenFill as Icon36 } from '../Icon.assets.36/OpenFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconOpenFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
