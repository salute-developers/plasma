import React, { ChangeEventHandler, useCallback, useState, DragEvent, ChangeEvent } from 'react';
import type { FC } from 'react';
import styled, { css } from 'styled-components';
import { footnote1 } from '@salutejs/plasma-core';
import { FileDrop } from 'react-file-drop';

import { StatusType, ValidationResult } from './types';
import { defaultValidate } from './utils';

// TODO: https://github.com/salute-developers/plasma/issues/364
declare module 'react-file-drop' {
    export interface FileDropProps {
        children: React.ReactNode;
    }
}

const statuses = {
    error: {
        borderColor: 'var(--text-negative)',
    },
    success: {
        borderColor: 'var(--text-positive)',
    },
};

const paints = {
    default: {
        backgroundColor: 'var(--surface-transparent-primary)',
        borderColor: 'var(--text-tertiary)',
        color: 'var(--text-secondary)',
    },
    progress: {
        backgroundColor: 'var(--surface-transparent-tertiary)',
        borderColor: 'transparent',
        color: 'var(--text-secondary)',
    },
};

type Paint = keyof typeof paints;

export interface StyledButtonProps {
    paint: Paint;
    status?: StatusType;
    disabled?: boolean;
    isGrabbing: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
    ${footnote1};

    position: relative;

    display: flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;

    width: 100%;
    height: 4rem;
    padding: 1.25rem 1rem;

    appearance: none;
    border: 1px dashed;
    border-radius: 0.75rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    transition-property: transform, background-color, border-color, color;

    &:hover:not(:disabled) {
        background-color: var(--surface-transparent-secondary);
        transform: scale(1.04);
    }

    ${({ isGrabbing }) =>
        isGrabbing &&
        css`
            border-color: var(--text-accent);
            background-color: var(--surface-transparent-secondary);
            transform: scale(1.04);
        `}
    ${({ paint }) => paints[paint]}
    ${({ status }) => status && statuses[status]}
    ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.4;
            cursor: not-allowed;
        `}
`;

const StyledInputLabel = styled.label<{ disabled?: boolean }>`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    cursor: pointer;

    ${({ disabled }) =>
        disabled &&
        css`
            cursor: not-allowed;
        `}
`;

export interface UploadButtonProps {
    /**
     * Статус компонента.
     */
    status?: StatusType;
    /**
     * Компонент неактивен.
     */
    disabled?: boolean;
    /**
     * Идёт ли процесс загрузки.
     */
    isProgress?: boolean;
    /**
     * Принимаемые расширения в формате ".*".
     *
     * @example
     * ".mp3"
     * @example
     * ".wav, .mkv"
     */
    accept?: string;
    /**
     * Контент для компонента в виде компонента или строки.
     */
    content?: JSX.Element | string;
    /**
     * Компонент загрузки.
     */
    loader?: JSX.Element;
    /**
     * Кастомный метод валидации. Должен вернуть data: File, для начала обработки метода загрузки.
     */
    validate?: (files: FileList | null, accept?: string) => ValidationResult;
    /**
     * Callback результата валидации.
     */
    onValidation?: (result: ValidationResult) => void;
    /**
     * Callback на выбор файла.
     */
    onChange?: (file: File, event?: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Базовый компонент для загрузки файлов.
 */
export const UploadButton: FC<UploadButtonProps> = ({
    status,
    disabled,
    isProgress,
    accept,
    content,
    loader,
    onChange = () => {},
    onValidation = () => {},
    validate,
    ...rest
}) => {
    const [isGrabbing, setGrabbing] = useState<boolean>(false);
    const paint = isProgress ? 'progress' : 'default';

    const onUpload = useCallback(
        (files: FileList | null, event?: ChangeEvent<HTMLInputElement>) => {
            const result = (validate || defaultValidate)(files, accept);

            onValidation(result);

            if (result.data) {
                onChange(result.data, event);
            }
        },
        [accept, onChange, onValidation, validate],
    );

    const dragStart = useCallback(() => !disabled && !isProgress && setGrabbing(true), [disabled, isProgress]);
    const dragEnd = useCallback(() => setGrabbing(false), []);

    const drop = useCallback(
        (files: FileList | null, event: DragEvent<HTMLDivElement>) => {
            if (disabled || isProgress) {
                return;
            }

            event.preventDefault();

            onUpload(files);
            setGrabbing(false);
        },
        [onUpload, disabled, isProgress],
    );

    const inputChangeHandler: ChangeEventHandler<HTMLInputElement> = useCallback(
        (event) => {
            const {
                target: { files },
            } = event;

            onUpload(files, event);
        },
        [onUpload],
    );

    return (
        <FileDrop onDrop={drop} onDragOver={dragStart} onDragLeave={dragEnd}>
            <StyledButton
                type="button"
                isGrabbing={isGrabbing}
                paint={paint}
                status={status}
                disabled={disabled}
                {...rest}
            >
                <StyledInputLabel disabled={disabled}>
                    <input disabled={disabled} type="file" onChange={inputChangeHandler} accept={accept} hidden />
                </StyledInputLabel>
                {isProgress ? loader : content}
            </StyledButton>
        </FileDrop>
    );
};
