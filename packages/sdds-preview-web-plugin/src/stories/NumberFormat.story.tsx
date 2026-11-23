import {
    component,
    composeNumberFormat,
    mergeConfig,
    textFieldConfig,
} from '@salutejs/plasma-new-hope/styled-components';
import { useMemo, useState } from 'react';
import type { ForwardRefExoticComponent } from 'react';

// Своего конфига у NumberFormat нет: в sdds-serv это `composeNumberFormat(TextField)`, оформление приходит
// от TextField. Значений в ДС у NumberFormat нет, поэтому TextField берётся из `relatedComponents` (связь `reuse`)
// с конфигом темы ДС;
// голый TextField ядра — запасной вариант без оформления. Вид и размер поля — аргументы story.
const CoreTextField = component(mergeConfig(textFieldConfig as any, {})) as ForwardRefExoticComponent<any>;

const useNumberFormat = (relatedComponents: any) => {
    const TextField = relatedComponents?.TextField ?? CoreTextField;
    return useMemo(() => composeNumberFormat(TextField), [TextField]);
};

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const NumberFormatDefault = {
    name: 'Default',
    args: [
        {
            name: 'view',
            value: 'default',
            items: toItems(['default', 'positive', 'warning', 'negative']),
        },
        {
            name: 'size',
            value: 'm',
            items: toItems(['xl', 'l', 'm', 's', 'xs']),
        },
        {
            name: 'labelPlacement',
            value: 'outer',
            items: toItems(['outer', 'inner']),
        },
        {
            name: 'thousandSeparator',
            value: ' ',
        },
        {
            name: 'decimalScale',
            value: 3,
        },
        {
            name: 'decimalSeparator',
            value: '.',
        },
        {
            name: 'thousandsGroupStyle',
            value: 'thousand',
            items: toItems(['thousand', 'lakh', 'wan', 'none']),
        },
        {
            name: 'fixedDecimalScale',
            value: false,
        },
        {
            name: 'allowNegative',
            value: true,
        },
        {
            name: 'allowLeadingZeros',
            value: false,
        },
        {
            name: 'prefix',
            value: '',
        },
        {
            name: 'suffix',
            value: '',
        },
        {
            name: 'label',
            value: 'Лейбл',
        },
        {
            name: 'keepPlaceholder',
            value: false,
        },
        {
            name: 'titleCaption',
            value: 'Подпись к полю',
        },
        {
            name: 'textBefore',
            value: '',
        },
        {
            name: 'textAfter',
            value: '₽',
        },
        {
            name: 'placeholder',
            value: 'Заполните поле',
        },
        {
            name: 'leftHelper',
            value: 'Подсказка к полю',
        },
        {
            name: 'disabled',
            value: false,
        },
        {
            name: 'readOnly',
            value: false,
        },
        {
            name: 'optional',
            value: false,
        },
        {
            name: 'optionalText',
            value: 'опционально',
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
            name: 'clear',
            value: false,
        },
        {
            name: 'hasDivider',
            value: false,
        },
    ],
    render: function Story({ relatedComponents, ...args }: any) {
        const NumberFormat = useNumberFormat(relatedComponents);
        const [value, setValue] = useState('');
        const {
            decimalScale,
            prefix,
            suffix,
            titleCaption,
            textBefore,
            textAfter,
            leftHelper,
            optionalText,
            ...rest
        } = args;

        return (
            <div style={{ width: '25rem' }}>
                <NumberFormat
                    {...rest}
                    decimalScale={Number(decimalScale)}
                    prefix={prefix || undefined}
                    suffix={suffix || undefined}
                    titleCaption={titleCaption || undefined}
                    textBefore={textBefore || undefined}
                    textAfter={textAfter || undefined}
                    leftHelper={leftHelper || undefined}
                    optionalText={optionalText || undefined}
                    enumerationType="plain"
                    value={value}
                    onChange={(_event: unknown, values?: { value: string }) => setValue(values?.value ?? '')}
                />
            </div>
        );
    },
};

export const NumberFormatStories = [NumberFormatDefault];
