import React from 'react';

import { MobilePlusFill as Icon16 } from '../Icon.assets.16/MobilePlusFill';
import { MobilePlusFill as Icon24 } from '../Icon.assets.24/MobilePlusFill';
import { MobilePlusFill as Icon36 } from '../Icon.assets.36/MobilePlusFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMobilePlusFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
