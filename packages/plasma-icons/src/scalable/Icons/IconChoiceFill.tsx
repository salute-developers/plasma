import React from 'react';

import { ChoiceFill as Icon16 } from '../Icon.assets.16/ChoiceFill';
import { ChoiceFill as Icon24 } from '../Icon.assets.24/ChoiceFill';
import { ChoiceFill as Icon36 } from '../Icon.assets.36/ChoiceFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconChoiceFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
