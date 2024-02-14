import React from 'react';

import { ZoomMinusOutline as Icon16 } from '../Icon.assets.16/ZoomMinusOutline';
import { ZoomMinusOutline as Icon24 } from '../Icon.assets.24/ZoomMinusOutline';
import { ZoomMinusOutline as Icon36 } from '../Icon.assets.36/ZoomMinusOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconZoomMinusOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
