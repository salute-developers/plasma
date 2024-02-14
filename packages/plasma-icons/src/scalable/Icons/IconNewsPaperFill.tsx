import React from 'react';

import { NewsPaperFill as Icon16 } from '../Icon.assets.16/NewsPaperFill';
import { NewsPaperFill as Icon24 } from '../Icon.assets.24/NewsPaperFill';
import { NewsPaperFill as Icon36 } from '../Icon.assets.36/NewsPaperFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconNewsPaperFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
