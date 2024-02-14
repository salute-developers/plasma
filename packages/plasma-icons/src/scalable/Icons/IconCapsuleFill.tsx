import React from 'react';

import { CapsuleFill as Icon16 } from '../Icon.assets.16/CapsuleFill';
import { CapsuleFill as Icon24 } from '../Icon.assets.24/CapsuleFill';
import { CapsuleFill as Icon36 } from '../Icon.assets.36/CapsuleFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCapsuleFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
