import React from 'react';

import { Upload, ValidationResult } from '.';

const defaultProps = {
    disabled: false,
    content: 'Загрузите файл формата любого',
};
const state = {
    status: undefined,
    progress: undefined,
    message: 'Подсказывающее сообщение',
};
const valid = (): ValidationResult => {
    return {
        message: 'Добавлен файл формата ',
        status: 'success',
        data: null,
    };
};
const func = () => {};
const loaderStyle = { color: 'green' };

export const Default = () => {
    return (
        <Upload
            status={state.status}
            progress={state.progress}
            message={state.message}
            loader={<div style={loaderStyle}>Кастомная загрузка {state.progress}%</div>}
            onChange={func}
            onValidation={func}
            validate={valid}
            {...defaultProps}
        />
    );
};
