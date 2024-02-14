import React from 'react';

import { ViewPersonOutline as Icon16 } from '../Icon.assets.16/ViewPersonOutline';
import { ViewPersonOutline as Icon24 } from '../Icon.assets.24/ViewPersonOutline';
import { ViewPersonOutline as Icon36 } from '../Icon.assets.36/ViewPersonOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconViewPersonOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
