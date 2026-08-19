import React, {
    forwardRef,
    useCallback,
    useMemo,
    useState,
    useEffect,
    useLayoutEffect,
    useRef,
    KeyboardEvent,
} from 'react';
import type { RefObject, MutableRefObject } from 'react';
import { safeUseId, cx } from 'src/utils';
import type { RootProps } from 'src/engines/types';

import {
    IconDisclosureLeftWithOffset,
    IconDisclosureRightWithOffset,
    IconDisclosureDownWithOffset,
    IconDisclosureUpWithOffset,
} from '../../../_Icon';
import { classes, privateTokens, tokens } from '../../tokens';
import { useSegmentInner } from '../../SegmentProvider/SegmentProvider';

import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as pilledCSS } from './variations/_pilled/base';
import { base as filledBackgroundCSS } from './variations/_filledBackgound/base';
import { base as stretchCSS } from './variations/_stretch/base';
import { base as orientationCSS } from './variations/_orientation/base';
import type { SegmentGroupProps } from './SegmentGroup.types';
import {
    StyledContent,
    StyledContentWrapper,
    StyledThumb,
    base,
    StyledLeftArrow,
    StyledRightArrow,
    StyledTopArrow,
    StyledBottomArrow,
} from './SegmentGroup.styles';

enum Keys {
    end = 35,
    home = 36,
    left = 37,
    right = 39,
}

export const getChildNodes = (wrapper: HTMLElement | null) => {
    const container = wrapper?.firstChild;

    if (!container) {
        return [];
    }

    /*
     * Скользящий фон выбранного сегмента (StyledThumb) — декоративный оверлей внутри трека,
     * а не сегмент, поэтому не должен участвовать в навигации стрелками/клавиатурой
     */
    return (Array.from(container.childNodes) as HTMLElement[]).filter(
        (node) => !node?.hasAttribute?.('data-segment-thumb'),
    );
};

export const segmentGroupRoot = (Root: RootProps<HTMLDivElement, SegmentGroupProps>) =>
    forwardRef<HTMLDivElement, SegmentGroupProps>((props, outerRef) => {
        const {
            id,
            selectionMode,
            pilled,
            stretch,
            clip = true,
            orientation = 'horizontal',
            filledBackground = false,
            hasBackground = false,
            hasDivider = false,
            disabled = false,
            size,
            view,
            children,
            ...rest
        } = props;

        const scrollRef = useRef<HTMLElement | null>(null);
        const trackRef = useRef<HTMLElement | null>(null);
        const leftArrowRef = useRef<HTMLButtonElement | null>(null);
        const thumbRef = useRef<HTMLDivElement | null>(null);
        const hasPositionedThumb = useRef(false);

        const {
            setSelectionMode,
            setDisabledGroup,
            setHasDivider,
            setOrientation,
            selectedSegmentItems,
            getItemRef,
        } = useSegmentInner();

        const isMultipleSelection = (selectionMode ?? 'single') === 'multiple';

        const [firstItemVisible, setFirstItemVisible] = useState(true);
        const [lastItemVisible, setLastItemVisible] = useState(true);

        const uniqId = safeUseId();
        const segmentGroupId = id || uniqId;

        const canClip = clip && !stretch;

        const isVertical = orientation === 'vertical';
        const stretchClass =
            (clip ? firstItemVisible && lastItemVisible : true) && stretch ? classes.segmentStretch : undefined;

        const orientationClass = isVertical ? classes.segmentVertical : undefined;
        const clipScrollClass = canClip ? classes.segmentGroupClipScroll : undefined;

        const pilledAttr = (view !== 'clear' || hasBackground) && pilled;
        const filledBackgroundAttr = (view !== 'clear' && filledBackground) || hasBackground;

        const pilledClass = pilledAttr ? classes.segmentPilled : undefined;
        const filledClass = filledBackgroundAttr ? classes.segmentGroupFilledBackground : undefined;

        const onPrev = useCallback(() => {
            if (disabled || !scrollRef.current) {
                return;
            }

            const childNodes = getChildNodes(scrollRef.current);

            const scrollLeft = Math.round(scrollRef.current.scrollLeft);
            const firstOverflowingTab = childNodes
                .slice()
                .reverse()
                .find((child: HTMLElement | null) => {
                    if (!child || child.offsetLeft === undefined) {
                        return;
                    }
                    const tabStartX = child.offsetLeft;

                    return tabStartX < scrollLeft;
                });

            firstOverflowingTab?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
        }, [disabled, scrollRef]);

        const onNext = useCallback(() => {
            if (disabled || !scrollRef.current) {
                return;
            }

            const scrollRight = Math.round(scrollRef.current.scrollLeft + scrollRef.current.clientWidth);

            const childNodes = getChildNodes(scrollRef.current);

            const lastOverflowingChild = childNodes.find((child) => {
                if (!child || child.offsetLeft === undefined) {
                    return;
                }
                const tabEndX = child.offsetLeft + child.offsetWidth;

                return tabEndX > scrollRight;
            });

            lastOverflowingChild?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
        }, [disabled, scrollRef]);

        const onKeyDown = useCallback((event: KeyboardEvent<HTMLDivElement>) => {
            const childNodes = getChildNodes(scrollRef?.current);

            const index = childNodes.findIndex((child) => document.activeElement === child);

            const minIndex = 0;
            const maxIndex = childNodes.length - 1;
            let nextIndex: number;

            switch (event.keyCode) {
                case Keys.end:
                    nextIndex = maxIndex;
                    break;
                case Keys.left:
                    nextIndex = index > minIndex ? index - 1 : index;
                    break;
                case Keys.right:
                    nextIndex = index < maxIndex ? index + 1 : index;
                    break;
                case Keys.home:
                    nextIndex = minIndex;
                    break;
                default:
                    return;
            }

            if (nextIndex !== index) {
                event.preventDefault();
                childNodes[nextIndex]?.focus();
                childNodes[nextIndex]?.scrollIntoView({
                    block: 'center',
                    inline: 'center',
                    behavior: 'smooth',
                });
            }
        }, []);

        const updateThumbPosition = useCallback(() => {
            const thumb = thumbRef.current;

            if (!thumb) {
                return;
            }

            const selectedValue = selectedSegmentItems[0];
            const selectedItem = selectedValue ? getItemRef(selectedValue) : undefined;

            if (!selectedItem) {
                thumb.style.setProperty(privateTokens.thumbOpacity, '0');
                return;
            }

            /**
             * Первое позиционирование (будь то при монтировании с defaultSelected, или при первом клике,
             * если изначально ничего не было выбрано) не должно ехать из угла 0,0
             * с нулевыми шириной/высотой — отключаем transition на этот кадр
             */
            const isFirstPositioning = !hasPositionedThumb.current;

            if (isFirstPositioning) {
                thumb.style.transitionDuration = '0s';
            }

            const itemComputedStyle = getComputedStyle(selectedItem);
            const selectedBackground = itemComputedStyle.getPropertyValue(tokens.itemSelectedBackgroundColor).trim();

            thumb.style.setProperty(privateTokens.thumbOpacity, '1');
            thumb.style.setProperty(privateTokens.thumbX, `${selectedItem.offsetLeft}px`);
            thumb.style.setProperty(privateTokens.thumbY, `${selectedItem.offsetTop}px`);
            thumb.style.setProperty(privateTokens.thumbWidth, `${selectedItem.offsetWidth}px`);
            thumb.style.setProperty(privateTokens.thumbHeight, `${selectedItem.offsetHeight}px`);
            thumb.style.setProperty(privateTokens.thumbBackground, selectedBackground || 'transparent');

            thumb.style.borderRadius = itemComputedStyle.borderRadius;

            if (isFirstPositioning) {
                hasPositionedThumb.current = true;
                requestAnimationFrame(() => {
                    if (thumbRef.current) {
                        thumbRef.current.style.transitionDuration = '';
                    }
                });
            }
        }, [selectedSegmentItems, getItemRef]);

        useLayoutEffect(() => {
            if (isMultipleSelection) {
                return;
            }

            updateThumbPosition();
        }, [isMultipleSelection, updateThumbPosition, children]);

        useEffect(() => {
            if (isMultipleSelection || !trackRef.current || typeof ResizeObserver === 'undefined') {
                return undefined;
            }

            const observer = new ResizeObserver(() => updateThumbPosition());
            observer.observe(trackRef.current);

            return () => observer.disconnect();
        }, [isMultipleSelection, updateThumbPosition]);

        const handleScroll = useCallback(
            (event: React.UIEvent<HTMLElement>): void => {
                event.stopPropagation?.();

                if (!canClip) {
                    setFirstItemVisible(true);
                    setLastItemVisible(true);
                    return;
                }

                if (isVertical) {
                    const maxScrollTop = event.currentTarget.scrollHeight - event.currentTarget.clientHeight;
                    const scrollTop = Math.round(event.currentTarget.scrollTop);

                    setFirstItemVisible(scrollTop <= 0);
                    setLastItemVisible(scrollTop >= maxScrollTop);
                    return;
                }

                const maxScrollLeft = event.currentTarget.scrollWidth - event.currentTarget.clientWidth;
                const scrollLeft = Math.round(event.currentTarget.scrollLeft);

                setFirstItemVisible(scrollLeft <= 0);
                setLastItemVisible(scrollLeft >= maxScrollLeft);
            },
            [isVertical, canClip],
        );

        useEffect(() => {
            handleScroll(({ currentTarget: scrollRef.current } as unknown) as React.UIEvent<HTMLElement>);
        }, [handleScroll]);

        useEffect(() => {
            if (!canClip) {
                setLastItemVisible(true);
                return;
            }

            setLastItemVisible(
                isVertical
                    ? scrollRef.current?.scrollHeight === scrollRef.current?.clientHeight
                    : scrollRef.current?.scrollWidth === scrollRef.current?.clientWidth,
            );
        }, [isVertical, canClip]);

        // Этот хук компенсирует появление левой/верхней стрелки при прокрутке
        useEffect(() => {
            if (firstItemVisible || !scrollRef.current || !leftArrowRef.current) {
                return;
            }

            if (isVertical) {
                scrollRef.current.scrollTo({
                    top: Math.round(scrollRef.current.scrollTop + leftArrowRef.current.clientHeight),
                });
                return;
            }

            scrollRef.current.scrollTo({
                left: Math.round(scrollRef.current.scrollLeft + leftArrowRef.current.clientWidth),
            });
        }, [firstItemVisible, isVertical]);

        const PreviousButton = useMemo(() => {
            const ArrowNode = isVertical ? StyledTopArrow : StyledLeftArrow;
            return (
                <ArrowNode
                    type="button"
                    aria-label="Предыдущий сегмент"
                    onClick={onPrev}
                    tabIndex={disabled ? -1 : 0}
                    disabled={disabled}
                >
                    {isVertical ? (
                        <IconDisclosureUpWithOffset color={`var(${tokens.arrowColor})`} size="s" />
                    ) : (
                        <IconDisclosureLeftWithOffset color={`var(${tokens.arrowColor})`} />
                    )}
                </ArrowNode>
            );
        }, [onPrev, isVertical]);

        const NextButton = useMemo(() => {
            const ArrowNode = isVertical ? StyledBottomArrow : StyledRightArrow;
            return (
                <ArrowNode
                    type="button"
                    aria-label="Следующий сегмент"
                    onClick={onNext}
                    tabIndex={disabled ? -1 : 0}
                    disabled={disabled}
                >
                    {isVertical ? (
                        <IconDisclosureDownWithOffset color={`var(${tokens.arrowColor})`} size="s" />
                    ) : (
                        <IconDisclosureRightWithOffset color={`var(${tokens.arrowColor})`} />
                    )}
                </ArrowNode>
            );
        }, [onNext, isVertical]);

        useEffect(() => {
            selectionMode && setSelectionMode(selectionMode);
            setDisabledGroup(disabled);
            setHasDivider(hasDivider);
            setOrientation(orientation);
        }, [selectionMode, disabled, hasDivider, orientation]);

        return (
            <Root
                view={view}
                size={size}
                orientation={orientation}
                id={segmentGroupId}
                ref={outerRef}
                filledBackground={filledBackgroundAttr}
                disabled={disabled}
                pilled={pilledAttr}
                className={cx(pilledClass, filledClass, stretchClass, orientationClass)}
                onKeyDown={onKeyDown}
                {...rest}
            >
                {!firstItemVisible && PreviousButton}
                <StyledContentWrapper
                    className={cx(clipScrollClass)}
                    ref={scrollRef as RefObject<HTMLDivElement>}
                    onScroll={handleScroll}
                >
                    <StyledContent ref={trackRef as MutableRefObject<HTMLDivElement | null>}>
                        {children}
                        {!isMultipleSelection && <StyledThumb ref={thumbRef} aria-hidden data-segment-thumb />}
                    </StyledContent>
                </StyledContentWrapper>
                {!lastItemVisible && NextButton}
            </Root>
        );
    });

export const segmentGroupConfig = {
    name: 'SegmentGroup',
    tag: 'div',
    layout: segmentGroupRoot,
    base,
    variations: {
        size: {
            css: sizeCSS,
        },
        view: {
            css: viewCSS,
        },
        disabled: {
            css: disabledCSS,
            attrs: true,
        },
        pilled: {
            css: pilledCSS,
            attrs: true,
        },
        stretch: {
            css: stretchCSS,
            attrs: true,
        },
        orientation: {
            css: orientationCSS,
        },
        filledBackground: {
            css: filledBackgroundCSS,
            attrs: true,
        },
    },
    defaults: {
        view: 'clear',
        size: 'xs',
    },
};
