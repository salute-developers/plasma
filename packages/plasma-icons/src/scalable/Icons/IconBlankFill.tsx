import React from 'react';

import { BlankFill as Icon16 } from '../Icon.assets.16/BlankFill';
import { BlankFill as Icon24 } from '../Icon.assets.24/BlankFill';
import { BlankFill as Icon36 } from '../Icon.assets.36/BlankFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBlankFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
