import React from 'react';

import { PeopleGroupBigFill as Icon16 } from '../Icon.assets.16/PeopleGroupBigFill';
import { PeopleGroupBigFill as Icon24 } from '../Icon.assets.24/PeopleGroupBigFill';
import { PeopleGroupBigFill as Icon36 } from '../Icon.assets.36/PeopleGroupBigFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPeopleGroupBigFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
