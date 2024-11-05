import React, { forwardRef, useRef, useState } from 'react';
import type { ChangeEvent, CSSProperties, DragEvent, MouseEvent } from 'react';
import { useForkRef } from '@salutejs/plasma-core';

import { cx, getSizeValueFromProp } from '../../utils';
import { IconArrowBarDown } from '../../components/_Icon';
import type { RootProps } from '../../engines';

import type { DropzoneProps, DropzoneRootProps, FileArgs, FileProcessHandler } from './Dropzone.types';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as disabledCSS } from './variations/_disabled/base';
import {
    base,
    Content,
    Description,
    DropzoneHandlerOverlay,
    HiddenInput,
    Title,
    TitleWrapper,
} from './Dropzone.styles';
import { classes, privateTokens } from './Dropzone.tokens';

export const dropzoneRoot = (Root: RootProps<HTMLDivElement, DropzoneRootProps>) =>
    forwardRef<HTMLInputElement, DropzoneProps>(
        (
            {
                className,
                style,
                accept,
                multiple,
                title,
                description,
                icon,
                iconPlacement,
                size,
                view,
                disabled,
                stretch,
                width,
                height,
                onDragEnter,
                onDragLeave,
                onDragOver,
                onDrop,
                validator,
                onClick,
                onChange,
                onChoseFiles,
                ...rest
            },
            outerRef,
        ) => {
            const [isDropzoneActive, setIsDropzoneActive] = useState(false);

            const inputRef = useRef<HTMLInputElement>(null);
            const forkInputRef = useForkRef(outerRef, inputRef);

            const innerWidth = width ? getSizeValueFromProp(width) : 'fit-content';
            const innerHeight = height ? getSizeValueFromProp(height) : 'fit-content';

            const processFiles = async (
                rawFiles: FileList | null,
                callback?: FileProcessHandler,
                afterAction?: () => void,
            ) => {
                if (!rawFiles?.length) {
                    return;
                }

                const files = [...rawFiles];
                let res: FileArgs = {
                    acceptedFiles: files,
                };

                if (validator) {
                    res = await validator?.(files);
                }

                if (callback) {
                    await callback(res);
                }

                if (afterAction) {
                    afterAction();
                }
            };

            const handleDragEnter = (event: DragEvent<HTMLDivElement>) => {
                if (disabled) {
                    return;
                }

                event.preventDefault();
                event.stopPropagation();

                if (onDragEnter) {
                    onDragEnter(event);
                }

                setIsDropzoneActive(true);
            };

            const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
                if (disabled) {
                    return;
                }

                event.preventDefault();

                if (onDragLeave) {
                    onDragLeave(event);
                }

                setIsDropzoneActive(false);
            };

            const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
                if (disabled) {
                    return;
                }

                event.preventDefault();

                if (onDragOver) {
                    onDragOver(event);
                }

                const { files: rawFiles } = event.dataTransfer;

                if (!isDropzoneActive && rawFiles && rawFiles.length > 0) {
                    setIsDropzoneActive(true);
                }
            };

            const handleDrop = async (event: DragEvent<HTMLDivElement>) => {
                if (disabled) {
                    return;
                }

                event.preventDefault();
                event.persist();

                const { files: rawFiles } = event.dataTransfer;
                const afterAction = () => {
                    event.dataTransfer.clearData();
                    setIsDropzoneActive(false);
                };

                await processFiles(rawFiles, onDrop, afterAction);
            };

            const handleClick = (event: MouseEvent<HTMLInputElement>) => {
                if (!inputRef.current || disabled) {
                    return;
                }

                inputRef.current.click();

                if (onClick) {
                    onClick(event);
                }
            };

            const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
                if (disabled) {
                    return;
                }

                if (onChange) {
                    onChange(event);
                }

                const { files: rawFiles } = event.target;

                await processFiles(rawFiles, onChoseFiles);
            };

            return (
                <Root
                    className={cx(
                        className,
                        isDropzoneActive && classes.active,
                        stretch && classes.stretch,
                        disabled && classes.disabled,
                    )}
                    view={view}
                    size={size}
                    disabled={disabled}
                    tabIndex={0}
                    style={
                        {
                            ...style,
                            [privateTokens.width]: innerWidth,
                            [privateTokens.height]: innerHeight,
                        } as CSSProperties
                    }
                >
                    <DropzoneHandlerOverlay
                        onDragEnter={handleDragEnter}
                        onDragLeave={handleDragLeave}
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                        onClick={handleClick}
                    />
                    <Content>
                        <TitleWrapper className={cx(iconPlacement === 'top' && classes.verticalContentPlacing)}>
                            {icon || <IconArrowBarDown color="inherit" size="s" />}
                            {title && <Title>{title}</Title>}
                        </TitleWrapper>
                        {description && <Description>{description}</Description>}
                    </Content>
                    <HiddenInput
                        ref={forkInputRef}
                        type="file"
                        accept={accept}
                        multiple={multiple}
                        tabIndex={-1}
                        onChange={handleChange}
                        {...rest}
                    />
                </Root>
            );
        },
    );

export const dropzoneConfig = {
    name: 'Dropzone',
    tag: 'div',
    layout: dropzoneRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
        disabled: {
            css: disabledCSS,
            attrs: true,
        },
    },
    defaults: {
        view: 'default',
        size: 'm',
    },
};
