import React from 'react';

import { SberboxPackFill as Icon16 } from '../Icon.assets.16/SberboxPackFill';
import { SberboxPackFill as Icon24 } from '../Icon.assets.24/SberboxPackFill';
import { SberboxPackFill as Icon36 } from '../Icon.assets.36/SberboxPackFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSberboxPackFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
