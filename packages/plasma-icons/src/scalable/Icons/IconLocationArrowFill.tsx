import React from 'react';

import { LocationArrowFill as Icon16 } from '../Icon.assets.16/LocationArrowFill';
import { LocationArrowFill as Icon24 } from '../Icon.assets.24/LocationArrowFill';
import { LocationArrowFill as Icon36 } from '../Icon.assets.36/LocationArrowFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconLocationArrowFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
