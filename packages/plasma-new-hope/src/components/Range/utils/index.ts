import type { ChangeEvent, KeyboardEvent } from 'react';

import type { BaseCallbackChangeInstance, BaseCallbackKeyboardInstance } from '../Range.types';

export const getChangeHandler = (
    changeHandler?: BaseCallbackChangeInstance,
    disabled?: boolean,
    readOnly?: boolean,
) => (event: ChangeEvent<HTMLInputElement>) => {
    if (disabled || readOnly) {
        return;
    }

    changeHandler?.(event, event.target.value);
};

export const getSearchHandler = (
    searchHandler?: BaseCallbackKeyboardInstance,
    disabled?: boolean,
    readOnly?: boolean,
) => (value: string, event?: KeyboardEvent<HTMLInputElement>) => {
    if (disabled || readOnly) {
        return;
    }

    searchHandler?.(event as KeyboardEvent<HTMLInputElement>, value);
};
