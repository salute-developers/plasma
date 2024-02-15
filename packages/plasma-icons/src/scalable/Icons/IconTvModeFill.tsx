import React from 'react';

import { TvModeFill as Icon16 } from '../Icon.assets.16/TvModeFill';
import { TvModeFill as Icon24 } from '../Icon.assets.24/TvModeFill';
import { TvModeFill as Icon36 } from '../Icon.assets.36/TvModeFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTvModeFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
