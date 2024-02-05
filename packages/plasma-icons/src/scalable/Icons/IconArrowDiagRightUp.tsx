import React from 'react';

import { ArrowDiagRightUp as Icon16 } from '../Icon.assets.16/ArrowDiagRightUp';
import { ArrowDiagRightUp as Icon24 } from '../Icon.assets.24/ArrowDiagRightUp';
import { ArrowDiagRightUp as Icon36 } from '../Icon.assets.36/ArrowDiagRightUp';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconArrowDiagRightUp: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
