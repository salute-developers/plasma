import React from 'react';

import { Button2x1LFill as Icon16 } from '../Icon.assets.16/Button2x1LFill';
import { Button2x1LFill as Icon24 } from '../Icon.assets.24/Button2x1LFill';
import { Button2x1LFill as Icon36 } from '../Icon.assets.36/Button2x1LFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconButton2x1LFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
