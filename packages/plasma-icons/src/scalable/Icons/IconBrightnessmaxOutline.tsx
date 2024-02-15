import React from 'react';

import { BrightnessmaxOutline as Icon16 } from '../Icon.assets.16/BrightnessmaxOutline';
import { BrightnessmaxOutline as Icon24 } from '../Icon.assets.24/BrightnessmaxOutline';
import { BrightnessmaxOutline as Icon36 } from '../Icon.assets.36/BrightnessmaxOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBrightnessmaxOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
