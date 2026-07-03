import React, { forwardRef, useEffect, useMemo, useRef, useState } from 'react';
import type { ChangeEvent, MouseEvent, PropsWithChildren } from 'react';
import { RootProps } from 'src/engines';
import { canUseDOM, cx } from 'src/utils';
import { useForkRef, useIsomorphicLayoutEffect } from 'src/hooks';

import { AttachProps, FileInfo } from './Attach.types';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as helperTextViewCSS } from './variations/_helperTextView/base';
import { base, StyledHelperText, StyledHiddenInput, StyledAttachButtonWrapper, FilesWrapper } from './Attach.styles';
import { getFilenameParts } from './utils';
import { classes } from './Attach.tokens';
import { AttachButton, HiddenWidthHelper } from './components';
import { CellUI, DropdownUI } from './ui';

const syncInputFiles = (input: HTMLInputElement, filesToSync: File[]) => {
    if (!canUseDOM) {
        return;
    }

    input.value = '';
    if (filesToSync.length > 0) {
        const dataTransfer = new DataTransfer();
        filesToSync.forEach((file) => dataTransfer.items.add(file));
        input.files = dataTransfer.files;
    }
};

export const attachRoot = (Root: RootProps<HTMLDivElement, AttachProps>) =>
    forwardRef<HTMLInputElement, AttachProps>((props, outerRef) => {
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
            files,
            onClick,
            onChange,
            onClear,
            ...rest
        } = props;

        const innerRef = useRef<HTMLDivElement>(null);

        const localInputRef = useRef<HTMLInputElement>(null);
        const inputRef = useForkRef(outerRef, localInputRef);
        const buttonRef = useRef<HTMLButtonElement>(null);

        const fileWrapperWidthRef = useRef<HTMLDivElement>(null);
        const fileWrapperHelperRef = useRef<HTMLDivElement>(null);
        const cellHelperRefs = useRef<Record<string, HTMLDivElement>>({});

        const [innerFilesInfo, setInnerFilesInfo] = useState<Record<string, FileInfo>>({});
        const [hasHiddenFiles, setHasHiddenFiles] = useState(false);
        const [visibilityMap, setVisibilityMap] = useState<Record<string, boolean>>({});

        const controlledFilesInfo = useMemo(() => {
            if (files === undefined) {
                return undefined;
            }

            return files.reduce((acc, file, ind) => {
                const fileKey = `${ind}_${file.name}`;
                acc[fileKey] = { ...getFilenameParts(file.name, size, customIcon), file };

                return acc;
            }, {} as Record<string, FileInfo>);
        }, [files, size, customIcon]);

        const filesInfo = controlledFilesInfo !== undefined ? controlledFilesInfo : innerFilesInfo;

        const mergedFilesInfo = useMemo(() => {
            if (Object.keys(visibilityMap).length === 0) {
                return filesInfo;
            }

            const result: Record<string, FileInfo> = {};
            Object.entries(filesInfo).forEach(([key, info]) => {
                result[key] = { ...info, isVisible: visibilityMap[key] !== false };
            });

            return result;
        }, [filesInfo, visibilityMap]);

        const filesLength = Object.keys(filesInfo).length;

        const horizontalClass = flow === 'horizontal' ? classes.horizontal : undefined;
        const verticalClass = flow === 'vertical' ? classes.vertical : undefined;
        const autoClass = flow === 'auto' ? classes.auto : undefined;
        const withHelperTextClass = helperText ? classes.withHelperText : undefined;

        const accept = acceptedFileFormats?.join(',');

        const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
            if (!localInputRef.current) {
                return;
            }

            if (onClick) {
                onClick(e);
            }

            localInputRef.current.click();
        };

        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            const fileList = e.target.files;

            if (onChange) {
                onChange(e);
            }

            if (!fileList || fileList.length === 0) {
                return;
            }

            const fileArray = Array.from(fileList);

            if (!hasAttachment || files !== undefined) {
                if (localInputRef.current) {
                    localInputRef.current.value = '';
                }
                return;
            }

            const filesData = fileArray.reduce((acc, file, ind) => {
                const fileKey = `${ind}_${file.name}`;
                acc[fileKey] = { ...getFilenameParts(file.name, size, customIcon), file };

                return acc;
            }, {} as Record<string, FileInfo>);

            if (localInputRef.current) {
                syncInputFiles(localInputRef.current, fileArray);
            }

            cellHelperRefs.current = {};
            setInnerFilesInfo(filesData);
            setHasHiddenFiles(false);
        };

        const handleClear = (fileKey: string) => {
            if (!localInputRef.current) {
                return;
            }

            if (onClear) {
                onClear(filesInfo[fileKey]);
            }

            if (files !== undefined) {
                return;
            }

            const updatedFilesInfo = { ...innerFilesInfo };
            delete updatedFilesInfo[fileKey];

            setInnerFilesInfo(updatedFilesInfo);
            delete cellHelperRefs.current[fileKey];
            syncInputFiles(
                localInputRef.current,
                Object.values(updatedFilesInfo).map((fi) => fi.file),
            );
        };

        const getCellRef = (element: HTMLDivElement | null, key: string) => {
            if (!cellHelperRefs?.current) {
                return;
            }
            if (element) {
                cellHelperRefs.current[key] = element;
            } else {
                delete cellHelperRefs.current[key];
            }
        };

        const updateHiddenFiles = () => {
            if (!multiple || Object.keys(filesInfo).length === 0) {
                setHasHiddenFiles(false);

                return;
            }

            if (flow !== 'horizontal') {
                setHasHiddenFiles(false);
                setVisibilityMap({});

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

                return totalWidth > fileWrapperWidth;
            });

            setHasHiddenFiles(firstHidden >= 0);

            const newKeys = Object.keys(filesInfo);
            const filesInfoHiddenKeys = firstHidden >= 0 ? newKeys.slice(firstHidden) : [];

            const newVisibilityMap: Record<string, boolean> = {};
            filesInfoHiddenKeys.forEach((key) => {
                newVisibilityMap[key] = false;
            });

            setVisibilityMap(newVisibilityMap);
        };

        useEffect(() => {
            if (files === undefined || !localInputRef.current) {
                return;
            }

            syncInputFiles(localInputRef.current, files);
        }, [files]);

        useIsomorphicLayoutEffect(() => {
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
                ref={innerRef}
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
                    Object.values(mergedFilesInfo)[0].isVisible && (
                        <>
                            <FilesWrapper
                                className={cx(horizontalClass, verticalClass, autoClass)}
                                applyOverflow={multiple && flow === 'horizontal'}
                            >
                                {Object.entries(mergedFilesInfo).map(
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
                        filesInfo={mergedFilesInfo}
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
