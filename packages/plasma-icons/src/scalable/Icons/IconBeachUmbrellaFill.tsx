import React from 'react';

import { BeachUmbrellaFill as Icon16 } from '../Icon.assets.16/BeachUmbrellaFill';
import { BeachUmbrellaFill as Icon24 } from '../Icon.assets.24/BeachUmbrellaFill';
import { BeachUmbrellaFill as Icon36 } from '../Icon.assets.36/BeachUmbrellaFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBeachUmbrellaFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
