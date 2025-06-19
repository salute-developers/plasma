import React, { forwardRef, useCallback, useMemo, useState, useRef, KeyboardEvent, useLayoutEffect } from 'react';
import type { MutableRefObject } from 'react';
import { cx, safeUseId } from 'src/utils';
import type { RootProps } from 'src/engines/types';

import { IconDisclosureLeft, IconDisclosureRight } from '../../../../_Icon';
import { classes } from '../../../tokens';
import { TabItemRefs, TabsContext } from '../../../TabsContext';
import type { HorizontalTabsProps } from '../../../Tabs.types';
import { getFirstOverflowingTab, getLastOverflowingTab } from '../../../utils';

import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as pilledCSS } from './variations/_pilled/base';
import { base as stretchCSS } from './variations/_stretch/base';
import { StyledArrow, StyledContent, StyledContentWrapper, base } from './HorizontalTabs.styles';

enum Keys {
    end = 35,
    home = 36,
    left = 37,
    right = 39,
}

const getIconSize = (size?: string) => {
    return size === 'h1' || size === 'h2' ? 'm' : 's';
};

// TODO: https://github.com/salute-developers/plasma/issues/1474
export const horizontalTabsRoot = (Root: RootProps<HTMLDivElement, HorizontalTabsProps>) =>
    forwardRef<HTMLDivElement, HorizontalTabsProps>((props, outerRef) => {
        const {
            id,
            stretch = false,
            disabled = false,
            clip = 'scroll',
            size,
            view,
            children,
            pilled = false,
            index,
            className,
            hasDivider = true,
            ...rest
        } = props;
        const [firstItemVisible, setFirstItemVisible] = useState(true);
        const [lastItemVisible, setLastItemVisible] = useState(false);

        // Триггер доп. скролла при появлении левой стрелки, которая отъедает ширину scroll-контейнера
        const [shouldTriggerAdditionalScroll, setShouldTriggerAdditionalScroll] = useState(false);

        const refs = useMemo(() => new TabItemRefs(index), []);

        const uniqId = safeUseId();
        const tabsId = id || uniqId;

        const isFilled = view === 'filled'; // outer padding is only for filled view
        const pilledAttr = view !== 'clear' && pilled;
        const pilledClass = pilledAttr ? classes.tabsPilled : undefined;

        const noDividerClass = !hasDivider ? classes.tabsNoDivider : undefined;
        const stretchClass = firstItemVisible && lastItemVisible && stretch ? classes.tabsStretch : undefined;
        const hasLeftArrowClass = !firstItemVisible ? classes.tabsHasLeftArrow : undefined;
        const hasRightArrowClass = !lastItemVisible ? classes.tabsHasRightArrow : undefined;
        const clipScrollClass = clip === 'scroll' ? classes.tabsClipScroll : undefined;
        const clipShowAllClass = clip === 'showAll' ? classes.tabsClipShowAll : undefined;

        const scrollRef = useRef<HTMLElement | null>(null);
        const trackRef = useRef<HTMLElement | null>(null);
        const leftArrowRef = useRef<HTMLButtonElement | null>(null);

        const onPrev = useCallback(() => {
            if (disabled || !scrollRef.current) {
                return;
            }

            const { scrollLeft } = scrollRef.current;
            const firstOverflowingTab = getFirstOverflowingTab(
                refs.items.slice().reverse(),
                scrollLeft,
                rest.orientation,
            );

            if (!firstOverflowingTab?.current) {
                return;
            }

            const scrollElStyle = getComputedStyle(scrollRef.current);
            scrollRef.current.scrollTo({
                left: firstOverflowingTab.current.offsetLeft - parseInt(scrollElStyle.paddingLeft, 10),
            });
        }, [disabled, scrollRef, refs]);

        const onNext = useCallback(() => {
            if (disabled || !scrollRef.current) {
                return;
            }

            const scrollRight = Math.round(scrollRef.current.scrollLeft + scrollRef.current.clientWidth);
            const lastOverflowingTab = getLastOverflowingTab(refs.items, scrollRight, rest.orientation);

            if (!lastOverflowingTab?.current) {
                return;
            }

            if (firstItemVisible) {
                setShouldTriggerAdditionalScroll(true);
            }

            const scrollElStyle = getComputedStyle(scrollRef.current);
            scrollRef.current.scrollTo({
                left: Math.round(
                    lastOverflowingTab.current.offsetLeft +
                        lastOverflowingTab.current.offsetWidth -
                        scrollRef.current.clientWidth +
                        parseInt(scrollElStyle.paddingRight, 10),
                ),
            });
        }, [firstItemVisible, disabled, scrollRef, refs]);

        const PreviousButton = useMemo(
            () => (
                <StyledArrow
                    type="button"
                    aria-label="Предыдущий таб"
                    onClick={onPrev}
                    tabIndex={disabled ? -1 : 0}
                    disabled={disabled}
                    isFilled={isFilled}
                    ref={leftArrowRef}
                    isLeftArrow
                >
                    <IconDisclosureLeft size={getIconSize(size)} color="inherit" />
                </StyledArrow>
            ),
            [onPrev, size, disabled, isFilled],
        );

        const NextButton = useMemo(
            () => (
                <StyledArrow
                    type="button"
                    aria-label="Следующий таб"
                    onClick={onNext}
                    tabIndex={disabled ? -1 : 0}
                    disabled={disabled}
                    isFilled={isFilled}
                >
                    <IconDisclosureRight size={getIconSize(size)} color="inherit" />
                </StyledArrow>
            ),
            [onNext, size, disabled, isFilled],
        );

        const handleScroll = useCallback(
            (event: React.UIEvent<HTMLElement>): void => {
                event.stopPropagation();
                const scrollElStyle = getComputedStyle(event.currentTarget);
                const minScrollLeft = parseInt(scrollElStyle.paddingLeft, 10);
                const maxScrollLeft =
                    event.currentTarget.scrollWidth -
                    event.currentTarget.clientWidth -
                    parseInt(scrollElStyle.paddingRight, 10);
                const scrollLeft = Math.round(event.currentTarget.scrollLeft);

                setFirstItemVisible(scrollLeft <= minScrollLeft);
                setLastItemVisible(scrollLeft >= maxScrollLeft);
            },
            [setFirstItemVisible, setLastItemVisible],
        );

        const onKeyDown = useCallback(
            (event: KeyboardEvent<HTMLDivElement>) => {
                if (index === undefined) {
                    return;
                }

                const minIndex = 0;
                const maxIndex = refs.items.length - 1;
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
                    refs.items[nextIndex].current?.focus();
                    refs.items[nextIndex].current?.scrollIntoView({
                        block: 'nearest',
                        inline: 'center',
                        behavior: 'smooth',
                    });
                }
            },
            [index],
        );

        useLayoutEffect(() => {
            setLastItemVisible(scrollRef.current?.scrollWidth === scrollRef.current?.clientWidth);
        }, []);

        // Этот хук компенсирует появление левой стрелки при прокрутке
        useLayoutEffect(() => {
            if (firstItemVisible || !shouldTriggerAdditionalScroll || !scrollRef.current || !leftArrowRef.current) {
                return;
            }
            const style = getComputedStyle(scrollRef.current);
            scrollRef.current.scrollTo({
                left: Math.round(
                    scrollRef.current.scrollLeft + leftArrowRef.current.clientWidth + parseInt(style.paddingLeft, 10),
                ),
            });
            setShouldTriggerAdditionalScroll(false);
        }, [firstItemVisible, shouldTriggerAdditionalScroll, scrollRef, leftArrowRef]);

        return (
            <TabsContext.Provider value={refs}>
                <Root
                    view={view}
                    role="tablist"
                    // TODO: убрать каст any, когда будут удалены deprecated props
                    size={size as any}
                    pilled={pilled}
                    id={tabsId}
                    ref={outerRef}
                    disabled={disabled}
                    className={cx(
                        pilledClass,
                        stretchClass,
                        hasLeftArrowClass,
                        hasRightArrowClass,
                        noDividerClass,
                        className,
                    )}
                    onKeyDown={onKeyDown}
                    {...rest}
                >
                    {!firstItemVisible && PreviousButton}
                    <StyledContentWrapper
                        className={cx(clipScrollClass, clipShowAllClass)}
                        ref={scrollRef as MutableRefObject<HTMLDivElement | null>}
                        onScroll={handleScroll}
                    >
                        <StyledContent ref={trackRef as MutableRefObject<HTMLDivElement | null>}>
                            {children}
                        </StyledContent>
                    </StyledContentWrapper>
                    {!lastItemVisible && NextButton}
                </Root>
            </TabsContext.Provider>
        );
    });

export const horizontalTabsConfig = {
    name: 'HorizontalTabs',
    tag: 'div',
    layout: horizontalTabsRoot,
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
        stretch: {
            css: stretchCSS,
            attrs: true,
        },
        pilled: {
            css: pilledCSS,
        },
    },
    defaults: {
        view: 'clear',
        size: 'xs',
    },
};
