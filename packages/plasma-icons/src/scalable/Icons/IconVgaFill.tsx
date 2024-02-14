import React from 'react';

import { VgaFill as Icon16 } from '../Icon.assets.16/VgaFill';
import { VgaFill as Icon24 } from '../Icon.assets.24/VgaFill';
import { VgaFill as Icon36 } from '../Icon.assets.36/VgaFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconVgaFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
