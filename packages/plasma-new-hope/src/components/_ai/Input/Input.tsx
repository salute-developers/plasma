import React, { forwardRef, useRef, useState, useLayoutEffect } from 'react';
import type { RootPropsOmitOnChangeAndDefaultValue } from 'src/engines';
import { IconClose, IconSendOutline } from 'src/components/_Icon';

import type { InputProps } from './Input.types';
import {
    AttachedFile,
    AttachedImage,
    AttachedImageOverlay,
    AttachmentsList,
    base,
    TextArea,
    TextAreaWrapper,
    Thumb,
    RemoveButton,
    Footer,
    SubmitButton,
    InputFieldWrapper,
    ActionBefore,
    ActionAfter,
} from './Input.styles';
import { classes } from './Input.tokens';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { matchSizeToIconSize, defaultValueToString } from './utils';

export const inputRoot = (Root: RootPropsOmitOnChangeAndDefaultValue<HTMLDivElement, InputProps>) =>
    forwardRef<HTMLDivElement, InputProps>((props, ref) => {
        const {
            value: outerValue,
            defaultValue,
            onChange,
            mode = 'condensed',
            placeholder,
            autoFocus = false,
            minRows = 1,
            maxRows = 4,
            submitOnEnter = true,
            clearOnSubmit = true,
            attachments,
            onAttachmentRemove,
            onSend,
            actionBefore,
            actionAfter,
            sendNode,
            loading,
            view,
            size,
            ...rest
        } = props;
        const [activeMode, setActiveMode] = useState<'input' | 'textarea'>(mode === 'extended' ? 'textarea' : 'input');
        const [innerValue, setInnerValue] = useState(defaultValueToString(defaultValue));

        const isCondensedInputMode = mode === 'condensed' && activeMode === 'input';

        const value = outerValue ?? innerValue;
        const setValue = (newValue: string) => {
            setInnerValue(newValue);

            if (onChange) {
                onChange(newValue);
            }
        };

        const textareaRef = useRef<HTMLTextAreaElement | null>(null);

        const focusAtEnd = () => {
            const textareaElement = textareaRef.current;
            if (!textareaElement) {
                return;
            }

            textareaElement.focus();
            const end = textareaElement.value.length;
            textareaElement.setSelectionRange(end, end);
        };

        const insertAtSelection = (text: string) => {
            const textareaElement = textareaRef.current;
            const selectionStart = textareaElement?.selectionStart ?? value.length;
            const selectionEnd = textareaElement?.selectionEnd ?? value.length;

            setValue(`${value.slice(0, selectionStart)}${text}${value.slice(selectionEnd)}`);
        };

        const switchToTextarea = () => {
            if (mode === 'extended' || activeMode === 'textarea') {
                return;
            }

            setActiveMode('textarea');
            requestAnimationFrame(() => {
                focusAtEnd();
                textareaRef.current?.scrollTo({ top: textareaRef.current?.scrollHeight });
            });
        };

        const switchToInput = () => {
            if (mode === 'extended' || activeMode === 'input') {
                return;
            }

            setActiveMode('input');
            requestAnimationFrame(focusAtEnd);
        };

        const handleSendMessage = () => {
            if (onSend) {
                onSend(value);
            }

            if (clearOnSubmit) {
                setValue('');

                if (mode === 'condensed' && activeMode === 'textarea') {
                    switchToInput();
                }
            }
        };

        const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
            if (isCondensedInputMode) {
                if (event.key !== 'Enter') {
                    return;
                }

                event.preventDefault();

                if (event.shiftKey) {
                    insertAtSelection('\n');
                    switchToTextarea();

                    return;
                }

                if (submitOnEnter) {
                    handleSendMessage();

                    return;
                }

                switchToTextarea();

                return;
            }

            if (event.defaultPrevented || event.key !== 'Enter' || event.shiftKey || !submitOnEnter) {
                return;
            }

            event.preventDefault();
            handleSendMessage();
        };

        const handlePaste = (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
            if (!isCondensedInputMode) {
                return;
            }

            const pastedText = event.clipboardData.getData('text');

            if (!pastedText.includes('\n')) {
                return;
            }

            event.preventDefault();
            insertAtSelection(pastedText);
            switchToTextarea();
        };

        const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
            setValue(event.target.value);

            if (event.target.value.length === 0 && mode === 'condensed' && activeMode === 'textarea') {
                switchToInput();
            }
        };

        const resize = () => {
            const element = textareaRef.current;

            if (!element) {
                return;
            }

            const computedStyle = window.getComputedStyle(element);
            const lineHeight = Number.parseFloat(computedStyle.lineHeight);
            const safeLineHeight = Number.isFinite(lineHeight)
                ? lineHeight
                : Number.parseFloat(computedStyle.fontSize) * 1.2 || 16;

            const minHeight = safeLineHeight * minRows;
            const maxHeight = safeLineHeight * maxRows;

            element.style.height = 'auto';

            const newHeight = Math.min(Math.max(element.scrollHeight, minHeight), maxHeight);

            element.style.height = `${newHeight}px`;
            element.style.overflowY = element.scrollHeight > maxHeight ? 'auto' : 'hidden';
        };

        // Переключение, когда однострочный текст перестал влезать в condensed-режиме
        const checkOverflow = () => {
            const element = textareaRef.current;

            if (!element) {
                return;
            }

            if (element.scrollWidth > element.clientWidth) {
                switchToTextarea();
            }
        };

        // Проверяем overflow при каждом вводе
        useLayoutEffect(() => {
            if (!isCondensedInputMode) return;

            checkOverflow();
        }, [isCondensedInputMode, value]);

        // Проверяем overflow при ресайзе экрана
        useLayoutEffect(() => {
            if (!isCondensedInputMode) {
                return;
            }

            const element = textareaRef.current;

            if (!element) {
                return;
            }

            const resizeObserver = new ResizeObserver(checkOverflow);
            resizeObserver.observe(element);

            return () => {
                resizeObserver.disconnect();
            };
        }, [isCondensedInputMode]);

        // Авторесайз textarea по высоте
        useLayoutEffect(() => {
            if (isCondensedInputMode) {
                return;
            }

            resize();
        }, [isCondensedInputMode, value, minRows, maxRows]);

        const textArea = (
            <TextArea
                data-condensed={isCondensedInputMode}
                ref={textareaRef}
                value={value}
                rows={isCondensedInputMode ? 1 : minRows}
                wrap={isCondensedInputMode ? 'off' : undefined}
                autoFocus={autoFocus}
                placeholder={placeholder}
                onKeyDown={handleKeyDown}
                onPaste={handlePaste}
                onChange={handleChange}
            />
        );

        return (
            <Root ref={ref} size={size} view={view} {...rest}>
                {attachments && attachments.length > 0 && (
                    <AttachmentsList>
                        {attachments.map((attachment) => {
                            const { id, type, label, size: attachedSize, thumbUrl } = attachment;
                            const handleRemove = () => onAttachmentRemove?.(attachment);

                            if (type === 'image') {
                                return (
                                    <AttachedImage
                                        key={id}
                                        tabIndex={0}
                                        onKeyDown={(event) => {
                                            if (event.key === 'Enter') {
                                                event.preventDefault();
                                                handleRemove();
                                            }
                                        }}
                                    >
                                        <AttachedImageOverlay className={classes.attachedOverlay}>
                                            <RemoveButton onClick={handleRemove} tabIndex={-1}>
                                                <IconClose size={matchSizeToIconSize(size)} color="inherit" />
                                            </RemoveButton>
                                        </AttachedImageOverlay>

                                        <Thumb src={thumbUrl} alt={label} />
                                    </AttachedImage>
                                );
                            }

                            return (
                                <AttachedFile
                                    key={id}
                                    filename={label || ''}
                                    description={attachedSize}
                                    thumbUrl={thumbUrl}
                                    actionContent={<IconClose size={matchSizeToIconSize(size)} color="inherit" />}
                                    onActionClick={handleRemove}
                                />
                            );
                        })}
                    </AttachmentsList>
                )}

                {!isCondensedInputMode && <TextAreaWrapper>{textArea}</TextAreaWrapper>}

                <Footer>
                    <ActionBefore>{actionBefore}</ActionBefore>

                    <InputFieldWrapper>{isCondensedInputMode && textArea}</InputFieldWrapper>

                    <ActionAfter>{actionAfter}</ActionAfter>

                    {sendNode || (
                        <SubmitButton onClick={handleSendMessage} isLoading={loading}>
                            <IconSendOutline size={matchSizeToIconSize(size)} color="inherit" />
                        </SubmitButton>
                    )}
                </Footer>
            </Root>
        );
    });

export const inputConfig = {
    name: 'Input',
    tag: 'div',
    layout: inputRoot,
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
};
