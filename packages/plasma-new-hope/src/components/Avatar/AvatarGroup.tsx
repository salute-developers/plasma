import React, { forwardRef } from 'react';
import { css } from '@linaria/core';

import { RootProps, component, mergeConfig } from '../../engines';

import { base as size } from './AvatarGroup/variations/_size/base';
import { base as view } from './AvatarGroup/variations/_view/base';
import { avatarConfig, AvatarProps } from './Avatar';
import { classes } from './AvatarGroup.tokens';

const mergedConfig = mergeConfig(avatarConfig);
const Avatar = component(mergedConfig);

type AvatarGroupProps = React.HTMLAttributes<HTMLDivElement> & {
    size: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
    visibleCount: number;
    items: AvatarProps[];
};

const base = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .${classes.avatarItem} {
        margin-left: calc(var(--plasma-avatar-group-size) * -0.2);
        box-shadow: 0 0 0 calc(var(--plasma-avatar-group-size) * 0.05) var(--plasma-colors-white);
    }
`;

export const avatarGroupRoot = (Root: RootProps<HTMLDivElement, AvatarGroupProps>) => {
    return forwardRef<HTMLDivElement, AvatarGroupProps>((props, ref) => {
        const { size, visibleCount, items, ...rest } = props;
        const itemLength = items.length;
        const itemsForRender = [...items].slice(0, visibleCount);

        return (
            <Root ref={ref} size={size} visibleCount={visibleCount} items={items} {...rest}>
                {itemsForRender.map((item) => {
                    return (
                        <Avatar
                            key={item.name}
                            className={classes.avatarItem}
                            size={size}
                            url={item.url}
                            name={item.name}
                        />
                    );
                })}
                {itemLength > visibleCount && (
                    <Avatar className="avatar-item" size={size} customText={`+${itemLength - visibleCount}`} />
                )}
            </Root>
        );
    });
};

export const avatarGroupConfig = {
    name: 'AvatarGroup',
    tag: 'div',
    layout: avatarGroupRoot,
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
