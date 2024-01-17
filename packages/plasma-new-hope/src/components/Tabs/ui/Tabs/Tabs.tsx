import React, { forwardRef, useCallback, useMemo, useState, Children, useEffect } from 'react';
import type { SetStateAction, RefObject, MutableRefObject } from 'react';
import { safeUseId, useCarousel } from '@salutejs/plasma-core';

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

        const [index, setIndex] = useState(0);
        const [firstItemVisible, setFirstItemVisible] = useState(false);
        const [lastItemVisible, setLastItemVisible] = useState(false);

        const uniqId = safeUseId();
        const tabsId = id || uniqId;

        const pilledAttr = view !== 'clear' && pilled;
        const pilledClass = pilledAttr ? classes.tabsPilled : undefined;

        const stretchClass = firstItemVisible && lastItemVisible && stretch ? classes.tabsStretch : undefined;

        const items = Children?.map(children, (child) => child) || [];

        const onPrev = useCallback(() => {
            !disabled && setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
        }, [disabled]);

        const onNext = useCallback(() => {
            !disabled && setIndex((prevIndex) => (prevIndex < items.length - 1 ? prevIndex + 1 : prevIndex));
        }, [disabled]);

        const onIntersecting = (setVisible: (value: SetStateAction<boolean>) => void) => (
            entries: IntersectionObserverEntry[],
        ) => {
            /*
             * Пробегаемся по элементам на которых есть слушатель события появления.
             * Если элемент находится в зоне видимости или выходит из нее, меняем значение флага видимости
             */
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            });
        };

        const { scrollRef, trackRef } = useCarousel({
            index,
            axis: 'x',
            scrollAlign: 'start',
            detectActive: true,
            detectThreshold: 0,
            debounceMs: 250,
            onIndexChange: setIndex,
        });

        const PreviousButton = useMemo(
            () => (
                <StyledArrow
                    type="button"
                    aria-label="Предыдущий таб"
                    onClick={onPrev}
                    tabIndex={disabled ? -1 : 0}
                    disabled={disabled}
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
                >
                    <IconDisclosureRight color={`var(${tokens.arrowColor})`} />
                </StyledArrow>
            ),
            [onNext],
        );

        useEffect(() => {
            // Intersection observer для первого таба
            const observeFirstItem = new IntersectionObserver(onIntersecting(setFirstItemVisible), {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            });

            // Intersection observer для последнего таба
            const observeLastItem = new IntersectionObserver(onIntersecting(setLastItemVisible), {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            });

            // получаем список tabItem внутри Tabs
            const childrenArray = Array.from(trackRef.current?.children || []) as Array<Element>;
            if (childrenArray.length) {
                // подписываемся на событие появление внутри Tabs
                observeFirstItem.observe(childrenArray[0]);
                observeLastItem.observe(childrenArray[childrenArray.length - 1]);
            }

            return () => {
                // отписываемся от события появления внутри Tabs
                observeFirstItem.disconnect();
                observeLastItem.disconnect();
            };
        }, [children]);

        return (
            <Root
                view={view}
                role="tablist"
                size={size}
                pilled={pilled}
                id={tabsId}
                ref={outerRef}
                disabled={disabled}
                className={cx(pilledClass, stretchClass)}
                {...rest}
            >
                {!firstItemVisible && PreviousButton}
                <StyledContentWrapper ref={scrollRef as RefObject<HTMLDivElement>}>
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
            attrs: true,
        },
    },
    defaults: {
        view: 'clear',
        size: 'xs',
    },
};
