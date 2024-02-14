import React from 'react';

import { Mindmap as Icon16 } from '../Icon.assets.16/Mindmap';
import { Mindmap as Icon24 } from '../Icon.assets.24/Mindmap';
import { Mindmap as Icon36 } from '../Icon.assets.36/Mindmap';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMindmap: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
