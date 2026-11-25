import { IconCalendar } from '@salutejs/plasma-icons';
import { component, dateTimePickerConfig, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import { useEffect, useState } from 'react';

const DateTimePicker = component(mergeConfig(dateTimePickerConfig as any, {})) as any;

/**
 * Поле пикера у верхнего левого края сцены: сцена превью центрирует содержимое, и большой попап (у DateTimePicker
 * календарь с временем шире 1000px) от поля в центре уходил за край. Сверху — отступ под переключатель историй.
 */
const pickerScene = { alignSelf: 'flex-start', margin: '3.25rem auto 1rem 1rem' } as const;

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

/** Дата аргумента строкой `YYYY-MM-DD[ HH:mm[:ss]]` в локальном времени; пустая или неверная строка — `undefined`. */
const toDate = (value: unknown): Date | undefined => {
    if (typeof value !== 'string' || !value.trim()) {
        return undefined;
    }

    const match = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(value.trim());
    const date = match
        ? new Date(
              Number(match[1]),
              Number(match[2]) - 1,
              Number(match[3]),
              Number(match[4] ?? 0),
              Number(match[5] ?? 0),
              Number(match[6] ?? 0),
          )
        : new Date(value);

    return Number.isNaN(date.getTime()) ? undefined : date;
};

/** Размер контейнера календаря: `0` и пустая строка — размер по умолчанию. */
const toContainerSize = (value: unknown) => (value && value !== '0' ? value : undefined);

const dateShortcuts = [
    { value: new Date(2024, 11, 14), label: 'Дата по умолчанию' },
    { value: new Date(2024, 1, 1, 12, 12, 12), label: 'Минимальная дата' },
    { value: new Date(2024, 11, 29), label: 'Максимальная дата' },
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

const DateTimePickerDefault = {
    name: 'Default',
    args: [
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
            name: 'placeholder',
            value: '30.05.2024 00:00:00',
        },
        {
            name: 'labelPlacement',
            value: 'outer',
            items: toItems(['outer', 'inner']),
        },
        {
            name: 'placement',
            value: 'bottom-start',
            items: toItems(['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end']),
        },
        {
            name: 'textBefore',
            value: '',
        },
        {
            name: 'isDouble',
            value: false,
        },
        {
            name: 'periodSelectorAlign',
            value: 'start',
            items: toItems(['start', 'center']),
        },
        {
            name: 'stretched',
            value: false,
        },
        {
            name: 'defaultDate',
            value: '2024-12-14',
        },
        {
            name: 'min',
            value: '2024-02-01 12:12:12',
        },
        {
            name: 'max',
            value: '2024-12-29',
        },
        {
            name: 'renderFromDate',
            value: '2024-12-14',
        },
        {
            name: 'includeEdgeDates',
            value: true,
        },
        {
            name: 'lang',
            value: 'ru',
            items: toItems(['ru', 'en']),
        },
        {
            name: 'dateFormat',
            value: 'DD.MM.YYYY',
            items: toItems(['DD.MM.YYYY', 'DD MMMM YYYY', 'YYYY DD MM', 'DD YYYY MM']),
        },
        {
            name: 'timeFormat',
            value: 'HH:mm:ss',
            items: toItems(['HH:mm:ss', 'HH:mm', 'mm:ss', 'HH']),
        },
        {
            name: 'hasTimeFormat',
            value: false,
        },
        {
            name: 'maskWithFormat',
            value: true,
        },
        {
            name: 'preserveInvalidOnBlur',
            value: false,
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
            name: 'hasShortcuts',
            value: true,
        },
        {
            name: 'dateShortcutsWidth',
            value: '11.5rem',
        },
        {
            name: 'dateShortcutsPlacement',
            value: 'left',
            items: toItems(['left', 'right']),
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
            value: false,
        },
        {
            name: 'valueError',
            value: false,
        },
        {
            name: 'valueSuccess',
            value: false,
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
    ],
    render: function Story(args: any) {
        const {
            enableContentLeft,
            enableContentRight,
            textBefore,
            defaultDate,
            min,
            max,
            renderFromDate,
            hasShortcuts,
            dateShortcutsWidth,
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
        } = args;
        delete rest.relatedComponents;
        const [isOpen, setIsOpen] = useState(false);
        const [value, setValue] = useState<Date | string>(toDate(defaultDate) ?? '');

        useEffect(() => {
            setValue(toDate(defaultDate) ?? '');
        }, [defaultDate]);

        const iconSize = rest.size === 'xs' ? 'xs' : 's';
        const icon = <IconCalendar size={iconSize} color="inherit" />;
        const hintProps = hasHint
            ? {
                  hintText,
                  hintTrigger,
                  hintTargetPlacement,
                  hintPlacement,
                  hintWidth: hintWidth || undefined,
                  hintHasArrow,
              }
            : {};

        return (
            <div style={pickerScene}>
                <DateTimePicker
                    {...rest}
                    {...hintProps}
                    {...(hasShortcuts && { dateShortcuts })}
                    textBefore={textBefore || undefined}
                    min={toDate(min)}
                    max={toDate(max)}
                    renderFromDate={toDate(renderFromDate)}
                    dateShortcutsWidth={dateShortcutsWidth || undefined}
                    calendarContainerWidth={toContainerSize(calendarContainerWidth)}
                    calendarContainerHeight={toContainerSize(calendarContainerHeight)}
                    contentLeft={enableContentLeft ? icon : undefined}
                    contentRight={enableContentRight ? icon : undefined}
                    opened={isOpen}
                    onToggle={(is: boolean) => setIsOpen(is)}
                    value={value}
                    onChangeValue={(_: unknown, next?: string, formatted?: { originalDate?: Date }) => {
                        setValue(formatted?.originalDate ?? next ?? '');
                    }}
                />
            </div>
        );
    },
};

export const DateTimePickerStories = [DateTimePickerDefault];
