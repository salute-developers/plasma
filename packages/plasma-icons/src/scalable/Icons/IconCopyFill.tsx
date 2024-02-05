import React from 'react';

import { CopyFill as Icon16 } from '../Icon.assets.16/CopyFill';
import { CopyFill as Icon24 } from '../Icon.assets.24/CopyFill';
import { CopyFill as Icon36 } from '../Icon.assets.36/CopyFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCopyFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
