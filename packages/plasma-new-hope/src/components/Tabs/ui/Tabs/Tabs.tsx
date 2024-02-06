import React, { forwardRef, useCallback, useMemo, useState, useEffect, useRef } from 'react';
import type { MutableRefObject } from 'react';
import { animatedScrollToX, safeUseId } from '@salutejs/plasma-core';

import type { RootProps } from '../../../../engines/types';
import { IconDisclosureLeft, IconDisclosureRight } from '../../../_Icon';
import { classes, tokens } from '../../tokens';
import { cx } from '../../../../utils';

import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as pilledCSS } from './variations/_pilled/base';
import { base as stretchCSS } from './variations/_stretch/base';
import { StyledArrow, StyledContent, StyledContentWrapper, base } from './Tabs.styles';
import type { TabsProps } from './Tabs.types';

export const tabsRoot = (Root: RootProps<HTMLDivElement, TabsProps>) =>
    forwardRef<HTMLDivElement, TabsProps>((props, outerRef) => {
        const { id, stretch = false, disabled = false, size, view, children, pilled, ...rest } = props;

        const [firstItemVisible, setFirstItemVisible] = useState(true);
        const [lastItemVisible, setLastItemVisible] = useState(true);

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
            [onPrev],
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
            [onNext],
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

        useEffect(() => {
            setLastItemVisible(scrollRef.current?.scrollWidth === scrollRef.current?.clientWidth);
        }, []);

        return (
            <Root
                view={view}
                role="tablist"
                size={size}
                pilled={pilled}
                id={tabsId}
                ref={outerRef}
                disabled={disabled}
                className={cx(pilledClass, stretchClass, hasLeftArrowClass, hasRightArrowClass)}
                {...rest}
            >
                {!firstItemVisible && PreviousButton}
                <StyledContentWrapper
                    ref={scrollRef as MutableRefObject<HTMLDivElement | null>}
                    onScroll={handleScroll}
                >
                    <StyledContent ref={trackRef as MutableRefObject<HTMLDivElement | null>}>{children}</StyledContent>
                </StyledContentWrapper>
                {!lastItemVisible && NextButton}
            </Root>
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
