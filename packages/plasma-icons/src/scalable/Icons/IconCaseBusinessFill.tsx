import React from 'react';

import { CaseBusinessFill as Icon16 } from '../Icon.assets.16/CaseBusinessFill';
import { CaseBusinessFill as Icon24 } from '../Icon.assets.24/CaseBusinessFill';
import { CaseBusinessFill as Icon36 } from '../Icon.assets.36/CaseBusinessFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCaseBusinessFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
