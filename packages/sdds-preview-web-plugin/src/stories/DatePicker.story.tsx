import { IconArrowRight, IconCalendar, IconPlasma, IconSearch } from '@salutejs/plasma-icons';
import {
    component,
    datePickerConfig,
    datePickerRangeConfig,
    mergeConfig,
} from '@salutejs/plasma-new-hope/styled-components';
import { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';

const DatePicker = component(mergeConfig(datePickerConfig as any, {})) as any;
const DatePickerRange = component(mergeConfig(datePickerRangeConfig as any, {})) as any;

type DateValue = Date | string;

/** Пропсы без служебного `relatedComponents` сцены превью. */
const omitScene = (props: Record<string, unknown>) => {
    const result = { ...props };
    delete result.relatedComponents;

    return result;
};

/**
 * Поле пикера у верхнего левого края сцены: сцена превью центрирует содержимое, и большой попап (у DateTimePicker
 * календарь с временем шире 1000px) от поля в центре уходил за край. Сверху — отступ под переключатель историй.
 */
const pickerScene = { alignSelf: 'flex-start', margin: '3.25rem auto 1rem 1rem' } as const;

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

/** Дата аргумента строкой `YYYY-MM-DD` в локальном времени; пустая или неверная строка — `undefined`. */
const toDate = (value: unknown): Date | undefined => {
    if (typeof value !== 'string' || !value.trim()) {
        return undefined;
    }

    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value.trim());
    const date = match ? new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3])) : new Date(value);

    return Number.isNaN(date.getTime()) ? undefined : date;
};

/** Размер контейнера календаря: `0` и пустая строка — размер по умолчанию. */
const toContainerSize = (value: unknown) => (value && value !== '0' ? value : undefined);

const getIconSize = (size?: string) => (size === 'xs' ? 'xs' : 's');

const eventColors = ['red', 'green', 'blue', 'purple'];

type EventType = 'days' | 'months' | 'quarters' | 'years';

const EventNode = ({ dateValue, color }: { dateValue: string; color: string }) => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span>Дата: {dateValue}</span>
        <span>Цвет: {color}</span>
    </div>
);

const EventTooltipBody = ({ children }: PropsWithChildren) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>{children}</div>
);

const colorIndexByType: Record<EventType, number> = { days: 0, months: 1, quarters: 2, years: 3 };

const getBaseEvents = (type: EventType, datesNumber: number, enableEventTooltip: boolean) => {
    const baseDate = { day: 14, monthIndex: 5, year: 2024 };
    const color = eventColors[colorIndexByType[type]];

    return Array.from({ length: datesNumber }, (_, index) => {
        const day = type === 'days' ? baseDate.day + index : 1;
        const month =
            // eslint-disable-next-line no-nested-ternary
            type === 'months' || type === 'quarters'
                ? baseDate.monthIndex + index
                : type === 'days'
                ? baseDate.monthIndex
                : 0;
        const year = type === 'years' ? baseDate.year + index : baseDate.year;

        return Array.from({ length: index + 1 }, (__, ind) => ({
            date: new Date(year, month, day),
            color,
            ...(enableEventTooltip && {
                eventInfo: <EventNode key={ind} color={color} dateValue={`${year} ${month} ${day}`} />,
            }),
        }));
    }).flat();
};

const getEvents = (enableEventTooltip: boolean) => ({
    eventList: getBaseEvents('days', 5, enableEventTooltip),
    eventMonthList: getBaseEvents('months', 5, enableEventTooltip),
    eventQuarterList: getBaseEvents('quarters', 2, enableEventTooltip),
    eventYearList: getBaseEvents('years', 2, enableEventTooltip),
});

const dateShortcuts = [
    { value: new Date(2024, 11, 14), label: 'Дата по умолчанию' },
    { value: new Date(2024, 11, 4), label: '10 дней до даты по умолчанию' },
    { value: new Date(2024, 11, 24), label: '10 дней после даты по умолчанию' },
];

const dateShortcutsRange = [
    { value: [new Date(2024, 11, 14), new Date(2024, 11, 23)], label: 'Промежуток в 10 дней' },
    { value: [new Date(2024, 11, 1), new Date(2024, 11, 20)], label: 'Промежуток в 20 дней' },
    { value: [new Date(2024, 11, 5), undefined], label: 'Промежуток без конечой даты' },
];

const hintPlacements = [
    'top',
    'top-start',
    'top-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end',
    'right',
    'right-start',
    'right-end',
    'auto',
];

const inputViews = ['default', 'positive', 'negative'];

const commonArgs = [
    {
        name: 'label',
        value: 'Лейбл',
    },
    {
        name: 'titleCaption',
        value: 'Подпись к полю',
    },
    {
        name: 'leftHelper',
        value: 'Подсказка к полю',
    },
    {
        name: 'format',
        value: 'DD.MM.YYYY',
        items: toItems(['DD.MM.YYYY', 'DD MMMM YYYY', 'YYYY DD MM', 'DD YYYY MM']),
    },
    {
        name: 'min',
        value: '2024-02-01',
    },
    {
        name: 'max',
        value: '2025-01-29',
    },
    {
        name: 'renderFromDate',
        value: '2024-05-14',
    },
    {
        name: 'includeEdgeDates',
        value: true,
    },
    {
        name: 'closeAfterDateSelect',
        value: true,
    },
    {
        name: 'preserveInvalidOnBlur',
        value: false,
    },
    {
        name: 'lang',
        value: 'ru',
        items: toItems(['ru', 'en']),
    },
    {
        name: 'calendarContainerWidth',
        value: '0',
    },
    {
        name: 'calendarContainerHeight',
        value: '0',
    },
    {
        name: 'stretched',
        value: false,
    },
    {
        name: 'periodSelectorAlign',
        value: 'start',
        items: toItems(['start', 'center']),
    },
    {
        name: 'required',
        value: false,
    },
    {
        name: 'requiredPlacement',
        value: 'right',
        items: toItems(['left', 'right']),
    },
    {
        name: 'hasRequiredIndicator',
        value: false,
    },
    {
        name: 'hasClearDivider',
        value: false,
    },
    {
        name: 'enableContentLeft',
        value: true,
    },
    {
        name: 'enableContentRight',
        value: true,
    },
    {
        name: 'enableEventTooltip',
        value: false,
    },
    {
        name: 'hasShortcuts',
        value: false,
    },
    {
        name: 'shortcutsWidth',
        value: '11.5rem',
    },
    {
        name: 'shortcutsPlacement',
        value: 'left',
        items: toItems(['left', 'right']),
    },
    {
        name: 'disableFlip',
        value: true,
    },
    {
        name: 'hasHint',
        value: false,
    },
    {
        name: 'hintText',
        value: 'Текст подсказки',
    },
    {
        name: 'hintTrigger',
        value: 'hover',
        items: toItems(['hover', 'click']),
    },
    {
        name: 'hintTargetPlacement',
        value: 'outer',
        items: toItems(['outer', 'inner']),
    },
    {
        name: 'hintPlacement',
        value: 'auto',
        items: toItems(hintPlacements),
    },
    {
        name: 'hintWidth',
        value: '10rem',
    },
    {
        name: 'hintHasArrow',
        value: true,
    },
];

/**
 * Общие пропсы пикера из аргументов story: даты из строк, иконки, события, подсказка и быстрый выбор дат.
 * `relatedComponents` сцены в компонент не уходит.
 */
const pickerProps = (
    {
        enableContentLeft,
        enableContentRight,
        enableEventTooltip,
        eventTooltipSize,
        min,
        max,
        renderFromDate,
        hasShortcuts,
        shortcutsWidth,
        shortcutsPlacement,
        calendarContainerWidth,
        calendarContainerHeight,
        hasHint,
        hintText,
        hintTrigger,
        hintTargetPlacement,
        hintPlacement,
        hintWidth,
        hintHasArrow,
        ...rest
    }: any,
    shortcuts: unknown[],
) => {
    const iconSize = getIconSize(rest.size);

    return {
        ...omitScene(rest),
        ...getEvents(enableEventTooltip),
        ...(hasHint && {
            hintText,
            hintTrigger,
            hintTargetPlacement,
            hintPlacement,
            hintWidth: hintWidth || undefined,
            hintHasArrow,
        }),
        ...(hasShortcuts && { dateShortcuts: shortcuts }),
        contentLeft: enableContentLeft ? <IconCalendar size={iconSize} color="inherit" /> : undefined,
        contentRight: enableContentRight ? <IconSearch size={iconSize} color="inherit" /> : undefined,
        min: toDate(min),
        max: toDate(max),
        renderFromDate: toDate(renderFromDate),
        eventTooltipOptions: {
            bodyWrapper: EventTooltipBody,
            size: eventTooltipSize,
        },
        dateShortcutsPlacement: shortcutsPlacement,
        dateShortcutsWidth: shortcutsWidth || undefined,
        calendarContainerWidth: toContainerSize(calendarContainerWidth),
        calendarContainerHeight: toContainerSize(calendarContainerHeight),
        autoComplete: 'off',
        frame: 'document',
    };
};

/** Обёртка сцены: поле не в левом верхнем углу, выпадающему календарю есть место сверху. */
const Frame = ({ children }: PropsWithChildren) => <div style={pickerScene}>{children}</div>;

const DatePickerDefault = {
    name: 'Default',
    args: [
        {
            name: 'placeholder',
            value: '30.05.2024',
        },
        {
            name: 'textBefore',
            value: '',
        },
        {
            name: 'labelPlacement',
            value: 'outer',
            items: toItems(['outer', 'inner']),
        },
        {
            name: 'inputView',
            value: 'default',
            items: toItems(inputViews),
        },
        {
            name: 'defaultDate',
            value: '2024-06-14',
        },
        {
            name: 'maskWithFormat',
            value: true,
        },
        {
            name: 'placement',
            value: 'bottom-start',
            items: toItems(hintPlacements),
        },
        ...commonArgs,
    ],
    render: function Story(args: any) {
        const { inputView, defaultDate, textBefore, ...rest } = args;
        const [isOpen, setIsOpen] = useState(false);
        const [value, setValue] = useState<DateValue>(toDate(defaultDate) ?? '');

        useEffect(() => {
            setValue(toDate(defaultDate) ?? '');
        }, [defaultDate]);

        return (
            <Frame>
                <DatePicker
                    {...pickerProps(rest, dateShortcuts)}
                    textBefore={textBefore || undefined}
                    valueSuccess={inputView === 'positive'}
                    valueError={inputView === 'negative'}
                    opened={isOpen}
                    onToggle={(is: boolean) => setIsOpen(is)}
                    value={value}
                    onChangeValue={(_: unknown, next?: string, originalDate?: Date) => {
                        setValue(originalDate ?? next ?? '');
                    }}
                />
            </Frame>
        );
    },
};

const DatePickerRangeStory = {
    name: 'Range',
    args: [
        {
            name: 'firstPlaceholder',
            value: '30.05.2024',
        },
        {
            name: 'secondPlaceholder',
            value: '04.06.2024',
        },
        {
            name: 'firstTextfieldTextBefore',
            value: '',
        },
        {
            name: 'secondTextfieldTextBefore',
            value: '',
        },
        {
            name: 'firstTextfieldTextAfter',
            value: '',
        },
        {
            name: 'secondTextfieldTextAfter',
            value: '',
        },
        {
            name: 'firstInputView',
            value: 'default',
            items: toItems(inputViews),
        },
        {
            name: 'secondInputView',
            value: 'default',
            items: toItems(inputViews),
        },
        {
            name: 'dividerVariant',
            value: 'dash',
            items: toItems(['none', 'dash', 'icon']),
        },
        {
            name: 'isDoubleCalendar',
            value: false,
        },
        {
            name: 'isCalendarPositionedByInput',
            value: false,
        },
        {
            name: 'maskWithFormat',
            value: false,
        },
        {
            name: 'placement',
            value: 'bottom-start',
            items: toItems(['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end']),
        },
        {
            name: 'enableFirstTextfieldContentLeft',
            value: false,
        },
        {
            name: 'enableFirstTextfieldContentRight',
            value: false,
        },
        {
            name: 'enableSecondTextfieldContentLeft',
            value: false,
        },
        {
            name: 'enableSecondTextfieldContentRight',
            value: false,
        },
        ...commonArgs,
    ],
    render: function Story(args: any) {
        const {
            dividerVariant,
            firstTextfieldTextBefore,
            secondTextfieldTextBefore,
            firstTextfieldTextAfter,
            secondTextfieldTextAfter,
            firstInputView,
            secondInputView,
            enableFirstTextfieldContentLeft,
            enableFirstTextfieldContentRight,
            enableSecondTextfieldContentLeft,
            enableSecondTextfieldContentRight,
            ...rest
        } = args;
        const [isOpen, setIsOpen] = useState(false);
        const [values, setValues] = useState<[DateValue, DateValue]>(['', '']);

        const iconSize = getIconSize(rest.size);
        const plasmaIcon = <IconPlasma color="inherit" size={iconSize} />;
        const showDefaultTextBefore = dividerVariant === 'none';

        return (
            <Frame>
                <DatePickerRange
                    {...pickerProps(rest, dateShortcutsRange)}
                    dividerVariant={dividerVariant}
                    dividerIcon={dividerVariant === 'icon' ? <IconArrowRight color="inherit" size={iconSize} /> : null}
                    firstTextfieldContentLeft={enableFirstTextfieldContentLeft ? plasmaIcon : undefined}
                    firstTextfieldContentRight={enableFirstTextfieldContentRight ? plasmaIcon : undefined}
                    secondTextfieldContentLeft={enableSecondTextfieldContentLeft ? plasmaIcon : undefined}
                    secondTextfieldContentRight={enableSecondTextfieldContentRight ? plasmaIcon : undefined}
                    firstTextfieldTextBefore={
                        (showDefaultTextBefore ? firstTextfieldTextBefore || 'С' : firstTextfieldTextBefore) ||
                        undefined
                    }
                    secondTextfieldTextBefore={
                        (showDefaultTextBefore ? secondTextfieldTextBefore || 'ПО' : secondTextfieldTextBefore) ||
                        undefined
                    }
                    firstTextfieldTextAfter={firstTextfieldTextAfter || undefined}
                    secondTextfieldTextAfter={secondTextfieldTextAfter || undefined}
                    firstValueSuccess={firstInputView === 'positive'}
                    secondValueSuccess={secondInputView === 'positive'}
                    firstValueError={firstInputView === 'negative'}
                    secondValueError={secondInputView === 'negative'}
                    opened={isOpen}
                    onToggle={(is: boolean) => setIsOpen(is)}
                    value={values}
                    onChangeFirstValue={(_: unknown, next?: string, originalDate?: Date) => {
                        setValues(([, second]) => [originalDate ?? next ?? '', second]);
                    }}
                    onChangeSecondValue={(_: unknown, next?: string, originalDate?: Date) => {
                        setValues(([first]) => [first, originalDate ?? next ?? '']);
                    }}
                />
            </Frame>
        );
    },
};

export const DatePickerStories = [DatePickerDefault, DatePickerRangeStory];
