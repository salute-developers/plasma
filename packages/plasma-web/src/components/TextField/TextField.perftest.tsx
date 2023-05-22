import React from 'react';

import { IconPlaceholder } from '../../helpers';

import { TextField } from '.';

const func = () => {};

const defaultProps = {
    id: 'example-text-field' as const,
    size: 'l' as const,
    label: 'Лейбл' as const,
    animatedHint: undefined,
    placeholder: 'Заполните поле' as const,
    helperText: 'Подсказка к полю' as const,
    status: '' as 'success',
    disabled: false,
    readOnly: false,
};
const status = '' as 'success';

export const Default = () => {
    return (
        <TextField
            {...defaultProps}
            value="Значение поля"
            contentLeft={<IconPlaceholder />}
            contentRight={<IconPlaceholder />}
            status={status}
            onChange={func}
            onFocus={func}
            onBlur={func}
            onSearch={func}
        />
    );
};

export const DeferredValue = () => {
    return <TextField placeholder="Wait three seconds..." defaultValue="" readOnly />;
};
