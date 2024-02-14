import React from 'react';

import { TvFill as Icon16 } from '../Icon.assets.16/TvFill';
import { TvFill as Icon24 } from '../Icon.assets.24/TvFill';
import { TvFill as Icon36 } from '../Icon.assets.36/TvFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTvFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
