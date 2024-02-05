import React from 'react';

import { PostcardFill as Icon16 } from '../Icon.assets.16/PostcardFill';
import { PostcardFill as Icon24 } from '../Icon.assets.24/PostcardFill';
import { PostcardFill as Icon36 } from '../Icon.assets.36/PostcardFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPostcardFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
