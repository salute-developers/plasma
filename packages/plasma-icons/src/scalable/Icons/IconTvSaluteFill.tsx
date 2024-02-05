import React from 'react';

import { TvSaluteFill as Icon16 } from '../Icon.assets.16/TvSaluteFill';
import { TvSaluteFill as Icon24 } from '../Icon.assets.24/TvSaluteFill';
import { TvSaluteFill as Icon36 } from '../Icon.assets.36/TvSaluteFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTvSaluteFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
