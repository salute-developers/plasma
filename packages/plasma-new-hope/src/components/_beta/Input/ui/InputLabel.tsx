import React from 'react';
import cls from 'classnames';

import type { InputProps } from '../Input.types';
import { classes } from '../Input.tokens';
import styles from '../Input.module.css';

import { InputHint } from './InputHint';
import { InputIndicator } from './InputIndicator';

type InputLabelProps = Pick<InputProps, 'label' | 'hint' | 'indicator' | 'disabled'> & {
    htmlFor: string;
};

export const InputLabel = ({ label, hint, indicator, disabled, htmlFor }: InputLabelProps) => {
    if (!label?.value) {
        return null;
    }

    const isOuter = label.placement !== 'inner';

    return (
        <div className={cls(styles.labelGroup, classes.inputLabelGroup)}>
            <label className={cls(styles.label, classes.inputLabel)} htmlFor={htmlFor}>
                <span className={cls(styles.labelText, classes.inputLabelText)}>{label.value}</span>
            </label>
            {isOuter && <InputHint hint={hint} disabled={disabled} />}
            {(isOuter || indicator?.value === 'optional') && <InputIndicator indicator={indicator} />}
        </div>
    );
};
