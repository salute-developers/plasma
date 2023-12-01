import React, { forwardRef, useMemo } from 'react';
import { css } from '@linaria/core';

import { RootProps } from '../../engines';
import { IconSilhouette } from '../_Icon/IconSilhouette';

import { base as size } from './Avatar/variations/_size/base';
import { base as view } from './Avatar/variations/_view/base';
import { classes } from './Avatar.tokens';

export type AvatarProps = React.HTMLAttributes<HTMLDivElement> & {
    size: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
    name?: string;
    url?: string;
    customText?: string;
};

const base = css`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`;

export const getInitialsForName = (name: string | undefined) => {
    if (!name) {
        return '';
    }

    const words = name.split(' ');
    const firstLetter = words[0] ? words[0][0] : '';
    const secondLatter = words[1] ? words[1][0] : '';

    return `${firstLetter.toUpperCase()}${secondLatter.toUpperCase()}`;
};

export const avatarRoot = (Root: RootProps<HTMLDivElement, AvatarProps>) => {
    return forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
        const { size: avatarSize, name, url, customText, ...rest } = props;

        const initials = useMemo(() => getInitialsForName(name), [name]);

        return (
            <Root ref={ref} size={avatarSize} {...rest}>
                {customText ||
                    (url ? (
                        <img className={classes.avatarImage} src={url} alt={name} />
                    ) : (
                        initials || <IconSilhouette size={avatarSize} />
                    ))}
            </Root>
        );
    });
};

export const avatarConfig = {
    name: 'Avatar',
    tag: 'div',
    layout: avatarRoot,
    base,
    variations: {
        size: {
            css: size,
        },
        view: {
            css: view,
        },
    },
    defaults: {
        size: 'm',
        view: 'default',
    },
};
