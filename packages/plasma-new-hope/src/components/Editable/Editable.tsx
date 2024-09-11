import React, { forwardRef, useEffect, useRef, useState } from 'react';
import type {
    ChangeEvent,
    ClipboardEvent,
    FocusEvent,
    ClipboardEventHandler,
    FocusEventHandler,
    FormEventHandler,
    KeyboardEventHandler,
} from 'react';
import { useForkRef } from '@salutejs/plasma-core';

import type { RootProps } from '../../engines';
import { constants } from '../../utils';

import type { EditableProps, TypographyVariants } from './Editable.types';
import { clearSelection, selectText } from './utils';
import { classes } from './Editable.tokens';
import { base, EditButton, StyledInput, StyledPlacehpolder } from './Editable.styles';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';

export const editableRoot = (typograpyVariants: TypographyVariants) => (
    Root: RootProps<HTMLSpanElement, Omit<EditableProps<typeof typograpyVariants>, 'textComponent'>>,
) =>
    forwardRef<HTMLInputElement, EditableProps<typeof typograpyVariants>>(
        (
            {
                textComponent,
                value,
                icon,
                maxLength,
                spellCheck = 'false',
                placeholder,
                name,
                onChange,
                onBlur,
                onPaste,
                ...props
            },
            outerRef,
        ) => {
            const Component = textComponent;

            const [isEditing, setIsEditing] = useState(false);

            const inputRef = useRef<HTMLDivElement>(null);
            const innerRef = useForkRef(inputRef, outerRef);

            const prevValueRef = useRef(value || '');

            const handlePaste: ClipboardEventHandler<HTMLDivElement> = (e) => {
                if (!inputRef.current) {
                    return;
                }

                e.preventDefault();

                const text = e.clipboardData.getData('text/plain').replace(/[\n\r]/gi, '');

                if (document.queryCommandSupported('insertText')) {
                    document.execCommand('insertText', false, text);
                } else {
                    try {
                        navigator.clipboard.writeText(text);
                    } catch {
                        inputRef.current.textContent = text;
                    }
                }

                if (onPaste) {
                    onPaste(e as ClipboardEvent<HTMLInputElement>);
                }
            };

            const handleBlur: FocusEventHandler<HTMLDivElement> = (e) => {
                setIsEditing(false);

                clearSelection();

                // NOTE: Remove <br> tag inserted by Safari
                const editableElement = inputRef.current;
                if (editableElement && editableElement.innerHTML === '<br>') {
                    editableElement.innerHTML = '';
                }

                if (onBlur) {
                    onBlur(e as FocusEvent<HTMLInputElement>);
                }
            };

            const handleFocus: FocusEventHandler = () => {
                setIsEditing(true);

                inputRef.current && selectText(inputRef.current);
            };

            const handleEditClick = () => {
                inputRef.current?.focus();
            };

            const handleKeyDown: KeyboardEventHandler = (e) => {
                if ([constants.keyCodes.Enter, constants.keyCodes.Escape].includes(e.keyCode)) {
                    inputRef.current?.blur();
                }
            };

            const handleChange: FormEventHandler = (e) => {
                if (!inputRef.current) {
                    return;
                }

                const contentLength = inputRef.current.textContent?.length || 0;

                if (!maxLength || contentLength <= maxLength) {
                    prevValueRef.current = inputRef.current.textContent || '';

                    onChange && onChange(e as ChangeEvent<HTMLInputElement>);
                } else {
                    inputRef.current.textContent = prevValueRef.current;
                }
            };

            useEffect(() => {
                if (!inputRef.current || typeof value === 'undefined' || value === inputRef.current.textContent) {
                    return;
                }

                inputRef.current.textContent = value;
            }, [value, textComponent]);

            return (
                <Root {...props}>
                    <Component
                        ref={innerRef}
                        className={classes.editableTextBox}
                        role="textbox"
                        spellCheck={spellCheck}
                        contentEditable
                        onPaste={handlePaste}
                        onInput={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        onKeyDown={handleKeyDown}
                        aria-label={placeholder}
                    />
                    {prevValueRef.current?.length === 0 && !isEditing && (
                        <Component>
                            <StyledPlacehpolder onClick={handleEditClick}>{placeholder}</StyledPlacehpolder>
                        </Component>
                    )}
                    <StyledInput type="hidden" value={prevValueRef.current} name={name} />
                    <EditButton onClick={handleEditClick} isHidden={isEditing}>
                        {icon}
                    </EditButton>
                </Root>
            );
        },
    );

export const editableConfig = (typographyVariants: TypographyVariants) => ({
    name: 'Editable',
    tag: 'span',
    layout: editableRoot(typographyVariants),
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        view: 'default',
        size: 'm',
    },
});
