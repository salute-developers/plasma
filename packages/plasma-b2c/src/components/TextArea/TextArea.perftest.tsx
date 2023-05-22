import React from 'react';
import { IconPlaceholder } from '@salutejs/plasma-sb-utils';

import { TextArea } from '.';

const onChange = () => {};
const onFocus = () => {};
const onBlur = () => {};

const defaultProps = {
    id: 'example-textarea' as const,
    placeholder: 'Заполните многострочное поле' as const,
    leftHelper: 'Подсказка к полю' as const,
    rightHelper: '125 слов' as const,
    enableContentRight: true,
    resize: 'vertical' as const,
    disabled: false,
    size: 'm' as const,
};
const status = '' as 'success';

export const Default = () => {
    return (
        <TextArea
            value=""
            contentRight={<IconPlaceholder />}
            status={status}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            {...defaultProps}
        />
    );
};
