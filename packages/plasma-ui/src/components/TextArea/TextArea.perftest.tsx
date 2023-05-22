import React from 'react';

import { IconPlaceholder } from '../../helpers';

import { TextArea } from '.';

const func = () => {};

const defaultProps = {
    id: 'example-textarea' as const,
    placeholder: 'Заполните многострочное поле' as const,
    helperText: 'Подсказка к полю' as const,
    enableRightIcon: true,
    resize: 'vertical' as const,
    disabled: false,
    readOnly: false,
};
const status = '' as 'success';

export const Default = () => {
    return (
        <TextArea
            value="Значение поля"
            contentRight={<IconPlaceholder />}
            status={status}
            onChange={func}
            onFocus={func}
            onBlur={func}
            {...defaultProps}
        />
    );
};
