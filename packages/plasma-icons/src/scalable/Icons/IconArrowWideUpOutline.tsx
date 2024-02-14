import React from 'react';

import { ArrowWideUpOutline as Icon16 } from '../Icon.assets.16/ArrowWideUpOutline';
import { ArrowWideUpOutline as Icon24 } from '../Icon.assets.24/ArrowWideUpOutline';
import { ArrowWideUpOutline as Icon36 } from '../Icon.assets.36/ArrowWideUpOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconArrowWideUpOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
