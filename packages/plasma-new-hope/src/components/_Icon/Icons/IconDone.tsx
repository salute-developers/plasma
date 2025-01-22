import React, { HTMLAttributes } from 'react';

import { Done } from '../Icon.assets/Done';
import { IconRoot, IconProps } from '../IconRoot';

export const IconDone: React.FC<IconProps & HTMLAttributes<HTMLDivElement>> = ({
    size = 's',
    color,
    className,
    ...rest
}) => {
    return <IconRoot className={className} size={size} color={color} icon={Done} {...rest} />;
};
