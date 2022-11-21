import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { primary, tertiary } from '@salutejs/plasma-tokens';

import { useRemoteHandlers } from '../../hooks';
import { useTouchHandler, UseTouchHandlerCallback } from '../../hooks/useTouchHander';
import { UnifiedComponentProps } from '../../registry/types';
import { HeroSlideProps } from '../HeroSlide/HeroSlide';

import { HeroSliderProps } from './types';

interface StyledTimelineProps {
    count: number;
    filled: boolean;
}

interface StyledPimelineProgressProps {
    time: number;
}

const StyledTimline = styled.span<StyledTimelineProps>`
    width: ${(props) => 100 / props.count}%;
    height: 4px;
    border-radius: 2px;

    ${(props) => {
        if (props.filled) {
            return {
                backgroundColor: primary,
            };
        }

        return {
            backgroundColor: tertiary,
        };
    }}

    & + & {
        margin-left: 1rem;
    }
`;

const fillAmination = keyframes`
    from {
        width: 0%;
    }

    to {
        width: 100%;
    }
`;

const StyledTimelineProgress = styled.i<StyledPimelineProgressProps>`
    display: flex;
    height: 4px;
    border-radius: 2px;
    background-color: ${primary};

    animation-name: ${fillAmination};
    animation-timing-function: linear;
    animation-duration: ${(props) => props.time}ms;
    animation-iteration-count: 1;
`;

const StyledDotsWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    margin-top: auto;
`;

interface HeroDotsProps {
    count: number;
    current: number;
    time: number;
}

const HeroDots: React.FC<HeroDotsProps> = ({ count, current, time }) => {
    const itemsToRender = React.useMemo(() => Array.from({ length: count }), [count]);

    return (
        <StyledDotsWrapper>
            {itemsToRender.map((_, i) => (
                <StyledTimline count={count} filled={i < current} key={i}>
                    {i === current && <StyledTimelineProgress time={time} />}
                </StyledTimline>
            ))}
        </StyledDotsWrapper>
    );
};

type PlatformComponents = {
    Wrapper: React.RefAttributes<HTMLDivElement>;
    Slide: HeroSlideProps & React.RefAttributes<HTMLDivElement>;
};

const fetchMediaSrc = (src: string) => {
    return new Promise<string>((resolve, reject) => {
        const node = new Image();

        node.onload = () => {
            if (node.complete) {
                resolve(src);
            }
        };

        node.onerror = reject;

        node.src = src;
    });
};

export const HeroSlider: React.FC<UnifiedComponentProps<HeroSliderProps, PlatformComponents>> = ({
    time = 10000,
    withTimeline = true,
    initialIndex = 0,
    items,
    disableAutofocus,
    onItemClick,
    onActiveItemChange,
    buttonText,
    getImageProps,
    platformComponents: { Wrapper, Slide },
}) => {
    const [isActive, setIsActive] = React.useState(false);
    const timerRef = React.useRef<number>(Infinity);
    const containerRef = React.useRef<HTMLDivElement>(null);

    const [activeIndex, setActiveIndex] = useRemoteHandlers({
        axis: 'x',
        initialIndex,
        min: 0,
        max: items.length - 1,
        longCount: 1,
        disable: !isActive,
    });

    const touchHandler = React.useCallback<UseTouchHandlerCallback>(
        (dir) => {
            setActiveIndex((prev) => {
                const nextIndex = prev + dir;

                if (nextIndex < 0 || nextIndex > items.length - 1) {
                    return prev;
                }

                return nextIndex;
            });
        },
        [setActiveIndex, items.length],
    );

    useTouchHandler(containerRef, touchHandler);

    useEffect(() => {
        Promise.all(items.map(({ src }) => fetchMediaSrc(src)));
    }, [items]);

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            timerRef.current = window.setTimeout(() => {
                let nextIndex = activeIndex + 1;
                if (nextIndex > items.length - 1) {
                    nextIndex = 0;
                }
                setActiveIndex(nextIndex);
            }, time);

            return () => {
                clearTimeout(timerRef.current);
            };
        }

        return () => {};
    }, [activeIndex, items.length, setActiveIndex, time]);

    const item = React.useMemo(() => items[activeIndex], [items, activeIndex]);

    React.useEffect(() => {
        onActiveItemChange?.(item, activeIndex);
    }, [item, activeIndex, onActiveItemChange]);

    const handleClick = React.useCallback(() => {
        onItemClick?.(item, activeIndex);
    }, [activeIndex, item, onItemClick]);

    const handleFocus = React.useCallback(() => {
        setIsActive(true);
    }, []);

    const handleBlur = React.useCallback(() => {
        setIsActive(false);
    }, []);

    const imageProps = React.useMemo(() => {
        if (typeof getImageProps === 'function') {
            return getImageProps(activeIndex);
        }

        return {};
    }, [getImageProps, activeIndex]);

    const textForButton = React.useMemo(() => {
        if (typeof buttonText === 'function') {
            return buttonText(item, activeIndex);
        }

        return buttonText;
    }, [buttonText, item, activeIndex]);

    return (
        <Wrapper ref={containerRef}>
            <Slide
                {...item}
                {...imageProps}
                autofocus={!disableAutofocus}
                onClick={handleClick}
                buttonText={textForButton}
                onFocus={handleFocus}
                onBlur={handleBlur}
                data-cy={`hero-slide-${activeIndex}`}
            >
                {withTimeline && <HeroDots count={items.length} current={activeIndex} time={time} />}
            </Slide>
        </Wrapper>
    );
};
