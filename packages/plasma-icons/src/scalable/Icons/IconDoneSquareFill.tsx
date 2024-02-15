import React from 'react';

import { DoneSquareFill as Icon16 } from '../Icon.assets.16/DoneSquareFill';
import { DoneSquareFill as Icon24 } from '../Icon.assets.24/DoneSquareFill';
import { DoneSquareFill as Icon36 } from '../Icon.assets.36/DoneSquareFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDoneSquareFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
