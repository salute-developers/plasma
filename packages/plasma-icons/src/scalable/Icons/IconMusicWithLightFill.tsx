import React from 'react';

import { MusicWithLightFill as Icon16 } from '../Icon.assets.16/MusicWithLightFill';
import { MusicWithLightFill as Icon24 } from '../Icon.assets.24/MusicWithLightFill';
import { MusicWithLightFill as Icon36 } from '../Icon.assets.36/MusicWithLightFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMusicWithLightFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
