import React, { HTMLAttributes } from 'react';

import { SendOutline } from '../Icon.assets/SendOutline';
import { IconRoot, IconProps } from '../IconRoot';

export const IconSendOutline: React.FC<IconProps & HTMLAttributes<HTMLDivElement>> = ({
    size = 's',
    color,
    className,
    ...rest
}) => {
    return <IconRoot className={className} size={size} color={color} icon={SendOutline} {...rest} />;
};
