import React from 'react';

import { SberportalFill as Icon16 } from '../Icon.assets.16/SberportalFill';
import { SberportalFill as Icon24 } from '../Icon.assets.24/SberportalFill';
import { SberportalFill as Icon36 } from '../Icon.assets.36/SberportalFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSberportalFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
