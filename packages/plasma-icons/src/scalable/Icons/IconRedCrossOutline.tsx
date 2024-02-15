import React from 'react';

import { RedCrossOutline as Icon16 } from '../Icon.assets.16/RedCrossOutline';
import { RedCrossOutline as Icon24 } from '../Icon.assets.24/RedCrossOutline';
import { RedCrossOutline as Icon36 } from '../Icon.assets.36/RedCrossOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconRedCrossOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
