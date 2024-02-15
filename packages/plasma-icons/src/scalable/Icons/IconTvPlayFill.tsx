import React from 'react';

import { TvPlayFill as Icon16 } from '../Icon.assets.16/TvPlayFill';
import { TvPlayFill as Icon24 } from '../Icon.assets.24/TvPlayFill';
import { TvPlayFill as Icon36 } from '../Icon.assets.36/TvPlayFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTvPlayFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
