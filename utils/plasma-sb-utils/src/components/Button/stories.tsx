import React from 'react';
import { action } from '@storybook/addon-actions';
import { IconMic } from '@salutejs/plasma-icons';

const onClick = action('onClick');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

const getIconSize = (size: string) => (size === 'xs' || size === 'xxs' ? 'xs' : 's');
const shouldShowIcon = (enabled: boolean, size: string) => enabled && size !== 'xxs';

export const createDefaultStory = (Button: any) => {
    return ({ enableContentLeft, enableContentRight, size, ...rest }: any) => {
        const computedContentSlot = (predicate: boolean) =>
            predicate ? <IconMic size={getIconSize(size)} color="inherit" /> : undefined;

        return (
            <Button
                contentLeft={computedContentSlot(shouldShowIcon(enableContentLeft, size))}
                contentRight={computedContentSlot(shouldShowIcon(enableContentRight, size))}
                size={size}
                onClick={onClick}
                onFocus={onFocus}
                onBlur={onBlur}
                {...rest}
            />
        );
    };
};
