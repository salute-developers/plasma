import React from 'react';

import { SaluteOutline as Icon16 } from '../Icon.assets.16/SaluteOutline';
import { SaluteOutline as Icon24 } from '../Icon.assets.24/SaluteOutline';
import { SaluteOutline as Icon36 } from '../Icon.assets.36/SaluteOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSaluteOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
