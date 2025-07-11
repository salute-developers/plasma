import React, { forwardRef, useImperativeHandle, useState } from 'react';
import type { FC } from 'react';
import maskInputCompose from '@salutejs/react-maskinput';

import type { CustomInputProps, MaskProps } from './Mask.types';

const defaultFormatChars = [
    {
        str: '*',
        regexp: /./,
    },
    {
        str: '0',
        regexp: /[0-9]/,
    },
    {
        str: 'a',
        regexp: /[a-zA-Z]/,
    },
    {
        str: 'я',
        regexp: /[а-яА-ЯёЁ]/,
    },
];

export const composeMask = <T extends CustomInputProps>(InputComponent: FC<T>) => {
    const MaskedInput = maskInputCompose(InputComponent);

    return forwardRef<HTMLInputElement, T & MaskProps>(
        ({ mask, maskFormat = defaultFormatChars, ...rest }, outerRef) => {
            // TODO: replace inside react-maskinput 'getReference' on 'forwardRef'
            const [ref, setRef] = useState<HTMLInputElement | null>(null);

            useImperativeHandle(outerRef, () => ref as HTMLInputElement, [ref]);

            if (!mask) {
                return <InputComponent ref={setRef} {...(rest as T)} />;
            }

            return <MaskedInput getReference={setRef} mask={mask} maskFormat={maskFormat} {...(rest as T)} />;
        },
    );
};
