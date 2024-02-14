import React from 'react';

import { MusicMicFill as Icon16 } from '../Icon.assets.16/MusicMicFill';
import { MusicMicFill as Icon24 } from '../Icon.assets.24/MusicMicFill';
import { MusicMicFill as Icon36 } from '../Icon.assets.36/MusicMicFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMusicMicFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
