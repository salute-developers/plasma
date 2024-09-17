import React, { forwardRef, useImperativeHandle, useState } from 'react';
import type { FC } from 'react';
import maskInputCompose from '@salutejs/react-maskinput';

import type { CustomInputProps, MaskProps } from './Mask.types';

const defaultFormatChars = [
    {
        str: '0',
        regexp: /[0-9]/,
    },
    {
        str: '*',
        regexp: /./,
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

    return forwardRef<HTMLInputElement, T & MaskProps>(({ maskFormat = defaultFormatChars, ...rest }, outerRef) => {
        // TODO: replace inside react-maskinput 'getReference' on 'forwardRef'
        const [ref, setRef] = useState<HTMLInputElement | null>(null);

        useImperativeHandle(outerRef, () => ref as HTMLInputElement, [ref]);

        return <MaskedInput getReference={setRef} maskFormat={maskFormat} {...(rest as T)} />;
    });
};
