import React from 'react';

import { BankCardForwardFill as Icon16 } from '../Icon.assets.16/BankCardForwardFill';
import { BankCardForwardFill as Icon24 } from '../Icon.assets.24/BankCardForwardFill';
import { BankCardForwardFill as Icon36 } from '../Icon.assets.36/BankCardForwardFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBankCardForwardFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
