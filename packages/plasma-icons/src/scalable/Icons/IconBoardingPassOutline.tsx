import React from 'react';

import { BoardingPassOutline as Icon16 } from '../Icon.assets.16/BoardingPassOutline';
import { BoardingPassOutline as Icon24 } from '../Icon.assets.24/BoardingPassOutline';
import { BoardingPassOutline as Icon36 } from '../Icon.assets.36/BoardingPassOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBoardingPassOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
