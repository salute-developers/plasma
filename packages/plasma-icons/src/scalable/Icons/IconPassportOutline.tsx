import React from 'react';

import { PassportOutline as Icon16 } from '../Icon.assets.16/PassportOutline';
import { PassportOutline as Icon24 } from '../Icon.assets.24/PassportOutline';
import { PassportOutline as Icon36 } from '../Icon.assets.36/PassportOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPassportOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
