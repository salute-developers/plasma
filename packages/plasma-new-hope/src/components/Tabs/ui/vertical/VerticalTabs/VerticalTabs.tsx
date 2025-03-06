import React, { forwardRef, useCallback, useMemo, useState, useLayoutEffect, useRef, KeyboardEvent } from 'react';
import type { MutableRefObject } from 'react';
import { safeUseId } from '@salutejs/plasma-core';

import type { RootProps } from '../../../../../engines/types';
import { classes } from '../../../tokens';
import { cx } from '../../../../../utils';
import { TabItemRefs, TabsContext } from '../../../TabsContext';
import type { VerticalTabsProps } from '../../../Tabs.types';
import { IconDisclosureLeft, IconDisclosureRight } from '../../../../_Icon';
import { getFirstOverflowingTab, getLastOverflowingTab } from '../../../utils';

import { base, StyledArrow, StyledContent, StyledContentWrapper } from './VerticalTabs.styles';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as disabledCSS } from './variations/_disabled/base';

enum Keys {
    end = 35,
    home = 36,
    up = 38,
    down = 40,
}

// TODO: https://github.com/salute-developers/plasma/issues/1474
export const verticalTabsRoot = (Root: RootProps<HTMLDivElement, VerticalTabsProps>) =>
    forwardRef<HTMLDivElement, VerticalTabsProps>((props, outerRef) => {
        const {
            id,
            disabled = false,
            clip = 'showAll',
            size,
            view,
            children,
            index,
            className,
            orientation,
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

        const noDividerClass = !hasDivider ? classes.tabsNoDivider : undefined;
        const hasTopArrowClass = !firstItemVisible ? classes.tabsHasTopArrow : undefined;
        const hasBottomArrowClass = !lastItemVisible ? classes.tabsHasBottomArrow : undefined;
        const clipScrollClass = clip === 'scroll' ? classes.tabsClipScroll : undefined;
        const clipShowAllClass = clip === 'showAll' ? classes.tabsClipShowAll : undefined;

        const scrollRef = useRef<HTMLElement | null>(null);
        const trackRef = useRef<HTMLElement | null>(null);
        const upArrowRef = useRef<HTMLButtonElement | null>(null);

        const onPrev = useCallback(() => {
            if (disabled || !scrollRef.current) {
                return;
            }

            const { scrollTop } = scrollRef.current;
            const firstOverflowingTab = getFirstOverflowingTab(refs.items.slice().reverse(), scrollTop, orientation);

            if (!firstOverflowingTab?.current) {
                return;
            }

            const scrollElStyle = getComputedStyle(scrollRef.current);
            scrollRef.current.scrollTo({
                top: firstOverflowingTab.current.offsetTop - parseInt(scrollElStyle.paddingTop, 10),
            });
        }, [disabled, scrollRef, refs]);

        const onNext = useCallback(() => {
            if (disabled || !scrollRef.current) {
                return;
            }

            const scrollBottom = Math.round(scrollRef.current.scrollTop + scrollRef.current.clientHeight);
            const lastOverflowingTab = getLastOverflowingTab(refs.items, scrollBottom, orientation);

            if (!lastOverflowingTab?.current) {
                return;
            }

            if (firstItemVisible) {
                setShouldTriggerAdditionalScroll(true);
            }

            const scrollElStyle = getComputedStyle(scrollRef.current);
            scrollRef.current.scrollTo({
                top: Math.round(
                    lastOverflowingTab.current.offsetTop +
                        lastOverflowingTab.current.offsetHeight -
                        scrollRef.current.clientHeight +
                        parseInt(scrollElStyle.paddingTop, 10),
                ),
            });
        }, [firstItemVisible, disabled, scrollRef, refs]);

        const PreviousButton = (
            <StyledArrow
                type="button"
                aria-label="Предыдущий таб"
                onClick={onPrev}
                tabIndex={disabled ? -1 : 0}
                disabled={disabled}
                ref={upArrowRef}
            >
                <IconDisclosureLeft color="inherit" />
            </StyledArrow>
        );

        const NextButton = (
            <StyledArrow
                type="button"
                aria-label="Следующий таб"
                onClick={onNext}
                tabIndex={disabled ? -1 : 0}
                disabled={disabled}
            >
                <IconDisclosureRight color="inherit" />
            </StyledArrow>
        );

        const handleScroll = useCallback(
            (event: React.UIEvent<HTMLElement>): void => {
                event.stopPropagation();
                const scrollElStyle = getComputedStyle(event.currentTarget);
                const minScrollTop = parseInt(scrollElStyle.paddingLeft, 10);
                const maxScrollTop =
                    event.currentTarget.scrollHeight -
                    event.currentTarget.clientHeight -
                    parseInt(scrollElStyle.paddingTop, 10);
                const scrollTop = Math.round(event.currentTarget.scrollTop);

                setFirstItemVisible(scrollTop <= minScrollTop);
                setLastItemVisible(scrollTop >= maxScrollTop);
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
                    case Keys.up:
                        nextIndex = index > minIndex ? index - 1 : index;
                        break;
                    case Keys.down:
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
                        inline: 'nearest',
                        behavior: 'smooth',
                    });
                }
            },
            [index],
        );

        useLayoutEffect(() => {
            setLastItemVisible(scrollRef.current?.scrollHeight === scrollRef.current?.clientHeight);
        }, []);

        // Этот хук компенсирует появление верхней стрелки при прокрутке
        useLayoutEffect(() => {
            if (firstItemVisible || !shouldTriggerAdditionalScroll || !scrollRef.current || !upArrowRef.current) {
                return;
            }

            const style = getComputedStyle(scrollRef.current);
            scrollRef.current.scrollTo({
                top: Math.round(
                    scrollRef.current.scrollTop + upArrowRef.current.clientHeight + parseInt(style.paddingTop, 10),
                ),
            });
            setShouldTriggerAdditionalScroll(false);
        }, [firstItemVisible, shouldTriggerAdditionalScroll, scrollRef, upArrowRef]);

        return (
            <TabsContext.Provider value={refs}>
                <Root
                    view={view}
                    role="tablist"
                    size={size}
                    id={tabsId}
                    ref={outerRef}
                    disabled={disabled}
                    className={cx(hasTopArrowClass, hasBottomArrowClass, noDividerClass, className)}
                    onKeyDown={onKeyDown}
                    orientation={orientation}
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

export const verticalTabsConfig = {
    name: 'VerticalTabs',
    tag: 'div',
    layout: verticalTabsRoot,
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
    },
    defaults: {
        view: 'divider',
        size: 'xs',
    },
};
