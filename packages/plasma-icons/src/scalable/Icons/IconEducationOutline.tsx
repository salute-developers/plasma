import React from 'react';

import { EducationOutline as Icon16 } from '../Icon.assets.16/EducationOutline';
import { EducationOutline as Icon24 } from '../Icon.assets.24/EducationOutline';
import { EducationOutline as Icon36 } from '../Icon.assets.36/EducationOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconEducationOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
