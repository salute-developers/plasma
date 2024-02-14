import React from 'react';

import { SberbomError as Icon16 } from '../Icon.assets.16/SberbomError';
import { SberbomError as Icon24 } from '../Icon.assets.24/SberbomError';
import { SberbomError as Icon36 } from '../Icon.assets.36/SberbomError';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSberbomError: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
