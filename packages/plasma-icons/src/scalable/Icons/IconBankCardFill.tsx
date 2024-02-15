import React from 'react';

import { BankCardFill as Icon16 } from '../Icon.assets.16/BankCardFill';
import { BankCardFill as Icon24 } from '../Icon.assets.24/BankCardFill';
import { BankCardFill as Icon36 } from '../Icon.assets.36/BankCardFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBankCardFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
