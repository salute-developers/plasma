import React from 'react';

import { SafeDiagramFill as Icon16 } from '../Icon.assets.16/SafeDiagramFill';
import { SafeDiagramFill as Icon24 } from '../Icon.assets.24/SafeDiagramFill';
import { SafeDiagramFill as Icon36 } from '../Icon.assets.36/SafeDiagramFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSafeDiagramFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
