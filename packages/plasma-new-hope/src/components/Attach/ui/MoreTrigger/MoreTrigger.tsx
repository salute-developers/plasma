import React from 'react';
import { IconDotsHorizontalOutline } from 'src/components/_Icon';

import { IconWrapper } from './MoreTrigger.styles';

type MoreTriggerProps = {
    size?: string;
};

export const MoreTrigger = ({ size }: MoreTriggerProps) => {
    const iconSize = size === 'xs' ? 'xs' : 's';

    return (
        <IconWrapper>
            <IconDotsHorizontalOutline size={iconSize} color="inherit" />
        </IconWrapper>
    );
};
