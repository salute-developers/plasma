import React from 'react';
import type { FocusEventHandler, MutableRefObject } from 'react';
import cls from 'classnames';
import { CloseOutline } from '@salutejs/sdds-icons/16/CloseOutline';

import type { InputProps } from '../Input.types';
import { classes } from '../Input.tokens';
import styles from '../Input.module.css';

type InputChipsProps = Pick<InputProps, 'chips' | 'disabled' | 'readOnly'> & {
    chipRefs: MutableRefObject<Array<HTMLButtonElement | null>>;
    onChipFocus: (index: number, button: HTMLButtonElement) => void;
    onChipBlur: FocusEventHandler<HTMLButtonElement>;
    onRemove: (index: number) => void;
};

export const InputChips = ({
    chips,
    disabled,
    readOnly,
    chipRefs,
    onChipFocus,
    onChipBlur,
    onRemove,
}: InputChipsProps) => {
    if (!chips?.value?.length) {
        return null;
    }

    const occurrences = new Map<string, number>();

    return (
        <div className={cls(styles.chips, classes.inputChips)}>
            {chips.value.map((chip, index) => {
                const occurrence = occurrences.get(chip) ?? 0;
                occurrences.set(chip, occurrence + 1);
                const key = `${chip}-${occurrence}`;

                return chips.clickArea === 'full' && chips.onRemove ? (
                    <button
                        className={cls(styles.chip, classes.inputChip, styles.chipFull, classes.inputChipFull)}
                        key={key}
                        ref={(button) => {
                            chipRefs.current[index] = button;
                        }}
                        type="button"
                        aria-label={`Удалить ${chip}`}
                        disabled={disabled || readOnly}
                        onFocus={(event) => onChipFocus(index, event.currentTarget)}
                        onBlur={onChipBlur}
                        onClick={() => onRemove(index)}
                    >
                        <span className={cls(styles.chipText, classes.inputChipText)}>{chip}</span>
                        <span className={cls(styles.chipRemove, classes.inputChipRemove)} aria-hidden="true">
                            <CloseOutline aria-hidden="true" />
                        </span>
                    </button>
                ) : (
                    <span className={cls(styles.chip, classes.inputChip)} key={key}>
                        <span className={cls(styles.chipText, classes.inputChipText)}>{chip}</span>
                        {chips.onRemove && (
                            <button
                                className={cls(styles.chipRemove, classes.inputChipRemove)}
                                ref={(button) => {
                                    chipRefs.current[index] = button;
                                }}
                                type="button"
                                aria-label={`Удалить ${chip}`}
                                disabled={disabled || readOnly}
                                onFocus={(event) => onChipFocus(index, event.currentTarget)}
                                onBlur={onChipBlur}
                                onClick={() => onRemove(index)}
                            >
                                <CloseOutline aria-hidden="true" />
                            </button>
                        )}
                    </span>
                );
            })}
        </div>
    );
};
