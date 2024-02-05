import React from 'react';

import { EducationFill as Icon16 } from '../Icon.assets.16/EducationFill';
import { EducationFill as Icon24 } from '../Icon.assets.24/EducationFill';
import { EducationFill as Icon36 } from '../Icon.assets.36/EducationFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconEducationFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
