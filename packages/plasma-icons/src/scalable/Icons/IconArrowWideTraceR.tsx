import React from 'react';

import { ArrowWideTraceR as Icon16 } from '../Icon.assets.16/ArrowWideTraceR';
import { ArrowWideTraceR as Icon24 } from '../Icon.assets.24/ArrowWideTraceR';
import { ArrowWideTraceR as Icon36 } from '../Icon.assets.36/ArrowWideTraceR';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconArrowWideTraceR: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
