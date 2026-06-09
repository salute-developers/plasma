import React, { useState } from 'react';
import { action } from 'storybook/actions';
import { IconCalendar } from '@salutejs/plasma-icons';
import type { IconProps } from '@salutejs/plasma-icons';

import { dateShortcuts } from './fixtures';

const onChangeValue = action('onChangeValue');
const onCommitDate = action('onCommitDate');
const onBlur = action('onBlur');
const onFocus = action('onFocus');
const onToggle = action('onToggle');

const getIconSize = (size?: string) => {
    return size === 'xs' ? 'xs' : 's';
};

const getIcon = (IconComponent: React.FC<IconProps>, size: string) => {
    return <IconComponent size={getIconSize(size)} color="inherit" />;
};

const toValidDate = (value: unknown): Date | undefined => {
    if (value === undefined || value === null) {
        return undefined;
    }

    const date = value instanceof Date ? value : new Date(value as number);
    return Number.isNaN(date.getTime()) ? undefined : date;
};

export const createDefaultStory = (
    DateTimePicker: any,
    customIcon?: (size: string, type?: 'left' | 'right', disabled?: boolean, readOnly?: boolean) => JSX.Element,
) => {
    return ({
        enableContentLeft,
        enableContentRight,
        valueError,
        valueSuccess,
        size,
        lang,
        min,
        max,
        hasShortcuts,
        ...rest
    }: any) => {
        const [isOpen, setIsOpen] = useState(false);

        const innerGetIcon = (type: 'left' | 'right') => {
            return customIcon ? customIcon(size, type, rest.disabled, rest.readOnly) : getIcon(IconCalendar, size);
        };

        return (
            <DateTimePicker
                opened={isOpen}
                size={size}
                valueError={valueError}
                valueSuccess={valueSuccess}
                contentLeft={enableContentLeft ? innerGetIcon('left') : undefined}
                contentRight={enableContentRight ? innerGetIcon('right') : undefined}
                onBlur={onBlur}
                onFocus={onFocus}
                onToggle={(is: boolean) => {
                    setIsOpen(is);
                    onToggle(is);
                }}
                onChangeValue={onChangeValue}
                onCommitDate={onCommitDate}
                lang={lang}
                min={toValidDate(min)}
                max={toValidDate(max)}
                {...(hasShortcuts && { dateShortcuts })}
                {...rest}
            />
        );
    };
};
