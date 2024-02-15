import React from 'react';

import { BookFill as Icon16 } from '../Icon.assets.16/BookFill';
import { BookFill as Icon24 } from '../Icon.assets.24/BookFill';
import { BookFill as Icon36 } from '../Icon.assets.36/BookFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBookFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
