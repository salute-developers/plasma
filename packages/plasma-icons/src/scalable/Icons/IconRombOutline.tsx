import React from 'react';

import { RombOutline as Icon16 } from '../Icon.assets.16/RombOutline';
import { RombOutline as Icon24 } from '../Icon.assets.24/RombOutline';
import { RombOutline as Icon36 } from '../Icon.assets.36/RombOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconRombOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
