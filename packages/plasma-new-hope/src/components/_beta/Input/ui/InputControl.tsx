import React, { forwardRef, useRef } from 'react';
import type { InputHTMLAttributes } from 'react';
import cls from 'classnames';

import { useForkRef } from '../../../../hooks/useForkRef';
import type { InputProps } from '../Input.types';
import { classes } from '../Input.tokens';
import { useInputSizing } from '../hooks/useInputSizing';
import styles from '../Input.module.css';

type InputControlProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> &
    Pick<InputProps, 'textBefore' | 'textAfter'>;

export const InputControl = forwardRef<HTMLInputElement, InputControlProps>(
    ({ textBefore, textAfter, className, onBlur, onScroll, onInput, ...rest }, ref) => {
        const inputRef = useRef<HTMLInputElement>(null);
        const mergedRef = useForkRef(inputRef, ref);
        const { sizerRef, scheduleSync } = useInputSizing(inputRef);

        return (
            <div className={cls(styles.inputContainer, classes.inputContainer)}>
                {textBefore != null && (
                    <span className={cls(styles.affix, styles.affixBefore, classes.inputTextBefore)}>{textBefore}</span>
                )}
                <span ref={sizerRef} className={styles.inputSizer} aria-hidden="true" />
                <input
                    {...rest}
                    ref={mergedRef}
                    className={cls(styles.input, classes.inputControl, className)}
                    onInput={(event) => {
                        onInput?.(event);
                        scheduleSync();
                    }}
                    onBlur={(event) => {
                        event.currentTarget.scrollLeft = 0;
                        if (onBlur) {
                            onBlur(event);
                        }
                    }}
                    onScroll={(event) => {
                        const input = event.currentTarget;
                        if (input !== input.ownerDocument.activeElement && input.scrollLeft !== 0) {
                            input.scrollLeft = 0;
                        }

                        if (onScroll) {
                            onScroll(event);
                        }
                    }}
                />
                {textAfter != null && (
                    <span className={cls(styles.affix, styles.affixAfter, classes.inputTextAfter)}>{textAfter}</span>
                )}
            </div>
        );
    },
);
