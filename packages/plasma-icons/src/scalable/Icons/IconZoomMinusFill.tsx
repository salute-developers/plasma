import React from 'react';

import { ZoomMinusFill as Icon16 } from '../Icon.assets.16/ZoomMinusFill';
import { ZoomMinusFill as Icon24 } from '../Icon.assets.24/ZoomMinusFill';
import { ZoomMinusFill as Icon36 } from '../Icon.assets.36/ZoomMinusFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconZoomMinusFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
