import React from 'react';

import { BallOutline as Icon16 } from '../Icon.assets.16/BallOutline';
import { BallOutline as Icon24 } from '../Icon.assets.24/BallOutline';
import { BallOutline as Icon36 } from '../Icon.assets.36/BallOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBallOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
