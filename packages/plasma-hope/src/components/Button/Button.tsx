import React, { forwardRef, useMemo } from 'react';
import { createButton } from '@salutejs/plasma-core';

import { ButtonWeb } from './views/web/ButtonWeb';
import { ButtonB2C } from './views/b2c/ButtonB2C';
import type { ButtonProps as ButtonPropsBase } from './types';

const componentMap = {
    web: ButtonWeb,
    b2c: ButtonB2C,
};

export type ButtonProps = ButtonPropsBase & {
    design: 'b2c' | 'web';
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ design, ...rest }, ref) => {
    const ButtonView = useMemo(() => createButton<HTMLButtonElement, ButtonPropsBase>(componentMap[design]), [design]);

    return <ButtonView {...rest} ref={ref} />;
});

Button.defaultProps = {
    size: 'm',
    view: 'secondary',
    pin: 'square-square',
};
