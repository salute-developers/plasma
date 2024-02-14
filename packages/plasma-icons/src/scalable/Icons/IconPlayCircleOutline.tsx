import React from 'react';

import { PlayCircleOutline as Icon16 } from '../Icon.assets.16/PlayCircleOutline';
import { PlayCircleOutline as Icon24 } from '../Icon.assets.24/PlayCircleOutline';
import { PlayCircleOutline as Icon36 } from '../Icon.assets.36/PlayCircleOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPlayCircleOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
