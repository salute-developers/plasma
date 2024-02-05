import React from 'react';

import { Link as Icon16 } from '../Icon.assets.16/Link';
import { Link as Icon24 } from '../Icon.assets.24/Link';
import { Link as Icon36 } from '../Icon.assets.36/Link';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconLink: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
