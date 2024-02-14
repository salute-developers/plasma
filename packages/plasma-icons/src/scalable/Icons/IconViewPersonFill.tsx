import React from 'react';

import { ViewPersonFill as Icon16 } from '../Icon.assets.16/ViewPersonFill';
import { ViewPersonFill as Icon24 } from '../Icon.assets.24/ViewPersonFill';
import { ViewPersonFill as Icon36 } from '../Icon.assets.36/ViewPersonFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconViewPersonFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
