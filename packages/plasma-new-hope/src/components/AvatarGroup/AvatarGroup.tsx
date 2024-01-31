import React, { forwardRef } from 'react';

import { RootProps } from '../../engines';

import { base } from './AvatarGroup.styles';
import { AvatarGroupProps } from './AvatarGroup.types';

export const avatarGroupRoot = (Root: RootProps<HTMLDivElement, AvatarGroupProps>) => {
    return forwardRef<HTMLDivElement, AvatarGroupProps>((props, ref) => {
        const { children, ...rest } = props;

        return (
            <Root ref={ref} {...rest}>
                {children}
            </Root>
        );
    });
};

export const avatarGroupConfig = {
    name: 'AvatarGroup',
    tag: 'div',
    layout: avatarGroupRoot,
    base,
    variations: {},
    defaults: {},
};
