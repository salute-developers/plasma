import React from 'react';

import { BlankTextFill as Icon16 } from '../Icon.assets.16/BlankTextFill';
import { BlankTextFill as Icon24 } from '../Icon.assets.24/BlankTextFill';
import { BlankTextFill as Icon36 } from '../Icon.assets.36/BlankTextFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBlankTextFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
