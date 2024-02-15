import React from 'react';

import { MinusSquareFill as Icon16 } from '../Icon.assets.16/MinusSquareFill';
import { MinusSquareFill as Icon24 } from '../Icon.assets.24/MinusSquareFill';
import { MinusSquareFill as Icon36 } from '../Icon.assets.36/MinusSquareFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMinusSquareFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
