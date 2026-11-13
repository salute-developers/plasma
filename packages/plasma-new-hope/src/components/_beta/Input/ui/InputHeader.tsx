import React from 'react';
import cls from 'classnames';
import type { ReactNode } from 'react';

import type { InputProps } from '../Input.types';
import { classes } from '../Input.tokens';
import styles from '../Input.module.css';

type InputHeaderProps = Pick<InputProps, 'titleCaption'> & {
    label: ReactNode;
};

export const InputHeader = ({ label, titleCaption }: InputHeaderProps) => {
    if (!label && titleCaption == null) {
        return null;
    }

    return (
        <div className={cls(styles.header, classes.inputHeader)}>
            {label}
            {titleCaption != null && (
                <div className={cls(styles.titleCaption, classes.inputTitleCaption)}>{titleCaption}</div>
            )}
        </div>
    );
};
