import React from 'react';

import { Scribble as Icon16 } from '../Icon.assets.16/Scribble';
import { Scribble as Icon24 } from '../Icon.assets.24/Scribble';
import { Scribble as Icon36 } from '../Icon.assets.36/Scribble';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconScribble: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
