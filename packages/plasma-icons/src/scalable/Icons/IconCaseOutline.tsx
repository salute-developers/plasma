import React from 'react';

import { CaseOutline as Icon16 } from '../Icon.assets.16/CaseOutline';
import { CaseOutline as Icon24 } from '../Icon.assets.24/CaseOutline';
import { CaseOutline as Icon36 } from '../Icon.assets.36/CaseOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCaseOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
