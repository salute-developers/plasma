import React from 'react';

import { PlayOutline as Icon16 } from '../Icon.assets.16/PlayOutline';
import { PlayOutline as Icon24 } from '../Icon.assets.24/PlayOutline';
import { PlayOutline as Icon36 } from '../Icon.assets.36/PlayOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPlayOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
