import React from 'react';

import { PeopleGroupFill as Icon16 } from '../Icon.assets.16/PeopleGroupFill';
import { PeopleGroupFill as Icon24 } from '../Icon.assets.24/PeopleGroupFill';
import { PeopleGroupFill as Icon36 } from '../Icon.assets.36/PeopleGroupFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPeopleGroupFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
