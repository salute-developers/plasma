import React from 'react';

import { MusicAlbumFill as Icon16 } from '../Icon.assets.16/MusicAlbumFill';
import { MusicAlbumFill as Icon24 } from '../Icon.assets.24/MusicAlbumFill';
import { MusicAlbumFill as Icon36 } from '../Icon.assets.36/MusicAlbumFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMusicAlbumFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
