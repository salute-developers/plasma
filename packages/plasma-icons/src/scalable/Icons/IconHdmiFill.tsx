import React from 'react';

import { HdmiFill as Icon16 } from '../Icon.assets.16/HdmiFill';
import { HdmiFill as Icon24 } from '../Icon.assets.24/HdmiFill';
import { HdmiFill as Icon36 } from '../Icon.assets.36/HdmiFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHdmiFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
