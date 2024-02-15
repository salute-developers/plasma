import React from 'react';

import { CarFill as Icon16 } from '../Icon.assets.16/CarFill';
import { CarFill as Icon24 } from '../Icon.assets.24/CarFill';
import { CarFill as Icon36 } from '../Icon.assets.36/CarFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCarFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
