import React from 'react';

import { BeachUmbrellaOutline as Icon16 } from '../Icon.assets.16/BeachUmbrellaOutline';
import { BeachUmbrellaOutline as Icon24 } from '../Icon.assets.24/BeachUmbrellaOutline';
import { BeachUmbrellaOutline as Icon36 } from '../Icon.assets.36/BeachUmbrellaOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBeachUmbrellaOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
