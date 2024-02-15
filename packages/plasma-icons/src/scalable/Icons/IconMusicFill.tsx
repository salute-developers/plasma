import React from 'react';

import { MusicFill as Icon16 } from '../Icon.assets.16/MusicFill';
import { MusicFill as Icon24 } from '../Icon.assets.24/MusicFill';
import { MusicFill as Icon36 } from '../Icon.assets.36/MusicFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMusicFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
