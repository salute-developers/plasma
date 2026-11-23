import { component, composeMask, mergeConfig, textFieldConfig } from '@salutejs/plasma-new-hope/styled-components';
import { useMemo } from 'react';
import type { ForwardRefExoticComponent } from 'react';

// Своего конфига у Mask нет: в sdds-serv это `composeMask(TextField)`, оформление приходит от TextField. Значений в ДС
// у Mask нет, поэтому TextField берётся из `relatedComponents` (связь `reuse`) с конфигом темы ДС; голый TextField
// ядра — запасной вариант без оформления. Вид и размер поля — аргументы story: своих вариаций у Mask нет.
const CoreTextField = component(mergeConfig(textFieldConfig as any, {})) as ForwardRefExoticComponent<any>;

const useMask = (relatedComponents: any) => {
    const TextField = relatedComponents?.TextField ?? CoreTextField;
    return useMemo(() => composeMask(TextField), [TextField]);
};

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const MaskDefault = {
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
            name: 'placeholder',
            value: 'Заполните поле',
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
            name: 'optional',
            value: false,
        },
        {
            name: 'optionalText',
            value: 'опционально',
        },
    ],
    render: function Story({ relatedComponents, ...args }: any) {
        const Mask = useMask(relatedComponents);
        const { optionalText, ...rest } = args;
        const props = { ...rest, optionalText: optionalText || undefined };

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '25rem' }}>
                <Mask
                    label="Маска телефона"
                    mask="+7 (000) 000 - 00 - 00"
                    maskChar="_"
                    showStartChars={false}
                    {...props}
                />

                <Mask
                    label="Маска телефона: отображается всегда"
                    mask="+7 (000) 000 - 00 - 00"
                    maskChar="_"
                    alwaysShowMask
                    {...props}
                />

                <Mask label="Маска даты" mask="00/00/0000" maskString="DD/MM/YYYY" alwaysShowMask {...props} />

                <Mask
                    label="Маска даты: значения по умолчанию"
                    mask={'12.\\04.0000'}
                    maskChar="_"
                    alwaysShowMask
                    {...props}
                />

                <Mask label="Маска времени" mask="00:00" maskChar="_" alwaysShowMask {...props} />
            </div>
        );
    },
};

export const MaskStories = [MaskDefault];
