import React from 'react';

import { MusicPodcastOutline as Icon16 } from '../Icon.assets.16/MusicPodcastOutline';
import { MusicPodcastOutline as Icon24 } from '../Icon.assets.24/MusicPodcastOutline';
import { MusicPodcastOutline as Icon36 } from '../Icon.assets.36/MusicPodcastOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMusicPodcastOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
