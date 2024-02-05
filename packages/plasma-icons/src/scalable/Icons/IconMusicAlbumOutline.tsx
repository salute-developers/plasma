import React from 'react';

import { MusicAlbumOutline as Icon16 } from '../Icon.assets.16/MusicAlbumOutline';
import { MusicAlbumOutline as Icon24 } from '../Icon.assets.24/MusicAlbumOutline';
import { MusicAlbumOutline as Icon36 } from '../Icon.assets.36/MusicAlbumOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMusicAlbumOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
