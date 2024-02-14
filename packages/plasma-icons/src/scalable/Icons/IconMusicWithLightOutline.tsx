import React from 'react';

import { MusicWithLightOutline as Icon16 } from '../Icon.assets.16/MusicWithLightOutline';
import { MusicWithLightOutline as Icon24 } from '../Icon.assets.24/MusicWithLightOutline';
import { MusicWithLightOutline as Icon36 } from '../Icon.assets.36/MusicWithLightOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMusicWithLightOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
