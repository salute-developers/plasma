import React from 'react';

import { HummerFill as Icon16 } from '../Icon.assets.16/HummerFill';
import { HummerFill as Icon24 } from '../Icon.assets.24/HummerFill';
import { HummerFill as Icon36 } from '../Icon.assets.36/HummerFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHummerFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
