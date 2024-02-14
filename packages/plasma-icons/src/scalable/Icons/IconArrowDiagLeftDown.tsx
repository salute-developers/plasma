import React from 'react';

import { ArrowDiagLeftDown as Icon16 } from '../Icon.assets.16/ArrowDiagLeftDown';
import { ArrowDiagLeftDown as Icon24 } from '../Icon.assets.24/ArrowDiagLeftDown';
import { ArrowDiagLeftDown as Icon36 } from '../Icon.assets.36/ArrowDiagLeftDown';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconArrowDiagLeftDown: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
