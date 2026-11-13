import React from 'react';
import cls from 'classnames';

import type { InputProps } from '../Input.types';
import { classes } from '../Input.tokens';
import styles from '../Input.module.css';

type InputHelpersProps = Pick<InputProps, 'caption' | 'counter'> & {
    captionId: string;
    counterId: string;
};

export const InputHelpers = ({ caption, counter, captionId, counterId }: InputHelpersProps) => {
    const hasCaption = caption != null && caption !== false;
    const hasCounter = counter != null && counter !== false;

    if (!hasCaption && !hasCounter) {
        return null;
    }

    return (
        <div className={cls(styles.helpers, classes.inputHelpers)}>
            {hasCaption && (
                <div className={cls(styles.caption, classes.inputCaption)} id={captionId}>
                    {caption}
                </div>
            )}
            {hasCounter && (
                <div className={cls(styles.counter, classes.inputCounter)} id={counterId}>
                    {counter}
                </div>
            )}
        </div>
    );
};
