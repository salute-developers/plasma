import React from 'react';

import { SberportalBulbFill as Icon16 } from '../Icon.assets.16/SberportalBulbFill';
import { SberportalBulbFill as Icon24 } from '../Icon.assets.24/SberportalBulbFill';
import { SberportalBulbFill as Icon36 } from '../Icon.assets.36/SberportalBulbFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSberportalBulbFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
