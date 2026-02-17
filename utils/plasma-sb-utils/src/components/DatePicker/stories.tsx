import React, { useRef, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { IconPlasma, IconCalendar, IconSearch, IconArrowRight } from '@salutejs/plasma-icons';

import { getBaseEvents, getIconSize, EventTooltipBody } from './helpers';
import { dateShortcuts, dateShortcutsRange } from './fixtures';

const onChangeValue = action('onChangeValue');
const onCommitDate = action('onCommitDate');
const onBlur = action('onBlur');
const onFocus = action('onFocus');
const onToggle = action('onToggle');

const onChangeFirstValue = action('onChangeFirstValue');
const onChangeSecondValue = action('onChangeSecondValue');

export const createDefaultStory = (DatePicker: any) => {
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

        const iconSize = getIconSize(size);

        const inputViews = {
            valueSuccess: inputView === 'positive',
            valueError: inputView === 'negative',
        };

        return (
            <DatePicker
                opened={isOpen}
                appearance={appearance}
                size={size}
                contentLeft={enableContentLeft ? <IconCalendar color="inherit" size={iconSize} /> : undefined}
                contentRight={enableContentRight ? <IconSearch color="inherit" size={iconSize} /> : undefined}
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
                min={min}
                max={max}
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

export const createRangeStory = (DatePickerRange: any) => {
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
                contentLeft={enableContentLeft ? <IconCalendar color="inherit" size={iconSize} /> : undefined}
                contentRight={enableContentRight ? <IconSearch color="inherit" size={getIconSize(size)} /> : undefined}
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
                min={min}
                max={max}
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
