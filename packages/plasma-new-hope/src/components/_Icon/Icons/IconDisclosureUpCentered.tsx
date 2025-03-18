import React, { HTMLAttributes } from 'react';

import { DisclosureUpCentered } from '../Icon.assets/DisclosureUpCentered';
import { IconRoot, IconProps } from '../IconRoot';

export const IconDisclosureUpCentered: React.FC<IconProps & HTMLAttributes<HTMLDivElement>> = ({
    size = 'xs',
    color,
    className,
    ...rest
}) => {
    return <IconRoot className={className} size={size} color={color} icon={DisclosureUpCentered} {...rest} />;
};
