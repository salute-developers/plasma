import React, { forwardRef, useEffect, useRef, useState } from 'react';
import type { ChangeEvent } from 'react';
import { useForkRef, useIsomorphicLayoutEffect } from '@salutejs/plasma-core';

import { RootProps } from '../../engines';
import { cx } from '../../utils';
import { IconCloseCircleOutline } from '../_Icon';

import { AttachProps } from './Attach.types';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base, StyledHiddenInput, StyledHiddenInputHelper } from './Attach.styles';
import { StyledCell } from './ui/Cell/Cell';
import { extractExtension, getFileicon, addSeparator, separator } from './utils';
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
            size,
            view,
            className,
            style,
            isLoading,
            disabled,
            id,
            name,
            onChange,
            onClear,
            ...rest
        } = props;

        const innerRef = useRef<HTMLDivElement>(null);
        const ref = useForkRef(outerRef, innerRef);

        const inputRef = useRef<HTMLInputElement | null>(null);
        const inputHelperRef = useRef<HTMLDivElement | null>(null);
        const cellRef = useRef<HTMLDivElement | null>(null);
        const buttonRef = useRef<HTMLButtonElement | null>(null);

        const emptyTextCellWidth = useRef<number | null>(null);

        const [filename, setFilename] = useState<string>('');
        const [truncatedFilename, setTruncatedFilename] = useState<string>('');

        const horizontalClass = flow === 'horizontal' ? classes.horizontal : undefined;
        const verticalClass = flow === 'vertical' ? classes.vertical : undefined;
        const autoClass = flow === 'auto' ? classes.auto : undefined;
        const cellHiddenClass = truncatedFilename.length === 0 ? classes.cellHidden : undefined;

        const accept = acceptedFileFormats?.join(',');
        const extension = extractExtension(filename);
        const cellContentLeft = getFileicon(extension, size);

        useEffect(() => {
            emptyTextCellWidth.current = cellRef.current?.offsetWidth || 0;
        }, []);

        useIsomorphicLayoutEffect(() => {
            if (
                !cellRef.current ||
                !cellRef.current.parentElement ||
                !inputHelperRef.current ||
                !inputHelperRef.current.textContent ||
                !emptyTextCellWidth.current ||
                !buttonRef.current
            ) {
                return;
            }

            const { offsetWidth: textWidth } = inputHelperRef.current;
            const { offsetWidth: buttonWidth } = buttonRef.current;
            const { width: parentWidth, left: parentLeft } = cellRef.current.parentElement.getBoundingClientRect();
            const { left: cellLeft } = cellRef.current.getBoundingClientRect();
            const leftDiff = cellLeft - parentLeft;
            let currentTextWidth = textWidth;

            if (
                currentTextWidth + emptyTextCellWidth.current + leftDiff <= parentWidth ||
                currentTextWidth + emptyTextCellWidth.current < buttonWidth
            ) {
                setTruncatedFilename(filename);
                return;
            }

            let currFilename = addSeparator(filename, separator);
            for (let i = currFilename.indexOf(separator) - 1; i > 0; i -= 1) {
                if (currentTextWidth + emptyTextCellWidth.current + leftDiff <= parentWidth) {
                    break;
                }

                const left = currFilename.slice(0, i);
                const right = currFilename.slice(i + 1);
                const newFilename = `${left}${right}`;
                inputHelperRef.current.textContent = newFilename;
                currentTextWidth = inputHelperRef.current.offsetWidth;

                if (currentTextWidth + emptyTextCellWidth.current < buttonWidth) {
                    break;
                }

                currFilename = newFilename;
            }

            inputHelperRef.current.textContent = filename;
            setTruncatedFilename(currFilename);
        });

        const handleClick = () => {
            if (!inputRef.current) {
                return;
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
            setTruncatedFilename('');
        };

        return (
            <Root
                className={cx(horizontalClass, verticalClass, autoClass, className)}
                style={style}
                size={size}
                view={view}
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
                <StyledHiddenInputHelper ref={inputHelperRef}>{filename}</StyledHiddenInputHelper>

                <AttachButton
                    buttonType={buttonType}
                    view={view}
                    size={size}
                    onClick={handleClick}
                    isLoading={isLoading}
                    disabled={disabled}
                    ref={buttonRef}
                    {...rest}
                />
                {hasAttachment && (
                    <StyledCell
                        stretching="fixed"
                        className={cellHiddenClass}
                        ref={cellRef}
                        size={size}
                        title={truncatedFilename}
                        contentLeft={cellContentLeft}
                        contentRight={
                            <StyledIconButtonCancel view={view} size={size} onClick={handleClear}>
                                <IconCloseCircleOutline size="xs" color="inherit" />
                            </StyledIconButtonCancel>
                        }
                    />
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
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        view: 'default',
        size: 'm',
    },
};
