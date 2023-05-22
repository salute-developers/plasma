import React from 'react';
import { IconSleep, IconEye } from '@salutejs/plasma-icons';

import { ActionButton } from '../Button';

import { TextField } from '.';

const defaultProps = {
    id: 'example-text-field' as const,
    type: 'text' as const,
    placeholder: 'Заполните поле' as const,
    helperText: 'Подсказка к полю' as const,
    disabled: false,
    readOnly: false,
    size: 'l' as const,
    enableLeftIcon: true,
    enableRightIcon: true,
};
const status = '' as 'success';
const func = () => {};

export const Default = () => {
    return (
        <TextField
            value="Значение поля"
            status={status}
            contentLeft={<IconSleep color="inherit" size="s" />}
            contentRight={
                <ActionButton view="clear">
                    <IconEye color="inherit" size="s" />
                </ActionButton>
            }
            onChange={func}
            onFocus={func}
            onBlur={func}
            onSearch={func}
            {...defaultProps}
        />
    );
};
