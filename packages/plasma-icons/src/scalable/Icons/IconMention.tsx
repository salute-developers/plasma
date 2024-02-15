import React from 'react';

import { Mention as Icon16 } from '../Icon.assets.16/Mention';
import { Mention as Icon24 } from '../Icon.assets.24/Mention';
import { Mention as Icon36 } from '../Icon.assets.36/Mention';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMention: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
