import React, { useCallback, useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';

import { Select } from '.';
import type { SelectProps } from '.';

const statuses = ['', 'success', 'warning', 'error'];

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

const meta: Meta<SelectProps> = {
    title: 'Controls/Select',
    component: Select,
    decorators: [InSpacingDecorator],
    argTypes: {
        status: {
            options: statuses,
            control: {
                type: 'select',
            },
        },
        listOverflow: {
            options: ['scroll', 'hidden', 'auto', ''],
            control: {
                type: 'select',
            },
        },
        ...disableProps(['value', 'items', 'onItemClick', 'separator', 'onChange', 'onItemSelect', 'isOpen']),
    },
};

export default meta;

const items = [
    { value: 'each', label: 'Каждый' },
    { value: 'hunter', label: 'Охотник', isDisabled: true },
    { value: 'wants', label: 'Желает' },
    {
        value: 'toKnow',
        label: 'Знать',
        items: [
            { value: '_fullText', label: 'Каждый охотник желает знать, где сидит фазан' },
            { value: '_thePheasant', label: 'Фазан' },
            { value: '_is', label: 'Сидит' },
        ],
    },
    { value: 'where', label: 'Где' },
    { value: 'is', label: 'Сидит' },
    { value: 'thePheasant', label: 'Фазан' },
    { value: 'fullText', label: 'Каждый охотник желает знать, где сидит фазан' },
];

const StoryDefault = ({ status, ...rest }: SelectProps) => {
    const [value, setValue] = useState<string | Array<string>>(null);

    const onChangeHandle = useCallback((v) => {
        setValue(v);
        onChange(v);
    }, []);

    return (
        <div style={{ display: 'grid', gap: '1rem', width: '20rem', gridTemplateColumns: '100%' }}>
            <Select
                value={value as string}
                items={items}
                status={status || undefined}
                onChange={onChangeHandle}
                onFocus={onFocus}
                onBlur={onBlur}
                {...rest}
            />
            <Select id="example-empty-select" value={null} items={[]} placeholder="Пустой список" />
            <Select
                id="example-disabled-select"
                value={null}
                items={items}
                placeholder="Задизейбленный список"
                disabled
            />
        </div>
    );
};

export const Default: StoryObj<SelectProps> = {
    args: {
        id: 'example-select',
        multiselect: false,
        placeholder: 'Выберите пример',
        helperText: 'Заполните пример',
        status: '' as 'success',
        disabled: false,
        listHeight: '',
    },
    render: (args) => <StoryDefault {...args} />,
};
