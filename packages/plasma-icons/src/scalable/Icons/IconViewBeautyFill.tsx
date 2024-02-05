import React from 'react';

import { ViewBeautyFill as Icon16 } from '../Icon.assets.16/ViewBeautyFill';
import { ViewBeautyFill as Icon24 } from '../Icon.assets.24/ViewBeautyFill';
import { ViewBeautyFill as Icon36 } from '../Icon.assets.36/ViewBeautyFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconViewBeautyFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
