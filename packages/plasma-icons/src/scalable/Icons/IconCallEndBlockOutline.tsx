import React from 'react';

import { CallEndBlockOutline as Icon16 } from '../Icon.assets.16/CallEndBlockOutline';
import { CallEndBlockOutline as Icon24 } from '../Icon.assets.24/CallEndBlockOutline';
import { CallEndBlockOutline as Icon36 } from '../Icon.assets.36/CallEndBlockOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCallEndBlockOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
