import React, { forwardRef, useRef, useState } from 'react';
import type { ChangeEvent, MouseEvent } from 'react';
import { useForkRef } from '@salutejs/plasma-core';
import { RootProps } from 'src/engines';
import { cx } from 'src/utils';

import { IconCloseCircleOutline } from '../_Icon';

import { AttachProps } from './Attach.types';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as helperTextViewCSS } from './variations/_helperTextView/base';
import {
    base,
    StyledHelperText,
    StyledHiddenInput,
    StyledAttachButtonWrapper,
    FilenameWrapper,
    TruncatedFilenamePart,
    FilenameExtensionPart,
} from './Attach.styles';
import { StyledCell } from './ui/Cell/Cell';
import { extractExtension, getFileIcon } from './utils';
import { classes } from './Attach.tokens';
import { AttachButton } from './components/AttachButton';
import { StyledIconButtonCancel } from './ui/IconButton/IconButton.styles';

export const attachRoot = (Root: RootProps<HTMLDivElement, AttachProps>) =>
    forwardRef<HTMLDivElement, AttachProps>((props, outerRef) => {
        const {
            flow = 'auto',
            buttonType = 'button',
            hasAttachment = true,
            acceptedFileFormats,
            helperText,
            size,
            view,
            helperTextView,
            className,
            style,
            isLoading,
            disabled,
            id,
            name,
            customIcon,
            onClick,
            onChange,
            onClear,
            ...rest
        } = props;

        const innerRef = useRef<HTMLDivElement>(null);
        const ref = useForkRef(outerRef, innerRef);

        const inputRef = useRef<HTMLInputElement | null>(null);
        const cellRef = useRef<HTMLDivElement | null>(null);
        const buttonRef = useRef<HTMLButtonElement | null>(null);

        const [filename, setFilename] = useState<string>('');

        const horizontalClass = flow === 'horizontal' ? classes.horizontal : undefined;
        const verticalClass = flow === 'vertical' ? classes.vertical : undefined;
        const withHelperTextClass = helperText ? classes.withHelperText : undefined;
        const autoClass = flow === 'auto' ? classes.auto : undefined;

        const accept = acceptedFileFormats?.join(',');
        const extension = extractExtension(filename);
        const filenameWithoutExtension = filename.slice(0, -1 - (extension?.length || 0));
        const cellContentLeft = customIcon || getFileIcon(extension, size);

        const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
            if (!inputRef.current) {
                return;
            }

            if (onClick) {
                onClick(e);
            }

            inputRef.current.click();
        };

        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            if (!e.target.files) {
                return;
            }

            if (onChange) {
                onChange(e);
            }

            setFilename(e.target.files[0].name);
        };

        const handleClear = () => {
            if (!inputRef.current) {
                return;
            }

            if (onClear) {
                onClear();
            }

            inputRef.current.value = '';
            setFilename('');
        };

        return (
            <Root
                className={cx(horizontalClass, verticalClass, autoClass, withHelperTextClass, className)}
                style={style}
                size={size}
                view={view}
                helperTextView={helperTextView}
                ref={ref}
            >
                <StyledHiddenInput
                    ref={inputRef}
                    accept={accept}
                    type="file"
                    id={id}
                    name={name}
                    onChange={handleChange}
                />

                <StyledAttachButtonWrapper>
                    <AttachButton
                        ref={buttonRef}
                        buttonType={buttonType}
                        isLoading={isLoading}
                        disabled={disabled}
                        onClick={handleClick}
                        {...rest}
                    />

                    {helperText && <StyledHelperText>{helperText}</StyledHelperText>}
                </StyledAttachButtonWrapper>

                {hasAttachment && filename && (
                    <StyledCell
                        stretching="fixed"
                        ref={cellRef}
                        size={size}
                        contentLeft={cellContentLeft}
                        contentRight={
                            <StyledIconButtonCancel onClick={handleClear}>
                                <IconCloseCircleOutline size="xs" color="inherit" />
                            </StyledIconButtonCancel>
                        }
                    >
                        <FilenameWrapper>
                            <TruncatedFilenamePart>{filenameWithoutExtension.slice(0, -1)}</TruncatedFilenamePart>
                            <FilenameExtensionPart>
                                {filenameWithoutExtension.at(-1)}.{extension}
                            </FilenameExtensionPart>
                        </FilenameWrapper>
                    </StyledCell>
                )}
            </Root>
        );
    });

export const attachConfig = {
    name: 'Attach',
    tag: 'div',
    layout: attachRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        helperTextView: {
            css: helperTextViewCSS,
        },
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        view: 'default',
        helperTextView: 'default',
        size: 'm',
    },
};
