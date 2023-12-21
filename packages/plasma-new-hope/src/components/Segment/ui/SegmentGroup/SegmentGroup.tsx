import React, { forwardRef, useCallback, useMemo, useState, Children, useEffect } from 'react';
import type { SetStateAction, RefObject, MutableRefObject } from 'react';
import { safeUseId, useCarousel } from '@salutejs/plasma-core';

import type { RootProps } from '../../../../engines/types';
import { IconDisclosureLeft, IconDisclosureRight } from '../../../_Icon';
import { useSegment } from '../../SegmentProvider';
import { classes, tokens } from '../../tokens';
import { cx } from '../../../../utils';

import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as pilledCSS } from './variations/_pilled/base';
import { base as filledBackgroundCSS } from './variations/_filledBackgound/base';
import type { SegmentGroupProps } from './SegmentGroup.types';
import { StyledArrow, StyledContent, StyledContentWrapper, base } from './SegmentGroup.styles';

export const segmentGroupRoot = (Root: RootProps<HTMLDivElement, SegmentGroupProps>) =>
    forwardRef<HTMLDivElement, SegmentGroupProps>((props, outerRef) => {
        const {
            id,
            selectionMode,
            pilled,
            filledBackground = false,
            disabled = false,
            size,
            view,
            children,
            ...rest
        } = props;

        const { setSelectionMode, setViewGroup, setDisabledGroup } = useSegment();

        const uniqId = safeUseId();
        const segmentGroupId = id || uniqId;

        const pilledAttr = view !== 'clear' && pilled;
        const filledBackgroundAttr = view !== 'clear' && filledBackground;
        const pilledClass = pilledAttr ? classes.segmentPilled : undefined;
        const filledClass = filledBackgroundAttr ? classes.segmentGroupFilledBackground : undefined;

        const [index, setIndex] = useState(0);
        const [firstItemVisible, setFirstItemVisible] = useState(false);
        const [lastItemVisible, setLastItemVisible] = useState(false);

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
            debounceMs: 250,
            onIndexChange: setIndex,
        });

        const PreviousButton = useMemo(
            () => (
                <StyledArrow
                    type="button"
                    aria-label="Предыдущий сегмент"
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
                    aria-label="Следующий сегмент"
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
            selectionMode && setSelectionMode(selectionMode);
            setDisabledGroup(disabled);
            setViewGroup(view || '');
        }, [selectionMode, disabled, view]);

        useEffect(() => {
            // Intersection observer для первого сегмента
            const observeFirstItem = new IntersectionObserver(onIntersecting(setFirstItemVisible), {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            });

            // Intersection observer для последнего сегмента
            const observeLastItem = new IntersectionObserver(onIntersecting(setLastItemVisible), {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            });

            // получаем список сегментов внутри SegmentGroup
            const childrenArray = Array.from(trackRef.current?.children || []) as Array<Element>;
            if (childrenArray.length) {
                // подписываемся на событие появление внутри SegmentGroup
                observeFirstItem.observe(childrenArray[0]);
                observeLastItem.observe(childrenArray[childrenArray.length - 1]);
            }

            return () => {
                // отписываемся от события появления внутри SegmentGroup
                observeFirstItem.disconnect();
                observeLastItem.disconnect();
            };
        }, [children]);

        return (
            <Root
                view={view}
                size={size}
                id={segmentGroupId}
                ref={outerRef}
                filledBackground={filledBackgroundAttr}
                disabled={disabled}
                pilled={pilledAttr}
                className={cx(pilledClass, filledClass)}
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
