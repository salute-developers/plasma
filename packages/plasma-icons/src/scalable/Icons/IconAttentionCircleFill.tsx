import React from 'react';

import { AttentionCircleFill as Icon16 } from '../Icon.assets.16/AttentionCircleFill';
import { AttentionCircleFill as Icon24 } from '../Icon.assets.24/AttentionCircleFill';
import { AttentionCircleFill as Icon36 } from '../Icon.assets.36/AttentionCircleFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconAttentionCircleFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
