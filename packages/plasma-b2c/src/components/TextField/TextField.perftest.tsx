import React from 'react';
import { IconPlaceholder } from '@salutejs/plasma-sb-utils';

import { TextField } from '.';

const onFocus = () => {};
const onBlur = () => {};
const onSearch = () => {};

const defaultProps = {
    id: 'example-text-field' as const,
    type: 'text' as const,
    placeholder: 'Заполните поле имя' as const,
    caption: 'Имя' as const,
    helperText: 'Допустимы только символы кириллицы' as const,
    enableContentLeft: true,
    enableContentRight: true,
    disabled: false,
    readOnly: false,
    size: 'm' as const,
};
const func = () => {};
const status = '' as 'success';

export const Default = () => {
    return (
        <TextField
            value="Значение поля"
            contentLeft={<IconPlaceholder />}
            contentRight={<IconPlaceholder />}
            status={status}
            onChange={func}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            {...defaultProps}
        />
    );
};
