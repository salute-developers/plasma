import React from 'react';

import { CaseDiagramFill as Icon16 } from '../Icon.assets.16/CaseDiagramFill';
import { CaseDiagramFill as Icon24 } from '../Icon.assets.24/CaseDiagramFill';
import { CaseDiagramFill as Icon36 } from '../Icon.assets.36/CaseDiagramFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCaseDiagramFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
