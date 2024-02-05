import React from 'react';

import { EyeClosedFill as Icon16 } from '../Icon.assets.16/EyeClosedFill';
import { EyeClosedFill as Icon24 } from '../Icon.assets.24/EyeClosedFill';
import { EyeClosedFill as Icon36 } from '../Icon.assets.36/EyeClosedFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconEyeClosedFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
