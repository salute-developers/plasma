import React from 'react';

import { CaseBusinessOutline as Icon16 } from '../Icon.assets.16/CaseBusinessOutline';
import { CaseBusinessOutline as Icon24 } from '../Icon.assets.24/CaseBusinessOutline';
import { CaseBusinessOutline as Icon36 } from '../Icon.assets.36/CaseBusinessOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCaseBusinessOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
