import React, { HTMLAttributes } from 'react';

import { DisclosureRightCentered } from '../Icon.assets/DisclosureRightCentered';
import { IconRoot, IconProps } from '../IconRoot';

export const IconDisclosureRightCentered: React.FC<IconProps & HTMLAttributes<HTMLDivElement>> = ({
    size = 's',
    color,
    className,
    ...rest
}) => {
    return <IconRoot className={className} size={size} color={color} icon={DisclosureRightCentered} {...rest} />;
};
