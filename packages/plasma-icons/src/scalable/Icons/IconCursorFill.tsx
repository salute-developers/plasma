import React from 'react';

import { CursorFill as Icon16 } from '../Icon.assets.16/CursorFill';
import { CursorFill as Icon24 } from '../Icon.assets.24/CursorFill';
import { CursorFill as Icon36 } from '../Icon.assets.36/CursorFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCursorFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
