import React from 'react';

import { InputsFill as Icon16 } from '../Icon.assets.16/InputsFill';
import { InputsFill as Icon24 } from '../Icon.assets.24/InputsFill';
import { InputsFill as Icon36 } from '../Icon.assets.36/InputsFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconInputsFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
