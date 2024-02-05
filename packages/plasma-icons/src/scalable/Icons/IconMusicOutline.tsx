import React from 'react';

import { MusicOutline as Icon16 } from '../Icon.assets.16/MusicOutline';
import { MusicOutline as Icon24 } from '../Icon.assets.24/MusicOutline';
import { MusicOutline as Icon36 } from '../Icon.assets.36/MusicOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMusicOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
