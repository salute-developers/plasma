import React from 'react';
import { action } from '@storybook/addon-actions';
import { IconMic } from '@salutejs/plasma-icons';

const counterSizeMap: any = {
    xxs: 'xxs',
    xs: 'xxs',
    s: 'xxs',
    m: 'xs',
    l: 's',
    xl: 's',
};

const onClick = action('onClick');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

const getIconSize = (size: string) => (size === 'xs' || size === 'xxs' ? 'xs' : 's');
const getCounterSize = (size: string) => counterSizeMap?.[size] ?? 's';
const shouldShowIcon = (enabled: boolean, size: string) => enabled && size !== 'xxs';

export const createDefaultStory = (Button: any, Components: any) => {
    const { Counter, Icon } = Components;

    const getIcon = (size: string) => {
        return Icon ? <Icon size={size} color="inherit" /> : <IconMic size={getIconSize(size)} color="inherit" />;
    };
    return ({ enableContentLeft, enableContentRight, enableCounter, size, ...rest }: any) => {
        const computedContentSlot = (predicate: boolean) => (predicate ? getIcon(size) : undefined);
        const computedCounterSlot = (predicate: boolean) =>
            predicate ? <Counter view="accent" size={getCounterSize(size)} count={0} /> : undefined;

        return (
            <Button
                contentLeft={computedContentSlot(shouldShowIcon(enableContentLeft, size))}
                contentRight={computedContentSlot(shouldShowIcon(enableContentRight, size))}
                additionalContent={computedCounterSlot(enableCounter)}
                size={size}
                onClick={onClick}
                onFocus={onFocus}
                onBlur={onBlur}
                {...rest}
            />
        );
    };
};
