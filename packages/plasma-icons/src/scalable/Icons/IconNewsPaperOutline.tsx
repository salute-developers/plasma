import React from 'react';

import { NewsPaperOutline as Icon16 } from '../Icon.assets.16/NewsPaperOutline';
import { NewsPaperOutline as Icon24 } from '../Icon.assets.24/NewsPaperOutline';
import { NewsPaperOutline as Icon36 } from '../Icon.assets.36/NewsPaperOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconNewsPaperOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
