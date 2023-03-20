import React, { ChangeEventHandler, forwardRef, KeyboardEvent, useCallback, useMemo } from 'react';

import { TextFieldWeb } from './views/web/TextFieldWeb';
import { TextFieldB2C } from './views/b2c/TextFieldB2C';
import type { TextFieldProps as TextFieldPropsBase } from './types';

const componentMap = {
    web: TextFieldWeb,
    b2c: TextFieldB2C,
};

export type TextFieldProps = TextFieldPropsBase & {
    design: 'b2c' | 'web';
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
    ({ design, onSearch, onChange, ...rest }, innerRef) => {
        const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
            (event) => {
                const { maxLength, value } = event.target;

                if (!onChange || (maxLength !== -1 && value.length > maxLength)) {
                    return;
                }

                onChange(event);
            },
            [onChange],
        );

        const handleKeyUp = useCallback(
            (event: KeyboardEvent<HTMLInputElement>) => {
                if (event.keyCode === 13 && onSearch) {
                    onSearch((event.target as HTMLInputElement).value, event);
                }
            },
            [onSearch],
        );

        const TextFieldView = useMemo(() => componentMap[design], [design]);

        return <TextFieldView ref={innerRef} onChange={handleChange} onKeyUp={handleKeyUp} {...rest} />;
    },
);
