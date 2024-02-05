import React from 'react';

import { LineLinkToto as Icon16 } from '../Icon.assets.16/LineLinkToto';
import { LineLinkToto as Icon24 } from '../Icon.assets.24/LineLinkToto';
import { LineLinkToto as Icon36 } from '../Icon.assets.36/LineLinkToto';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconLineLinkToto: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
