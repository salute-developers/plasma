import React from 'react';

import { Select } from '.';

const items = [
    { value: 'each', label: 'Каждый' },
    { value: 'hunter', label: 'Охотник', isDisabled: true },
    { value: 'wants', label: 'Желает' },
    { value: 'toKnow', label: 'Знать' },
    { value: 'where', label: 'Где' },
    { value: 'is', label: 'Сидит' },
    { value: 'thePheasant', label: 'Фазан' },
    { value: 'fullText', label: 'Каждый охотник желает знать, где сидит фазан' },
];
const defaultProps = {
    id: 'example-select',
    multiselect: false,
    placeholder: 'Выберите пример',
    helperText: 'Заполните пример',
    status: '' as 'success',
    disabled: false,
    listHeight: '',
};
const func = () => {};
const itemsEmpty = [];

export const Default = () => {
    return (
        <div>
            <Select value="test" items={items} onChange={func} onFocus={func} onBlur={func} {...defaultProps} />
            <Select id="example-empty-select" value={null} items={itemsEmpty} placeholder="Пустой список" />
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
