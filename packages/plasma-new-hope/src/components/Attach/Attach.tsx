import React, { forwardRef, useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { ChangeEvent, MouseEvent, PropsWithChildren } from 'react';
import { useForkRef } from '@salutejs/plasma-core';
import { RootProps } from 'src/engines';
import { cx } from 'src/utils';

import { AttachProps, FileInfo } from './Attach.types';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as helperTextViewCSS } from './variations/_helperTextView/base';
import { base, StyledHelperText, StyledHiddenInput, StyledAttachButtonWrapper, FilesWrapper } from './Attach.styles';
import { getFilenameParts } from './utils';
import { classes } from './Attach.tokens';
import { AttachButton, HiddenWidthHelper } from './components';
import { CellUI, DropdownUI } from './ui';

export const attachRoot = (Root: RootProps<HTMLDivElement, AttachProps>) =>
    forwardRef<HTMLDivElement, AttachProps>((props, outerRef) => {
        const {
            flow = 'auto',
            buttonType = 'button',
            hideButtonOnAttach = false,
            hasAttachment = true,
            multiple,
            dropdownOptions,
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
        const buttonRef = useRef<HTMLButtonElement | null>(null);

        const fileWrapperWidthRef = useRef<HTMLDivElement | null>(null);
        const fileWrapperHelperRef = useRef<HTMLDivElement | null>(null);
        const cellHelperRefs = useRef<Record<string, HTMLDivElement>>({});

        const [filesInfo, setFilesInfo] = useState<Record<string, FileInfo>>({});
        const [hasHiddenFiles, setHasHiddenFiles] = useState(false);

        const filesLength = Object.keys(filesInfo).length;

        const horizontalClass = flow === 'horizontal' ? classes.horizontal : undefined;
        const verticalClass = flow === 'vertical' ? classes.vertical : undefined;
        const autoClass = flow === 'auto' ? classes.auto : undefined;
        const withHelperTextClass = helperText ? classes.withHelperText : undefined;

        const accept = acceptedFileFormats?.join(',');

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
            const fileList = e.target.files;
            if (!fileList || fileList.length === 0) {
                return;
            }

            if (onChange) {
                onChange(e);
            }

            if (!hasAttachment) {
                return;
            }

            const fileArray = Array.from(fileList);
            const filesData = fileArray.reduce((acc, file, ind) => {
                const fileKey = `${ind}_${file.name}`;
                acc[fileKey] = getFilenameParts(file.name, size, customIcon);

                return acc;
            }, {} as Record<string, FileInfo>);

            cellHelperRefs.current = {};
            setFilesInfo(filesData);
            setHasHiddenFiles(false);
        };

        const handleClear = (fileKey: string) => {
            if (!inputRef.current) {
                return;
            }

            if (onClear) {
                onClear();
            }

            setFilesInfo((prevFileInfo) => {
                const updatedFilesInfo = { ...prevFileInfo };
                delete updatedFilesInfo[fileKey];

                return updatedFilesInfo;
            });

            delete cellHelperRefs.current[fileKey];

            setHasHiddenFiles(false);
        };

        const getCellRef = (element: HTMLDivElement | null, key: string) => {
            if (element && cellHelperRefs?.current) {
                cellHelperRefs.current[key] = element;
            }
        };

        const updateHiddenFiles = () => {
            const newFilesInfo = { ...filesInfo };

            if (!multiple || Object.keys(filesInfo).length === 0) {
                setHasHiddenFiles(false);

                return;
            }

            if (flow !== 'horizontal') {
                Object.keys(newFilesInfo).forEach((key) => {
                    newFilesInfo[key].isVisible = true;
                });

                setHasHiddenFiles(false);
                setFilesInfo(newFilesInfo);

                return;
            }

            if (
                !fileWrapperWidthRef.current ||
                !fileWrapperHelperRef.current ||
                !Object.keys(cellHelperRefs.current).length
            ) {
                return;
            }

            const fileWrapper = fileWrapperWidthRef.current;

            const fileWrapperWidth = fileWrapper.clientWidth;
            const fileWrapperGap = parseInt(window.getComputedStyle(fileWrapper).columnGap ?? 0, 10);

            let totalWidth = 0;

            const firstHidden = Object.entries(cellHelperRefs.current).findIndex(([_, cell]) => {
                totalWidth += cell.clientWidth + fileWrapperGap;

                if (totalWidth > fileWrapperWidth) {
                    setHasHiddenFiles(true);

                    return true;
                }

                return false;
            });

            const newKeys = Object.keys(newFilesInfo);

            const filesInfoVisibleKeys = firstHidden >= 0 ? newKeys.slice(0, firstHidden) : newKeys;
            const filesInfoHiddenKeys = firstHidden >= 0 ? newKeys.slice(firstHidden) : [];

            filesInfoVisibleKeys.forEach((key) => {
                newFilesInfo[key].isVisible = true;
            });

            filesInfoHiddenKeys.forEach((key) => {
                newFilesInfo[key].isVisible = false;
            });

            setFilesInfo(newFilesInfo);
        };

        useLayoutEffect(() => {
            updateHiddenFiles();
        }, [filesLength, flow, multiple]);

        useEffect(() => {
            if (flow !== 'horizontal' || !multiple) {
                return;
            }

            const observer = new ResizeObserver(() => {
                updateHiddenFiles();
            });

            if (innerRef.current) {
                observer.observe(innerRef.current);
            }

            return () => observer.disconnect();
        }, [filesLength, flow, multiple]);

        const RootWrapper = ({ children }: PropsWithChildren) => {
            return (
                <Root size={size} view={view}>
                    {children}
                </Root>
            );
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
                    multiple={multiple}
                    onChange={handleChange}
                />

                {(!hideButtonOnAttach || !filesLength) && (
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
                )}

                {(hasAttachment || hideButtonOnAttach) &&
                    Boolean(filesLength) &&
                    Object.values(filesInfo)[0].isVisible && (
                        <>
                            <FilesWrapper
                                className={cx(horizontalClass, verticalClass, autoClass)}
                                applyOverflow={multiple && flow === 'horizontal'}
                            >
                                {Object.entries(filesInfo).map(
                                    ([key, { extension, filenameWithoutExtension, cellContentLeft, isVisible }]) => {
                                        if (!isVisible) {
                                            return;
                                        }

                                        return (
                                            <CellUI
                                                key={key}
                                                filenameWithoutExtension={filenameWithoutExtension}
                                                extension={extension}
                                                size={size}
                                                cellContentLeft={cellContentLeft}
                                                multiple={multiple}
                                                flow={flow}
                                                onClick={() => handleClear(key)}
                                            />
                                        );
                                    },
                                )}
                            </FilesWrapper>
                        </>
                    )}

                {(hasAttachment || hideButtonOnAttach) && hasHiddenFiles && (
                    <DropdownUI
                        rootWrapper={RootWrapper}
                        size={size}
                        filesInfo={filesInfo}
                        customIcon={customIcon}
                        handleClear={handleClear}
                        {...dropdownOptions}
                        placement={dropdownOptions?.placement ?? 'bottom'}
                    />
                )}

                {multiple && flow === 'horizontal' && (
                    <HiddenWidthHelper ref={fileWrapperWidthRef} hasHiddenFiles={hasHiddenFiles} size={size} />
                )}

                {multiple && flow === 'horizontal' && (hasAttachment || hideButtonOnAttach) && Boolean(filesLength) && (
                    <FilesWrapper ref={fileWrapperHelperRef} className={cx(horizontalClass, classes.horizontalHidden)}>
                        {Object.entries(filesInfo).map(
                            ([key, { extension, filenameWithoutExtension, cellContentLeft }]) => (
                                <CellUI
                                    key={key}
                                    ref={(el) => getCellRef(el, key)}
                                    filenameWithoutExtension={filenameWithoutExtension}
                                    extension={extension}
                                    size={size}
                                    cellContentLeft={cellContentLeft}
                                    multiple={multiple}
                                    flow={flow}
                                    isHelper
                                />
                            ),
                        )}
                    </FilesWrapper>
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
