import React from 'react';

import { ContrastMaxFill as Icon16 } from '../Icon.assets.16/ContrastMaxFill';
import { ContrastMaxFill as Icon24 } from '../Icon.assets.24/ContrastMaxFill';
import { ContrastMaxFill as Icon36 } from '../Icon.assets.36/ContrastMaxFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconContrastMaxFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
