import React, { HTMLAttributes } from 'react';

import { DisclosureRight } from '../Icon.assets/DisclosureRight';
import { IconRoot, IconProps } from '../IconRoot';

export const IconDisclosureRight: React.FC<IconProps & HTMLAttributes<HTMLDivElement>> = ({
    size = 's',
    color,
    className,
    ...rest
}) => {
    return <IconRoot className={className} size={size} color={color} icon={DisclosureRight} {...rest} />;
};
