import React from 'react';

import { BankCardErrorFill as Icon16 } from '../Icon.assets.16/BankCardErrorFill';
import { BankCardErrorFill as Icon24 } from '../Icon.assets.24/BankCardErrorFill';
import { BankCardErrorFill as Icon36 } from '../Icon.assets.36/BankCardErrorFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBankCardErrorFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
