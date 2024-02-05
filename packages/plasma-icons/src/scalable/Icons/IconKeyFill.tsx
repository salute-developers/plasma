import React from 'react';

import { KeyFill as Icon16 } from '../Icon.assets.16/KeyFill';
import { KeyFill as Icon24 } from '../Icon.assets.24/KeyFill';
import { KeyFill as Icon36 } from '../Icon.assets.36/KeyFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconKeyFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
