import React from 'react';

import { ZoomPlusFill as Icon16 } from '../Icon.assets.16/ZoomPlusFill';
import { ZoomPlusFill as Icon24 } from '../Icon.assets.24/ZoomPlusFill';
import { ZoomPlusFill as Icon36 } from '../Icon.assets.36/ZoomPlusFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconZoomPlusFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
