import React, { forwardRef, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { canUseDOM, cx, getSizeValueFromProp } from 'src/utils';
import { useResizeObserver } from 'src/hooks';
import type { RootProps } from 'src/engines';
import { IconCrossThin } from 'src/components/_Icon';

import type { NoteProps } from './Note.types';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as orientationCSS } from './variations/_orientation/base';
import {
    ActionContentContainer,
    base,
    CloseIconWrapper,
    ContentBefore,
    ContentWrapper,
    Text,
    TextBox,
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
                actionContent,
                orientation = 'vertical',
                ...rest
            },
            outerRef,
        ) => {
            const [innerText, setInnerText] = useState(text);
            const [contentBeforeWidth, setContentBeforeWidth] = useState(
                contentBefore ? `var(${tokens.fixedContentBeforeWidth})` : '0',
            );

            const contentWrapperRef = useRef<HTMLDivElement>(null);
            const textBoxRef = useRef<HTMLDivElement>(null);
            const contentBeforeRef = useRef<HTMLDivElement>(null);
            const titleHelperRef = useRef<HTMLDivElement>(null);
            const textRenderHelperRef = useRef<HTMLSpanElement>(null);

            const innerWidth = width ? getSizeValueFromProp(width) : 'fit-content';
            const innerHeight = height ? getSizeValueFromProp(height) : 'fit-content';

            const contentGapToken = contentBeforeSizing === 'scalable' ? tokens.gapScalable : tokens.gap;
            const contentBeforeOffsetToken = contentBefore
                ? `calc(${contentBeforeWidth} + var(${contentGapToken}))`
                : '0';

            const setTruncatedText = () => {
                if (
                    !canUseDOM ||
                    !contentWrapperRef?.current ||
                    !textBoxRef?.current ||
                    !textRenderHelperRef?.current
                ) {
                    return;
                }

                if (!text || typeof text !== 'string' || !height) {
                    setInnerText(text);
                    return;
                }

                const rootEl = contentWrapperRef.current.parentElement;
                if (!rootEl) {
                    return;
                }

                const rootStyle = window.getComputedStyle(rootEl);
                const paddingTop = parseFloat(rootStyle.paddingTop) || 0;
                const paddingBottom = parseFloat(rootStyle.paddingBottom) || 0;
                const contentHeight = rootEl.clientHeight - paddingTop - paddingBottom;

                const titleHeight = titleHelperRef.current?.offsetHeight || 0;

                const contentGap = titleHeight
                    ? Number(window.getComputedStyle(textBoxRef.current).rowGap.replace('px', '')) || 0
                    : 0;

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

            const setTruncatedTextRef = useRef(setTruncatedText);
            setTruncatedTextRef.current = setTruncatedText;

            useResizeObserver(
                contentWrapperRef,
                useCallback(() => setTruncatedTextRef.current(), []),
            );

            useLayoutEffect(() => {
                setTruncatedText();
            }, [text, title, contentBefore, contentBeforeSizing, stretch, orientation]);

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

            const isHorizontal = orientation === 'horizontal';

            return (
                <Root
                    ref={outerRef}
                    className={cx(
                        className,
                        stretch && classes.stretch,
                        contentBeforeSizing === 'scalable' && classes.contentAlignCenter,
                        isHorizontal && classes.orientationHorizontal,
                        Boolean(actionContent) && classes.hasActionContent,
                        hasClose && classes.hasClose,
                    )}
                    view={view}
                    size={size}
                    orientation={orientation}
                    style={
                        {
                            ...style,
                            [privateTokens.width]: innerWidth,
                            [privateTokens.height]: innerHeight,
                            [privateTokens.contentBeforeOffset]: contentBeforeOffsetToken,
                        } as CSSProperties
                    }
                    {...rest}
                >
                    <ContentWrapper ref={contentWrapperRef}>
                        {contentBefore && <ContentBefore ref={contentBeforeRef}>{contentBefore}</ContentBefore>}
                        <TextBox ref={textBoxRef}>
                            {title && (
                                <>
                                    <Title hasClose={!isHorizontal && hasClose}>{title}</Title>
                                    <TitleHelper ref={titleHelperRef}>C</TitleHelper>
                                </>
                            )}
                            {innerText && (
                                <>
                                    <Text>{innerText}</Text>
                                    <TextHelper ref={textRenderHelperRef}>C</TextHelper>
                                </>
                            )}
                        </TextBox>
                    </ContentWrapper>
                    {actionContent && <ActionContentContainer>{actionContent}</ActionContentContainer>}
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
        orientation: {
            css: orientationCSS,
        },
    },
    defaults: {
        view: 'default',
        size: 'm',
        orientation: 'vertical',
    },
};
