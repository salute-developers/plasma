import React, { forwardRef, useCallback, useMemo, useState, useEffect, useRef, KeyboardEvent } from 'react';
import type { MutableRefObject } from 'react';
import { animatedScrollToX, safeUseId } from '@salutejs/plasma-core';

import type { RootProps } from '../../../../engines/types';
import { IconDisclosureLeft, IconDisclosureRight } from '../../../_Icon';
import { classes, tokens } from '../../tokens';
import { cx } from '../../../../utils';
import { TabItemRefs, TabsContext } from '../../TabsContext';

import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as pilledCSS } from './variations/_pilled/base';
import { base as stretchCSS } from './variations/_stretch/base';
import { StyledArrow, StyledContent, StyledContentWrapper, base } from './Tabs.styles';
import type { TabsProps } from './Tabs.types';

enum Keys {
    end = 35,
    home = 36,
    left = 37,
    right = 39,
}

export const tabsRoot = (Root: RootProps<HTMLDivElement, TabsProps>) =>
    forwardRef<HTMLDivElement, TabsProps>((props, outerRef) => {
        const { id, stretch = false, disabled = false, size, view, children, pilled, index, ...rest } = props;

        const [firstItemVisible, setFirstItemVisible] = useState(true);
        const [lastItemVisible, setLastItemVisible] = useState(true);

        const refs = useMemo(() => new TabItemRefs(index), []);

        const uniqId = safeUseId();
        const tabsId = id || uniqId;

        const isFilled = view === 'filled'; // outer padding is only for filled view
        const pilledAttr = view !== 'clear' && pilled;
        const pilledClass = pilledAttr ? classes.tabsPilled : undefined;

        const stretchClass = firstItemVisible && lastItemVisible && stretch ? classes.tabsStretch : undefined;
        const hasLeftArrowClass = !firstItemVisible ? classes.tabsHasLeftArrow : undefined;
        const hasRightArrowClass = !lastItemVisible ? classes.tabsHasRightArrow : undefined;

        const scrollRef = useRef<HTMLElement | null>(null);
        const trackRef = useRef<HTMLElement | null>(null);

        const onPrev = useCallback(() => {
            !disabled &&
                scrollRef.current &&
                animatedScrollToX(scrollRef.current, scrollRef.current.scrollLeft - scrollRef.current.offsetWidth / 2);
        }, [disabled, scrollRef]);

        const onNext = useCallback(() => {
            !disabled &&
                scrollRef.current &&
                animatedScrollToX(scrollRef.current, scrollRef.current.scrollLeft + scrollRef.current.offsetWidth / 2);
        }, [disabled, scrollRef]);

        const PreviousButton = useMemo(
            () => (
                <StyledArrow
                    type="button"
                    aria-label="Предыдущий таб"
                    onClick={onPrev}
                    tabIndex={disabled ? -1 : 0}
                    disabled={disabled}
                    isFilled={isFilled}
                    isLeftArrow
                >
                    <IconDisclosureLeft color={`var(${tokens.arrowColor})`} />
                </StyledArrow>
            ),
            [onPrev, disabled, isFilled],
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
                    <IconDisclosureRight color={`var(${tokens.arrowColor})`} />
                </StyledArrow>
            ),
            [onNext, disabled, isFilled],
        );

        const handleScroll = useCallback(
            (event: React.UIEvent<HTMLElement>): void => {
                event.stopPropagation();
                const maxScrollLeft = event.currentTarget.scrollWidth - event.currentTarget.clientWidth;

                setFirstItemVisible(event.currentTarget.scrollLeft <= 0);
                setLastItemVisible(event.currentTarget.scrollLeft >= maxScrollLeft);
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
                        block: 'center',
                        inline: 'center',
                        behavior: 'smooth',
                    });
                }
            },
            [index],
        );

        useEffect(() => {
            setLastItemVisible(scrollRef.current?.scrollWidth === scrollRef.current?.clientWidth);
        }, []);

        return (
            <TabsContext.Provider value={refs}>
                <Root
                    view={view}
                    role="tablist"
                    size={size}
                    pilled={pilled}
                    id={tabsId}
                    ref={outerRef}
                    disabled={disabled}
                    className={cx(pilledClass, stretchClass, hasLeftArrowClass, hasRightArrowClass)}
                    onKeyDown={onKeyDown}
                    {...rest}
                >
                    {!firstItemVisible && PreviousButton}
                    <StyledContentWrapper
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

export const tabsConfig = {
    name: 'Tabs',
    tag: 'div',
    layout: tabsRoot,
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
