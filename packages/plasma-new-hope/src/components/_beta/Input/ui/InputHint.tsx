import React from 'react';
import cls from 'classnames';
import { InfoCircleOutline as InfoCircleOutline16 } from '@salutejs/sdds-icons/16/InfoCircleOutline';
import { InfoCircleOutline as InfoCircleOutline24 } from '@salutejs/sdds-icons/24/InfoCircleOutline';

import { Tooltip } from '../../Tooltip';
import type { InputProps } from '../Input.types';
import { classes } from '../Input.tokens';
import styles from '../Input.module.css';

type InputHintProps = Pick<InputProps, 'disabled'> & {
    hint?: InputProps['hint'] & {
        /** @internal CSS-конфиг всплывающего окна, включая рендер в портале. */
        _configClassName?: string;
    };
};

export const InputHint = ({ hint, disabled }: InputHintProps) => {
    if (!hint?.value) {
        return null;
    }

    const { _configClassName } = hint;
    const Icon = hint.size === 's' ? InfoCircleOutline16 : InfoCircleOutline24;

    return (
        <Tooltip
            className={cls(styles.hint, classes.inputHint, _configClassName)}
            trigger={hint.trigger ?? 'hover'}
            placement={hint.placement ?? 'top'}
            hasTail={hint.hasArrow}
            offset={hint.offset ?? [0, 8]}
            flip
            shift
            style={{ width: hint.width }}
            iconSlot={hint.contentBefore}
            target={
                <button
                    className={cls(styles.hintTarget, classes.inputHintTarget)}
                    type="button"
                    aria-label={hint.value}
                    disabled={disabled}
                >
                    {hint.targetIcon ??
                        (hint.size ? (
                            <Icon className={cls(styles.hintIcon, classes.inputHintIcon)} aria-hidden="true" />
                        ) : (
                            <>
                                <InfoCircleOutline16
                                    className={cls(styles.hintIcon, styles.hintIcon16, classes.inputHintIcon)}
                                    aria-hidden="true"
                                />
                                <InfoCircleOutline24
                                    className={cls(styles.hintIcon, styles.hintIcon24, classes.inputHintIcon)}
                                    aria-hidden="true"
                                />
                            </>
                        ))}
                </button>
            }
        >
            {hint.value}
        </Tooltip>
    );
};
