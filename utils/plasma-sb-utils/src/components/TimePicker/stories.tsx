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

const getPlaceholder = (columnsQuantity?: 2 | 3) => {
    return columnsQuantity === 3 ? '00:00:00' : '00:00';
};

export const createDefaultStory = (
    TimePicker: any,
    customIcon?: (
        size: string,
        type?: 'left' | 'right',
        disabled?: boolean,
        readOnly?: boolean,
        opened?: boolean,
    ) => JSX.Element,
) => {
    return ({ enableContentLeft, enableContentRight, size, min, max, placeholder, ...rest }: any) => {
        const [isOpen, setIsOpen] = useState(false);

        const defaultIconsByType = { left: IconPlasma, right: IconSearch };

        const innerGetIcon = (type: 'left' | 'right') => {
            return customIcon
                ? customIcon(size, type, rest.disabled, rest.readOnly, isOpen)
                : getIcon(defaultIconsByType[type], size);
        };

        return (
            <TimePicker
                opened={isOpen}
                size={size}
                placeholder={placeholder || getPlaceholder(rest.columnsQuantity)}
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
