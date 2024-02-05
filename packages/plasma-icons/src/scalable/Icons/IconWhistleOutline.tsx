import React from 'react';

import { WhistleOutline as Icon16 } from '../Icon.assets.16/WhistleOutline';
import { WhistleOutline as Icon24 } from '../Icon.assets.24/WhistleOutline';
import { WhistleOutline as Icon36 } from '../Icon.assets.36/WhistleOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconWhistleOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
