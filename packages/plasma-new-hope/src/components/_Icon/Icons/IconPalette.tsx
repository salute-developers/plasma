import React from 'react';

import { Palette } from '../Icon.assets/Palette';
import { IconRoot, IconProps } from '../IconRoot';

export const IconPalette = ({ size = 's', color, className, ...rest }: IconProps) => (
    <IconRoot className={className} size={size} color={color} icon={Palette} {...rest} />
);
