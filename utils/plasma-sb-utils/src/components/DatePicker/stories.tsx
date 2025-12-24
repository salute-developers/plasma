import React, { useRef, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { IconPlasma, IconCalendar, IconSearch, IconArrowRight } from '@salutejs/plasma-icons';

import { getBaseEvents, getIconSize, ActionButton, EventTooltipBody } from './helpers';

const onChangeValue = action('onChangeValue');
const onCommitDate = action('onCommitDate');
const onBlur = action('onBlur');
const onFocus = action('onFocus');
const onToggle = action('onToggle');

const onChangeFirstValue = action('onChangeFirstValue');
const onChangeSecondValue = action('onChangeSecondValue');

export const createDefaultStory = (DatePicker: any) => {
    return ({
        enableContentLeft,
        enableContentRight,
        valueError,
        valueSuccess,
        size,
        lang,
        format,
        min,
        max,
        eventTooltipSize,
        enableEventTooltip,
        ...rest
    }: any) => {
        const [isOpen, setIsOpen] = useState(false);

        const eventList = getBaseEvents('days', 5, enableEventTooltip);
        const eventMonthList = getBaseEvents('months', 5, enableEventTooltip);
        const eventQuarterList = getBaseEvents('quarters', 2, enableEventTooltip);
        const eventYearList = getBaseEvents('years', 2, enableEventTooltip);

        const iconSize = getIconSize(size);

        return (
            <DatePicker
                opened={isOpen}
                size={size}
                valueError={valueError}
                valueSuccess={valueSuccess}
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
                {...rest}
            />
        );
    };
};

export const createRangeStory = (DatePickerRange: any, IconButton: any, EmbedIconButton: any) => {
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
        firstValueError,
        firstValueSuccess,
        secondValueError,
        secondValueSuccess,
        size,
        lang,
        min,
        max,
        appearance,
        ...rest
    }: any) => {
        const rangeRef = useRef<any>(null);
        const [isOpen, setIsOpen] = useState(false);

        const showDividerIcon = dividerVariant === 'icon';
        const showDefaultTextBefore = dividerVariant === 'none';

        const iconSize = getIconSize(size);
        const embedIconButtonSize = appearance === 'clear' && size === 'xs' ? 's' : size;

        const dividerIconProps = {
            dividerIcon: showDividerIcon ? <IconArrowRight color="inherit" size={iconSize} /> : null,
            dividerVariant,
        };

        return (
            <DatePickerRange
                size={size}
                ref={rangeRef}
                opened={isOpen}
                firstValueError={firstValueError}
                firstValueSuccess={firstValueSuccess}
                secondValueError={secondValueError}
                secondValueSuccess={secondValueSuccess}
                contentLeft={enableContentLeft ? <IconCalendar color="inherit" size={iconSize} /> : undefined}
                contentRight={
                    enableContentRight ? (
                        <ActionButton
                            buttonComponent={appearance === 'clear' ? EmbedIconButton : IconButton}
                            appearance={appearance}
                            size={embedIconButtonSize}
                            readOnly={rest.readOnly}
                        />
                    ) : undefined
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
                min={min}
                max={max}
                {...dividerIconProps}
                {...rest}
            />
        );
    };
};
