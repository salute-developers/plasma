import React, { forwardRef, useEffect, useRef, useState } from 'react';
import type { ChangeEvent, CSSProperties, DragEvent, MouseEvent } from 'react';
import { useForkRef, useResizeObserver } from '@salutejs/plasma-core';

import { canUseDOM, cx, getSizeValueFromProp } from '../../utils';
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
    DescriptionHelper,
    DropzoneHandlerOverlay,
    HiddenInput,
    StyledIcon,
    Title,
    TitleHelper,
    ContentWrapper,
    IconWrapper,
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
                iconPlacement = 'left',
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
            const [innerTitle, setInnerTitle] = useState(title);
            const [innerDescription, setInnerDescription] = useState(description);

            const inputRef = useRef<HTMLInputElement>(null);
            const forkInputRef = useForkRef(outerRef, inputRef);

            const contentRef = useRef<HTMLDivElement>(null);
            const iconWrapperRef = useRef<HTMLDivElement>(null);
            const iconRef = useRef<HTMLDivElement>(null);
            const contentWrapperRef = useRef<HTMLDivElement>(null);
            const titleRef = useRef<HTMLDivElement>(null);
            const titleHelperRef = useRef<HTMLDivElement>(null);
            const descriptionRef = useRef<HTMLDivElement>(null);
            const descriptionHelperRef = useRef<HTMLDivElement>(null);

            const innerWidth = width ? getSizeValueFromProp(width) : 'fit-content';
            const innerHeight = height ? getSizeValueFromProp(height) : 'fit-content';

            const isTitleString = typeof title === 'string';
            const isDescriptionString = typeof description === 'string';

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

            const truncateContent = () => {
                if (
                    !canUseDOM ||
                    !descriptionRef?.current ||
                    !contentWrapperRef?.current ||
                    !titleRef?.current ||
                    !titleHelperRef?.current ||
                    !iconRef?.current ||
                    !iconWrapperRef?.current ||
                    !contentRef?.current ||
                    !descriptionHelperRef?.current ||
                    (!width && !height)
                ) {
                    return;
                }

                const contentHeight = contentRef.current.offsetHeight;
                const iconHeight = iconRef.current.offsetHeight;
                const iconWidth = iconPlacement === 'top' ? 0 : iconRef.current.offsetWidth;
                const titleHeight = titleRef.current.offsetHeight;

                const iconContentGap =
                    iconPlacement === 'top'
                        ? Number(window.getComputedStyle(iconWrapperRef.current).rowGap.replace('px', ''))
                        : 0;

                const availableWidth = contentRef.current.offsetWidth - iconWidth - iconContentGap;

                const contentGap = Number(window.getComputedStyle(contentWrapperRef.current).rowGap.replace('px', ''));

                const titleFontWidth = Math.floor(titleHelperRef.current.offsetWidth);
                const titleFontHeight = Math.floor(titleHelperRef.current.offsetHeight);

                const descriptionFontWidth = Math.floor(descriptionHelperRef.current.offsetWidth);
                const descriptionFontHeight = Math.floor(descriptionHelperRef.current.offsetHeight);

                const titleAvailableHeight =
                    contentHeight - iconHeight - iconContentGap - descriptionFontHeight - contentGap;

                const titleMaxChars = Math.floor(
                    (availableWidth / titleFontWidth) * (titleAvailableHeight / titleFontHeight),
                );

                let resTitleLength = 0;

                if (title && isTitleString) {
                    const newTitle = title.length <= titleMaxChars ? title : `${title.slice(0, titleMaxChars - 3)}...`;
                    resTitleLength = newTitle.length;
                    setInnerTitle(newTitle);
                }

                const resultTitleHeight = Math.floor(
                    (titleFontHeight * titleFontWidth * resTitleLength) / availableWidth,
                );

                const descriptionAvailableHeight =
                    titleAvailableHeight >= titleHeight + 2 * descriptionFontHeight
                        ? contentHeight - resultTitleHeight - iconContentGap - contentGap
                        : descriptionFontHeight;

                const descriptionMaxChars = Math.floor(
                    (availableWidth / descriptionFontWidth) * (descriptionAvailableHeight / descriptionFontHeight),
                );

                if (description && isDescriptionString) {
                    const newDescription =
                        description.length <= descriptionMaxChars
                            ? description
                            : `${description.slice(0, descriptionMaxChars - 3)}...`;
                    setInnerDescription(newDescription);
                }
            };

            useResizeObserver(contentRef, truncateContent);

            useEffect(() => {
                truncateContent();
            }, [title, description, iconPlacement]);

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
                    <Content ref={contentRef}>
                        <IconWrapper
                            ref={iconWrapperRef}
                            className={cx(iconPlacement === 'top' && classes.verticalContentPlacing)}
                        >
                            <StyledIcon ref={iconRef}>
                                {icon || <IconArrowBarDown color="inherit" size="s" />}
                            </StyledIcon>
                            <ContentWrapper ref={contentWrapperRef}>
                                {title && isTitleString ? (
                                    <>
                                        <Title ref={titleRef}>{innerTitle}</Title>
                                        <TitleHelper ref={titleHelperRef}>C</TitleHelper>
                                    </>
                                ) : (
                                    title
                                )}
                                {description && isDescriptionString ? (
                                    <>
                                        <Description ref={descriptionRef}>{innerDescription}</Description>
                                        <DescriptionHelper ref={descriptionHelperRef}>C</DescriptionHelper>
                                    </>
                                ) : (
                                    description
                                )}
                            </ContentWrapper>
                        </IconWrapper>
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
