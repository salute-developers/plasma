import React, { forwardRef, useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { useResizeObserver } from '@salutejs/plasma-core';

import { canUseDOM, cx, getSizeValueFromProp } from '../../utils';
import type { RootProps } from '../../engines';
import { IconCrossThin } from '../_Icon/Icons/IconCrossThin';

import type { NoteProps } from './Note.types';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import {
    base,
    CloseIconWrapper,
    ContentBefore,
    ContentWrapper,
    Text,
    TextHelper,
    Title,
    TitleHelper,
} from './Note.styles';
import { classes, privateTokens, tokens } from './Note.tokens';

export const noteRoot = (Root: RootProps<HTMLDivElement, NoteProps>) =>
    forwardRef<HTMLDivElement, NoteProps>(
        (
            {
                className,
                style,
                title,
                text,
                contentBefore,
                contentBeforeSizing = 'fixed',
                size,
                view,
                stretch,
                width,
                height,
                hasClose,
                onCloseButtonClick,
                ...rest
            },
            outerRef,
        ) => {
            const [innerText, setInnerText] = useState(text);
            const [contentBeforeWidth, setContentBeforeWidth] = useState(
                contentBefore ? `var(${tokens.fixedContentBeforeWidth})` : '0',
            );

            const contentWrapperRef = useRef<HTMLDivElement>(null);
            const contentBeforeRef = useRef<HTMLDivElement>(null);
            const titleHelperRef = useRef<HTMLDivElement>(null);
            const textRenderHelperRef = useRef<HTMLSpanElement>(null);

            const innerWidth = width ? getSizeValueFromProp(width) : 'fit-content';
            const innerHeight = height ? getSizeValueFromProp(height) : 'fit-content';

            const contentGapToken = contentBeforeSizing === 'scalable' ? tokens.gapScalable : tokens.gap;
            const contentWidthWithOffsetToken = contentBefore
                ? `calc(100% - ${contentBeforeWidth} - var(${contentGapToken}))`
                : '100%';

            const setTruncatedText = () => {
                if (
                    !canUseDOM ||
                    !text ||
                    !contentWrapperRef?.current ||
                    !textRenderHelperRef?.current ||
                    (!width && !height)
                ) {
                    return;
                }

                const contentHeight = contentWrapperRef.current.offsetHeight;
                const titleHeight = titleHelperRef.current?.offsetHeight || 0;

                const contentGap = Number(window.getComputedStyle(contentWrapperRef.current).rowGap.replace('px', ''));

                const textAvailableHeight = contentHeight - titleHeight - contentGap;

                textRenderHelperRef.current.textContent = text;

                if (textRenderHelperRef.current.offsetHeight <= textAvailableHeight) {
                    setInnerText(text);
                    return;
                }

                let fullText = `${text.slice(0, -3)}...`;

                for (let i = text.length - 1; i >= 0; i -= 1) {
                    textRenderHelperRef.current.textContent = fullText;

                    if (textRenderHelperRef.current.offsetHeight <= textAvailableHeight) {
                        break;
                    }

                    fullText = `${fullText.slice(0, i)}...`;
                }

                setInnerText(fullText);
            };

            useResizeObserver(contentWrapperRef, setTruncatedText);

            useLayoutEffect(() => {
                setTruncatedText();
            }, [text, contentBefore, contentBeforeSizing, stretch]);

            useEffect(() => {
                if (!contentBeforeRef?.current) {
                    return;
                }

                if (contentBeforeSizing === 'scalable') {
                    setContentBeforeWidth(`${contentBeforeRef.current.offsetWidth}px`);
                    return;
                }

                setContentBeforeWidth(`var(${tokens.fixedContentBeforeWidth})`);
            }, [contentBefore, contentBeforeSizing]);

            return (
                <Root
                    ref={outerRef}
                    className={cx(
                        className,
                        stretch && classes.stretch,
                        contentBeforeSizing === 'scalable' && classes.contentAlignCenter,
                    )}
                    view={view}
                    size={size}
                    style={
                        {
                            ...style,
                            [privateTokens.width]: innerWidth,
                            [privateTokens.height]: innerHeight,
                            [privateTokens.contentWidthWithOffset]: contentWidthWithOffsetToken,
                        } as CSSProperties
                    }
                    {...rest}
                >
                    {contentBefore && <ContentBefore ref={contentBeforeRef}>{contentBefore}</ContentBefore>}
                    <ContentWrapper ref={contentWrapperRef}>
                        {title && (
                            <>
                                <Title hasClose={hasClose}>{title}</Title>
                                <TitleHelper ref={titleHelperRef}>C</TitleHelper>
                            </>
                        )}
                        {innerText && (
                            <>
                                <Text>
                                    {innerText}
                                    <TextHelper ref={textRenderHelperRef}>C</TextHelper>
                                </Text>
                            </>
                        )}
                    </ContentWrapper>
                    {hasClose && (
                        <CloseIconWrapper
                            view="clear"
                            size="s"
                            onClick={onCloseButtonClick}
                            className={classes.closeIcon}
                        >
                            <IconCrossThin size="s" sizeCustomProperty={tokens.closeIconSize} color="inherit" />
                        </CloseIconWrapper>
                    )}
                </Root>
            );
        },
    );

export const noteConfig = {
    name: 'Note',
    tag: 'div',
    layout: noteRoot,
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
