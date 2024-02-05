import React from 'react';

import { EditFill as Icon16 } from '../Icon.assets.16/EditFill';
import { EditFill as Icon24 } from '../Icon.assets.24/EditFill';
import { EditFill as Icon36 } from '../Icon.assets.36/EditFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconEditFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
