import React from 'react';

import { GlobeFill as Icon16 } from '../Icon.assets.16/GlobeFill';
import { GlobeFill as Icon24 } from '../Icon.assets.24/GlobeFill';
import { GlobeFill as Icon36 } from '../Icon.assets.36/GlobeFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconGlobeFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
