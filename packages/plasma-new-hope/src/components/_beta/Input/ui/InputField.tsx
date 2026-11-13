import React, { useRef } from 'react';
import type { MouseEvent, ReactNode, RefObject } from 'react';
import cls from 'classnames';

import type { InputProps } from '../Input.types';
import { classes } from '../Input.tokens';
import { useChipNavigation } from '../hooks/useChipNavigation';
import styles from '../Input.module.css';

import { InputChips } from './InputChips';

type InputFieldProps = Pick<InputProps, 'contentBefore' | 'contentAfter' | 'chips' | 'disabled' | 'readOnly'> & {
    inputRef: RefObject<HTMLInputElement>;
    children: ReactNode;
    label: ReactNode;
    indicator: ReactNode;
    hint: ReactNode;
    outerHint: ReactNode;
};

export const InputField = ({
    inputRef,
    contentBefore,
    contentAfter,
    chips,
    disabled,
    readOnly,
    children,
    label,
    indicator,
    hint,
    outerHint,
}: InputFieldProps) => {
    const editorRef = useRef<HTMLDivElement>(null);
    const viewportRef = useRef<HTMLDivElement>(null);
    const { chipRefs, handleChipFocus, handleChipBlur, handleRemove, handleKeyDown } = useChipNavigation({
        chips,
        disabled,
        readOnly,
        inputRef,
    });

    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
        const input = inputRef.current;

        if (!input || disabled || readOnly || event.defaultPrevented || event.target === input) {
            return;
        }

        const target = event.target as Node;
        const inputContainer = input.parentElement;
        const isFieldBackground =
            target === event.currentTarget || target === editorRef.current || target === viewportRef.current;
        const isInputContent = target === inputContainer || target.parentNode === inputContainer;

        if (isFieldBackground || isInputContent) {
            input.focus();
        }
    };

    return (
        <div className={cls(styles.body, classes.inputBody)}>
            <div
                className={cls(styles.field, classes.inputField)}
                role="presentation"
                onClick={handleClick}
                onKeyDown={handleKeyDown}
            >
                {indicator}
                {contentBefore != null && (
                    <div className={cls(styles.contentBefore, classes.inputContentLeft)}>{contentBefore}</div>
                )}
                <div ref={editorRef} className={cls(styles.editor, classes.inputEditor)}>
                    <div ref={viewportRef} className={cls(styles.viewport, classes.inputViewport)}>
                        <InputChips
                            chips={chips}
                            disabled={disabled}
                            readOnly={readOnly}
                            chipRefs={chipRefs}
                            onChipFocus={handleChipFocus}
                            onChipBlur={handleChipBlur}
                            onRemove={handleRemove}
                        />
                        {children}
                    </div>
                    {label}
                </div>
                {contentAfter != null && (
                    <div className={cls(styles.contentAfter, classes.inputContentRight)}>{contentAfter}</div>
                )}
                {hint}
            </div>
            {outerHint}
        </div>
    );
};
