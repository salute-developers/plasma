import React from 'react';

import { TriangleFill as Icon16 } from '../Icon.assets.16/TriangleFill';
import { TriangleFill as Icon24 } from '../Icon.assets.24/TriangleFill';
import { TriangleFill as Icon36 } from '../Icon.assets.36/TriangleFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTriangleFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
