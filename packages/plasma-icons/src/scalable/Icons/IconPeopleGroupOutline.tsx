import React from 'react';

import { PeopleGroupOutline as Icon16 } from '../Icon.assets.16/PeopleGroupOutline';
import { PeopleGroupOutline as Icon24 } from '../Icon.assets.24/PeopleGroupOutline';
import { PeopleGroupOutline as Icon36 } from '../Icon.assets.36/PeopleGroupOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPeopleGroupOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
