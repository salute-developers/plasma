import React from 'react';

import { AttentionTriangleFill as Icon16 } from '../Icon.assets.16/AttentionTriangleFill';
import { AttentionTriangleFill as Icon24 } from '../Icon.assets.24/AttentionTriangleFill';
import { AttentionTriangleFill as Icon36 } from '../Icon.assets.36/AttentionTriangleFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconAttentionTriangleFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
