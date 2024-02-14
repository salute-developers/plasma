import React from 'react';

import { ArrowWideDownOutline as Icon16 } from '../Icon.assets.16/ArrowWideDownOutline';
import { ArrowWideDownOutline as Icon24 } from '../Icon.assets.24/ArrowWideDownOutline';
import { ArrowWideDownOutline as Icon36 } from '../Icon.assets.36/ArrowWideDownOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconArrowWideDownOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
