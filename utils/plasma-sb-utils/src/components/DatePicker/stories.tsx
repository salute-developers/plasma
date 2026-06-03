import React, { useRef, useState } from 'react';
import { action } from 'storybook/actions';
import { IconPlasma, IconCalendar, IconSearch, IconArrowRight } from '@salutejs/plasma-icons';
import type { IconProps } from '@salutejs/plasma-icons';

import { getBaseEvents, getIconSize, EventTooltipBody } from './helpers';
import { dateShortcuts, dateShortcutsRange } from './fixtures';

const onChangeValue = action('onChangeValue');
const onCommitDate = action('onCommitDate');
const onBlur = action('onBlur');
const onFocus = action('onFocus');
const onToggle = action('onToggle');

const onChangeFirstValue = action('onChangeFirstValue');
const onChangeSecondValue = action('onChangeSecondValue');

const toValidDate = (value: unknown): Date | undefined => {
    if (value === undefined || value === null) {
        return undefined;
    }

    const date = value instanceof Date ? value : new Date(value as number);
    return Number.isNaN(date.getTime()) ? undefined : date;
};

const getIcon = (IconComponent: React.FC<IconProps>, size: string) => {
    return <IconComponent size={getIconSize(size)} color="inherit" />;
};

type CustomIcon = (size: string, type?: 'left' | 'right', disabled?: boolean, readOnly?: boolean) => JSX.Element;

const innerGetIcon = (
    size: string,
    type: 'left' | 'right',
    defaultIcon: React.FC<IconProps>,
    disabled?: boolean,
    readOnly?: boolean,
    customIcon?: CustomIcon,
) => {
    return customIcon ? customIcon(size, type, disabled, readOnly) : getIcon(defaultIcon, size);
};

export const createDefaultStory = (DatePicker: any, customIcon?: CustomIcon) => {
    return ({
        appearance,
        enableContentLeft,
        enableContentRight,
        inputView,
        size,
        lang,
        format,
        min,
        max,
        eventTooltipSize,
        enableEventTooltip,
        hasShortcuts,
        shortcutsPlacement,
        shortcutsWidth,
        ...rest
    }: any) => {
        const [isOpen, setIsOpen] = useState(false);

        const eventList = getBaseEvents('days', 5, enableEventTooltip);
        const eventMonthList = getBaseEvents('months', 5, enableEventTooltip);
        const eventQuarterList = getBaseEvents('quarters', 2, enableEventTooltip);
        const eventYearList = getBaseEvents('years', 2, enableEventTooltip);

        const inputViews = {
            valueSuccess: inputView === 'positive',
            valueError: inputView === 'negative',
        };

        return (
            <DatePicker
                opened={isOpen}
                appearance={appearance}
                size={size}
                contentLeft={
                    enableContentLeft
                        ? innerGetIcon(size, 'left', IconCalendar, rest.disabled, rest.readOnly, customIcon)
                        : undefined
                }
                contentRight={
                    enableContentRight
                        ? innerGetIcon(size, 'right', IconSearch, rest.disabled, rest.readOnly, customIcon)
                        : undefined
                }
                onBlur={onBlur}
                onFocus={onFocus}
                onToggle={(is: boolean) => {
                    setIsOpen(is);
                    onToggle(is);
                }}
                onChangeValue={onChangeValue}
                onCommitDate={onCommitDate}
                lang={lang}
                format={format}
                min={toValidDate(min)}
                max={toValidDate(max)}
                eventTooltipOptions={{
                    bodyWrapper: EventTooltipBody,
                    size: eventTooltipSize,
                }}
                eventList={eventList}
                eventMonthList={eventMonthList}
                eventQuarterList={eventQuarterList}
                eventYearList={eventYearList}
                autoComplete="off"
                dateShortcutsPlacement={shortcutsPlacement}
                dateShortcutsWidth={shortcutsWidth}
                {...(hasShortcuts && { dateShortcuts })}
                {...inputViews}
                {...rest}
            />
        );
    };
};

export const createRangeStory = (DatePickerRange: any, customIcon?: CustomIcon) => {
    return ({
        dividerVariant,
        enableContentLeft,
        enableContentRight,
        firstTextfieldTextBefore,
        secondTextfieldTextBefore,
        enableFirstTextfieldContentLeft,
        enableSecondTextfieldContentLeft,
        enableFirstTextfieldContentRight,
        enableSecondTextfieldContentRight,
        firstInputView,
        secondInputView,
        size,
        lang,
        min,
        max,
        appearance,
        enableEventTooltip,
        eventTooltipSize,
        hasShortcuts,
        shortcutsPlacement,
        shortcutsWidth,
        ...rest
    }: any) => {
        const rangeRef = useRef<any>(null);
        const [isOpen, setIsOpen] = useState(false);

        const showDividerIcon = dividerVariant === 'icon';
        const showDefaultTextBefore = dividerVariant === 'none';

        const iconSize = getIconSize(size);

        const dividerIconProps = {
            dividerIcon: showDividerIcon ? <IconArrowRight color="inherit" size={iconSize} /> : null,
            dividerVariant,
        };

        const eventList = getBaseEvents('days', 5, enableEventTooltip);
        const eventMonthList = getBaseEvents('months', 5, enableEventTooltip);
        const eventQuarterList = getBaseEvents('quarters', 2, enableEventTooltip);
        const eventYearList = getBaseEvents('years', 2, enableEventTooltip);

        const inputsViews = {
            firstValueSuccess: firstInputView === 'positive',
            secondValueSuccess: secondInputView === 'positive',
            firstValueError: firstInputView === 'negative',
            secondValueError: secondInputView === 'negative',
        };

        return (
            <DatePickerRange
                ref={rangeRef}
                opened={isOpen}
                appearance={appearance}
                size={size}
                contentLeft={
                    enableContentLeft
                        ? innerGetIcon(size, 'left', IconCalendar, rest.disabled, rest.readOnly, customIcon)
                        : undefined
                }
                contentRight={
                    enableContentRight
                        ? innerGetIcon(size, 'right', IconSearch, rest.disabled, rest.readOnly, customIcon)
                        : undefined
                }
                firstTextfieldContentLeft={
                    enableFirstTextfieldContentLeft ? <IconPlasma color="inherit" size={iconSize} /> : undefined
                }
                firstTextfieldContentRight={
                    enableFirstTextfieldContentRight ? <IconPlasma color="inherit" size={iconSize} /> : undefined
                }
                secondTextfieldContentLeft={
                    enableSecondTextfieldContentLeft ? <IconPlasma color="inherit" size={iconSize} /> : undefined
                }
                secondTextfieldContentRight={
                    enableSecondTextfieldContentRight ? <IconPlasma color="inherit" size={iconSize} /> : undefined
                }
                firstTextfieldTextBefore={
                    showDefaultTextBefore ? firstTextfieldTextBefore || 'С' : firstTextfieldTextBefore
                }
                secondTextfieldTextBefore={
                    showDefaultTextBefore ? secondTextfieldTextBefore || 'ПО' : secondTextfieldTextBefore
                }
                onToggle={(is: boolean) => {
                    setIsOpen(is);
                    onToggle(is);
                }}
                onChangeFirstValue={onChangeFirstValue}
                onChangeSecondValue={onChangeSecondValue}
                lang={lang}
                min={toValidDate(min)}
                max={toValidDate(max)}
                autoComplete="off"
                eventTooltipOptions={{
                    bodyWrapper: EventTooltipBody,
                    size: eventTooltipSize,
                }}
                eventList={eventList}
                eventMonthList={eventMonthList}
                eventQuarterList={eventQuarterList}
                eventYearList={eventYearList}
                dateShortcutsPlacement={shortcutsPlacement}
                dateShortcutsWidth={shortcutsWidth}
                {...(hasShortcuts && { dateShortcuts: dateShortcutsRange })}
                {...inputsViews}
                {...dividerIconProps}
                {...rest}
            />
        );
    };
};
