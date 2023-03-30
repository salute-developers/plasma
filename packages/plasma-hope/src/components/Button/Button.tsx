import React, { forwardRef } from 'react';
import { createButton } from '@salutejs/plasma-core';

import { ButtonWeb } from './views/web/ButtonWeb';
import { ButtonB2C } from './views/b2c/ButtonB2C';
import type { ButtonProps, Design } from './types';

const componentMap = {
    web: ButtonWeb,
    b2c: ButtonB2C,
};

export const Button = ({ design }: Design) => {
    const ButtonView = createButton<HTMLButtonElement, ButtonProps>(componentMap[design]);

    ButtonView.defaultProps = {
        size: 'm',
        view: 'secondary',
        pin: 'square-square',
    };

    return forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => <ButtonView {...props} ref={ref} />);
};
