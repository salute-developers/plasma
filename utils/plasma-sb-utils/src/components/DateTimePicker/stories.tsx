import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import { IconPlaceholder } from '../IconPlaceholder';

import { dateShortcuts } from './fixtures';

const onChangeValue = action('onChangeValue');
const onCommitDate = action('onCommitDate');
const onBlur = action('onBlur');
const onFocus = action('onFocus');
const onToggle = action('onToggle');

const getIconSize = (size?: string) => {
    return size === 'xs' ? 'xs' : 's';
};

export const createDefaultStory = (DateTimePicker: any) => {
    return ({ enableContentLeft, valueError, valueSuccess, size, lang, min, max, hasShortcuts, ...rest }: any) => {
        const [isOpen, setIsOpen] = useState(false);

        const iconSize = getIconSize(size);

        return (
            <DateTimePicker
                opened={isOpen}
                size={size}
                valueError={valueError}
                valueSuccess={valueSuccess}
                contentLeft={enableContentLeft ? <IconPlaceholder size={iconSize} /> : undefined}
                onBlur={onBlur}
                onFocus={onFocus}
                onToggle={(is: boolean) => {
                    setIsOpen(is);
                    onToggle(is);
                }}
                onChangeValue={onChangeValue}
                onCommitDate={onCommitDate}
                lang={lang}
                min={min}
                max={max}
                {...(hasShortcuts && { dateShortcuts })}
                {...rest}
            />
        );
    };
};
