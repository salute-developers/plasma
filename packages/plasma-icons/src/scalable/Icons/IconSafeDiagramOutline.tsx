import React from 'react';

import { SafeDiagramOutline as Icon16 } from '../Icon.assets.16/SafeDiagramOutline';
import { SafeDiagramOutline as Icon24 } from '../Icon.assets.24/SafeDiagramOutline';
import { SafeDiagramOutline as Icon36 } from '../Icon.assets.36/SafeDiagramOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSafeDiagramOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
