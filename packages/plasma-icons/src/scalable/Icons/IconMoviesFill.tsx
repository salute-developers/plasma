import React from 'react';

import { MoviesFill as Icon16 } from '../Icon.assets.16/MoviesFill';
import { MoviesFill as Icon24 } from '../Icon.assets.24/MoviesFill';
import { MoviesFill as Icon36 } from '../Icon.assets.36/MoviesFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMoviesFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
