import React, { HTMLAttributes } from 'react';

import { DisclosureDownCentered } from '../Icon.assets/DisclosureDownCentered';
import { IconRoot, IconProps } from '../IconRoot';

export const IconDisclosureDownCentered: React.FC<IconProps & HTMLAttributes<HTMLDivElement>> = ({
    size = 'xs',
    color,
    className,
    ...rest
}) => {
    return <IconRoot className={className} size={size} color={color} icon={DisclosureDownCentered} {...rest} />;
};
