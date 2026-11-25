import { IconPlasma, IconSearch } from '@salutejs/plasma-icons';
import { component, mergeConfig, timePickerConfig } from '@salutejs/plasma-new-hope/styled-components';
import { useState } from 'react';

const TimePicker = component(mergeConfig(timePickerConfig as any, {})) as any;

/**
 * Поле пикера у верхнего левого края сцены: сцена превью центрирует содержимое, и большой попап (у DateTimePicker
 * календарь с временем шире 1000px) от поля в центре уходил за край. Сверху — отступ под переключатель историй.
 */
const pickerScene = { alignSelf: 'flex-start', margin: '3.25rem auto 1rem 1rem' } as const;

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const toNumberItems = (values: number[]) => values.map((value) => ({ value, label: String(value) }));

const placements = [
    'top',
    'top-start',
    'top-end',
    'right',
    'right-start',
    'right-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end',
];

const multiplicityOptions = [1, 5, 10, 15, 20, 30];

const TimePickerDefault = {
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
            name: 'labelPlacement',
            value: 'outer',
            items: toItems(['outer', 'inner']),
        },
        {
            name: 'leftHelper',
            value: 'Подсказка к полю',
        },
        {
            name: 'placeholder',
            value: '',
        },
        {
            name: 'textBefore',
            value: '',
        },
        {
            name: 'textAfter',
            value: '',
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
            name: 'enableContentLeft',
            value: true,
        },
        {
            name: 'enableContentRight',
            value: true,
        },
        {
            name: 'stretched',
            value: false,
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
            name: 'placement',
            value: 'bottom-start',
            items: toItems(placements),
        },
        {
            name: 'columnsQuantity',
            value: 3,
            items: toNumberItems([2, 3]),
        },
        {
            name: 'hasTimeFormat',
            value: false,
        },
        {
            name: 'multiplicityMinutes',
            value: 1,
            items: toNumberItems(multiplicityOptions),
        },
        {
            name: 'multiplicitySeconds',
            value: 1,
            items: toNumberItems(multiplicityOptions),
        },
        {
            name: 'dropdownWidth',
            value: 'fixed',
            items: toItems(['fixed', 'fullWidth', '10rem', '35rem', '50%', '100%']),
        },
        {
            name: 'dropdownHeight',
            value: '30rem',
        },
        {
            name: 'disableFlip',
            value: true,
        },
        {
            name: 'min',
            value: '',
        },
        {
            name: 'max',
            value: '',
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
            items: toItems([...placements, 'auto']),
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
            placeholder,
            textBefore,
            textAfter,
            columnsQuantity,
            multiplicityMinutes,
            multiplicitySeconds,
            dropdownHeight,
            min,
            max,
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
        const [value, setValue] = useState('');

        const columns = Number(columnsQuantity) === 2 ? 2 : 3;
        const iconSize = rest.size === 'xs' ? 'xs' : 's';
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
                <TimePicker
                    {...rest}
                    {...hintProps}
                    {...(min && { min })}
                    {...(max && { max })}
                    columnsQuantity={columns}
                    multiplicityMinutes={Number(multiplicityMinutes) || 1}
                    multiplicitySeconds={Number(multiplicitySeconds) || 1}
                    dropdownHeight={dropdownHeight || undefined}
                    placeholder={placeholder || (columns === 3 ? '00:00:00' : '00:00')}
                    textBefore={textBefore || undefined}
                    textAfter={textAfter || undefined}
                    contentLeft={enableContentLeft ? <IconPlasma size={iconSize} color="inherit" /> : undefined}
                    contentRight={enableContentRight ? <IconSearch size={iconSize} color="inherit" /> : undefined}
                    opened={isOpen}
                    onToggle={(is: boolean) => setIsOpen(is)}
                    value={value}
                    onChange={(_: unknown, formatted?: { value?: string }) => setValue(formatted?.value ?? '')}
                />
            </div>
        );
    },
};

export const TimePickerStories = [TimePickerDefault];
