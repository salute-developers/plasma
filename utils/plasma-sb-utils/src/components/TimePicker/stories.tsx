import React, { useState } from 'react';
import { action } from 'storybook/actions';
import { IconPlasma, IconSearch } from '@salutejs/plasma-icons';
import type { IconProps } from '@salutejs/plasma-icons';

const onToggle = action('onToggle');

const getIconSize = (size?: string) => {
    return size === 'xs' ? 'xs' : 's';
};

const getIcon = (IconComponent: React.FC<IconProps>, size: string) => {
    return <IconComponent size={getIconSize(size)} color="inherit" />;
};

export const createDefaultStory = (
    TimePicker: any,
    customIcon?: (size: string, type?: 'left' | 'right', disabled?: boolean, readOnly?: boolean) => JSX.Element,
) => {
    return ({ enableContentLeft, enableContentRight, size, min, max, ...rest }: any) => {
        const [isOpen, setIsOpen] = useState(false);

        const defaultIconsByType = { left: IconPlasma, right: IconSearch };

        const innerGetIcon = (type: 'left' | 'right') => {
            return customIcon
                ? customIcon(size, type, rest.disabled, rest.readOnly)
                : getIcon(defaultIconsByType[type], size);
        };

        return (
            <TimePicker
                opened={isOpen}
                size={size}
                contentLeft={enableContentLeft ? innerGetIcon('left') : undefined}
                contentRight={enableContentRight ? innerGetIcon('right') : undefined}
                onToggle={(is: boolean) => {
                    setIsOpen(is);
                    onToggle(is);
                }}
                {...(min && { min })}
                {...(max && { max })}
                {...rest}
            />
        );
    };
};
