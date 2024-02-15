import React from 'react';

import { TvModeOutline as Icon16 } from '../Icon.assets.16/TvModeOutline';
import { TvModeOutline as Icon24 } from '../Icon.assets.24/TvModeOutline';
import { TvModeOutline as Icon36 } from '../Icon.assets.36/TvModeOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTvModeOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
