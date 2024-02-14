import React from 'react';

import { ArrowWideRightOutline as Icon16 } from '../Icon.assets.16/ArrowWideRightOutline';
import { ArrowWideRightOutline as Icon24 } from '../Icon.assets.24/ArrowWideRightOutline';
import { ArrowWideRightOutline as Icon36 } from '../Icon.assets.36/ArrowWideRightOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconArrowWideRightOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
