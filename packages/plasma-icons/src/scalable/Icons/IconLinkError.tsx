import React from 'react';

import { LinkError as Icon16 } from '../Icon.assets.16/LinkError';
import { LinkError as Icon24 } from '../Icon.assets.24/LinkError';
import { LinkError as Icon36 } from '../Icon.assets.36/LinkError';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconLinkError: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
