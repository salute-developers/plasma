import React from 'react';
import cls from 'classnames';

import type { InputProps } from '../Input.types';
import { classes } from '../Input.tokens';
import styles from '../Input.module.css';

export const InputIndicator = ({ indicator }: Pick<InputProps, 'indicator'>) => {
    if (!indicator?.value) {
        return null;
    }

    return (
        <span
            className={cls(styles.indicator, classes.inputIndicator)}
            data-kind={indicator.value}
            data-placement={indicator.placement ?? 'right'}
            aria-hidden={indicator.value === 'required' ? true : undefined}
        >
            {indicator.value === 'optional' ? indicator.optionalText ?? 'Необязательно' : null}
        </span>
    );
};
