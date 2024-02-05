import React from 'react';

import { CloseSquareFill as Icon16 } from '../Icon.assets.16/CloseSquareFill';
import { CloseSquareFill as Icon24 } from '../Icon.assets.24/CloseSquareFill';
import { CloseSquareFill as Icon36 } from '../Icon.assets.36/CloseSquareFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCloseSquareFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
