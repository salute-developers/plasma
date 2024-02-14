import React from 'react';

import { MusicPodcastFill as Icon16 } from '../Icon.assets.16/MusicPodcastFill';
import { MusicPodcastFill as Icon24 } from '../Icon.assets.24/MusicPodcastFill';
import { MusicPodcastFill as Icon36 } from '../Icon.assets.36/MusicPodcastFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMusicPodcastFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
