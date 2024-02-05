import React from 'react';

import { HeadphonesFill as Icon16 } from '../Icon.assets.16/HeadphonesFill';
import { HeadphonesFill as Icon24 } from '../Icon.assets.24/HeadphonesFill';
import { HeadphonesFill as Icon36 } from '../Icon.assets.36/HeadphonesFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHeadphonesFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
