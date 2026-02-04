import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { IconPlasma, IconSearch } from '@salutejs/plasma-icons';

const onToggle = action('onToggle');

const getIconSize = (size?: string) => {
    return size === 'xs' ? 'xs' : 's';
};

export const createDefaultStory = (TimePicker: any) => {
    return ({ enableContentLeft, enableContentRight, size, ...rest }: any) => {
        const [isOpen, setIsOpen] = useState(false);

        const iconSize = getIconSize(size);

        return (
            <TimePicker
                opened={isOpen}
                size={size}
                contentLeft={enableContentLeft ? <IconPlasma color="inherit" size={iconSize} /> : undefined}
                contentRight={enableContentRight ? <IconSearch color="inherit" size={iconSize} /> : undefined}
                onToggle={(is: boolean) => {
                    setIsOpen(is);
                    onToggle(is);
                }}
                {...rest}
            />
        );
    };
};
