import React from 'react';

import { EyeFill as Icon16 } from '../Icon.assets.16/EyeFill';
import { EyeFill as Icon24 } from '../Icon.assets.24/EyeFill';
import { EyeFill as Icon36 } from '../Icon.assets.36/EyeFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconEyeFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
