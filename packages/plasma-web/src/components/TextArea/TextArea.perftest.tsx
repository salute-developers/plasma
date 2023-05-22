import React from 'react';

import { IconPlaceholder } from '../../helpers';

import { TextArea } from '.';

const func = () => {};

const defaultProps = {
    id: 'example-textarea' as const,
    placeholder: 'Заполните многострочное поле' as const,
    leftHelper: 'Подсказка к полю слева' as const,
    rightHelper: 'Подсказка к полю справа' as const,
    enableContentRight: true,
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
