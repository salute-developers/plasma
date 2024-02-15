import React from 'react';

import { PlusCircleFill as Icon16 } from '../Icon.assets.16/PlusCircleFill';
import { PlusCircleFill as Icon24 } from '../Icon.assets.24/PlusCircleFill';
import { PlusCircleFill as Icon36 } from '../Icon.assets.36/PlusCircleFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPlusCircleFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
