import React, { memo, useRef, useLayoutEffect } from 'react';
import cls from 'classnames';
import { useDidMountLayoutEffect } from 'src/hooks';

import { classes } from '../../Carousel.tokens';

import { DotsProps } from './Dots.types';
import { getActiveIndex, getTargetIndex, getInitialData } from './utils/index';
import { Wrapper, DotWrapper, RightAnimationWrapper, LeftAnimationWrapper, TransitionWrapper } from './Dots.styles';

const SIZE = 16; // размер точки в px
const ANIMATION_DURATION = 0.3; // скорость анимации в секундах

export const Dots: React.FC<DotsProps> = memo(
    ({ index: originalIndex = 0, onChange, centered = false, count = 0, visibleCount: originalVisibleCount = 0 }) => {
        // Трансформируем входные параметры для корректной работы в дальнейшем
        const [index, visibleCount] = getInitialData(originalIndex, count, originalVisibleCount);

        // Рефки на DOM-ноды
        const transitionWrapperRef = useRef<HTMLDivElement>(null);
        const dotWrapperRef = useRef<HTMLDivElement>(null);
        const leftAnimationWrapperRef = useRef<HTMLDivElement>(null);
        const rightAnimationWrapperRef = useRef<HTMLDivElement>(null);

        // Консистентные переменные
        const isAnimating = useRef(false);
        const prevIndex = useRef(-Infinity);
        const prevActiveIndex = useRef(Infinity);

        const isRightDirection = index > prevIndex.current;
        const diffDotsRange = Math.abs(index - prevIndex.current);
        const activeIndex = getActiveIndex(index, isRightDirection, count, visibleCount);
        const hiddenDotsLeft = activeIndex < index;
        const hiddenDotsRight = index + (visibleCount - 1 - activeIndex) < count - 1;

        const handleClick = (i: number) => {
            if (isAnimating.current) return;

            if (onChange) {
                onChange(index + (i - activeIndex));
            }
        };

        const handleTransitionEnd = () => {
            if (
                !dotWrapperRef ||
                !dotWrapperRef.current ||
                !transitionWrapperRef ||
                !transitionWrapperRef.current ||
                !rightAnimationWrapperRef ||
                !rightAnimationWrapperRef.current ||
                !leftAnimationWrapperRef ||
                !leftAnimationWrapperRef.current
            ) {
                return;
            }

            dotWrapperRef.current.classList.remove(classes.animating);
            transitionWrapperRef.current.classList.remove(classes.animating);

            Array.from(dotWrapperRef.current.children).forEach((child) => {
                child.classList.remove(
                    ...[classes.active, classes.animateOut, classes.temporaryNatural, classes.shrinking],
                );
            });
            dotWrapperRef.current.children[activeIndex].classList.add(classes.active);

            if (centered) {
                transitionWrapperRef.current.style.transform = `translateX(${
                    (visibleCount * SIZE) / 2 - SIZE / 2 - activeIndex * SIZE
                }px)`;
            } else {
                transitionWrapperRef.current.style.transform = 'translateX(0)';
            }

            setTimeout(() => {
                if (transitionWrapperRef && transitionWrapperRef.current) {
                    isAnimating.current = false;
                }
            });

            // Очищаем блоки с анимированными точками
            leftAnimationWrapperRef.current.innerText = '';
            rightAnimationWrapperRef.current.innerText = '';

            prevIndex.current = index;
            prevActiveIndex.current = activeIndex;
            isAnimating.current = false;
        };

        useLayoutEffect(() => {
            if (!dotWrapperRef || !dotWrapperRef.current || !transitionWrapperRef || !transitionWrapperRef.current) {
                return;
            }

            // Вычисляем начальный сдвиг по горизонтали, чтобы точка стала по центру
            if (centered) {
                transitionWrapperRef.current.style.transform = `translateX(${
                    (visibleCount * SIZE) / 2 - SIZE / 2 - activeIndex * SIZE
                }px)`;
            }

            prevIndex.current = index;
            prevActiveIndex.current = activeIndex;
        }, []);

        useDidMountLayoutEffect(() => {
            if (
                !dotWrapperRef ||
                !dotWrapperRef.current ||
                !transitionWrapperRef ||
                !transitionWrapperRef.current ||
                !leftAnimationWrapperRef ||
                !leftAnimationWrapperRef.current ||
                !rightAnimationWrapperRef ||
                !rightAnimationWrapperRef.current ||
                isAnimating.current
            ) {
                return;
            }
            isAnimating.current = true;
            dotWrapperRef.current.classList.add(classes.animating);
            transitionWrapperRef.current.classList.add(classes.animating);

            const targetIndex = getTargetIndex(index, prevIndex.current, prevActiveIndex.current, diffDotsRange);
            const dotsToAdd = Math.abs(targetIndex - activeIndex);

            if (centered) {
                transitionWrapperRef.current.style.transform = `translateX(${
                    (visibleCount * SIZE) / 2 - SIZE / 2 - targetIndex * SIZE
                }px)`;
            } else if (dotsToAdd > 0) {
                transitionWrapperRef.current.style.transform = `translateX(${-SIZE * (targetIndex - activeIndex)}px)`;
            }

            // Стираем все активные классы и устанавливаем активный класс на таргет.
            // В конце анимации произойдет переопределение активного класса.
            Array.from(dotWrapperRef.current.children).forEach((child) => {
                child.classList.remove(classes.active);
            });
            dotWrapperRef.current.children[targetIndex]?.classList.add(classes.active);

            if (index > prevIndex.current) {
                // Двигаемся вправо

                // Если мы добавляем 1 и более точек, то нужно начать
                // приводить размер крайней правой точки (что будет в m размере?)
                // к натуральному размеру
                if (dotsToAdd >= 1) {
                    dotWrapperRef.current.children[visibleCount - 1]?.classList.add(classes.temporaryNatural);
                }

                // Т.к. мы двигаемся вправо, то нужно начать уменьшать размер крайней левой точки
                // (опять же, что в m size?)
                if (dotsToAdd >= 1) {
                    dotWrapperRef.current.children[dotsToAdd]?.classList.add(classes.shrinking);
                }

                if (dotsToAdd > 0) {
                    for (let i = 0; i < dotsToAdd; i++) {
                        const node = document.createElement('div');
                        node.textContent = '';
                        node.classList.add(classes.dot);
                        node.style.opacity = '0';

                        const delay = i * (ANIMATION_DURATION / dotsToAdd);
                        node.style.animationDelay = `${delay}s`;

                        rightAnimationWrapperRef.current.appendChild(node);
                        const duration = ANIMATION_DURATION / dotsToAdd;

                        requestAnimationFrame(() => {
                            node.classList.add(classes.animateIn);
                            node.style.animationDuration = `${duration}s`;
                        });

                        const currentDomNode = dotWrapperRef.current.children?.[i] as HTMLElement;

                        currentDomNode?.classList.add(classes.animateOut);
                        currentDomNode.style.animationDelay = `${delay}s`;
                        currentDomNode.style.animationDuration = `${duration}s`;
                    }
                }
            } else {
                // Двигаемся влево

                // Если мы добавляем 1 и более точек, то нужно начать
                // приводить размер крайней левой точки (что будет в m размере?)
                // к натуральному размеру.
                if (dotsToAdd >= 1) {
                    dotWrapperRef.current.children[0]?.classList.add(classes.temporaryNatural);
                }

                // Т.к. мы двигаемся влево, то нужно начать уменьшать размер крайней правой точки
                // (опять же, что в m size?)
                if (dotsToAdd >= 1) {
                    dotWrapperRef.current.children[visibleCount - 1 - dotsToAdd]?.classList.add(classes.shrinking);
                }

                if (dotsToAdd > 0) {
                    for (let i = dotsToAdd - 1; i >= 0; i--) {
                        const node = document.createElement('div');
                        node.textContent = '';
                        node.classList.add(classes.dot);
                        node.style.opacity = '0';

                        const delay = (dotsToAdd - 1 - i) * (ANIMATION_DURATION / dotsToAdd);
                        node.style.animationDelay = `${delay}s`;

                        leftAnimationWrapperRef.current.prepend(node);
                        const duration = ANIMATION_DURATION / dotsToAdd;

                        requestAnimationFrame(() => {
                            node.classList.add(classes.animateIn);
                            node.style.animationDuration = `${duration}s`;
                        });

                        const currentDomNode = dotWrapperRef.current.children?.[
                            dotWrapperRef.current.children.length - 1 - i
                        ] as HTMLElement;

                        currentDomNode?.classList.add(classes.animateOut);
                        currentDomNode.style.animationDelay = `${i * (ANIMATION_DURATION / dotsToAdd)}s`;
                        currentDomNode.style.animationDuration = `${duration}s`;
                    }
                }
            }
        }, [index]);

        return (
            <Wrapper>
                <TransitionWrapper ref={transitionWrapperRef} onTransitionEnd={handleTransitionEnd}>
                    <LeftAnimationWrapper ref={leftAnimationWrapperRef} />

                    <DotWrapper
                        ref={dotWrapperRef}
                        className={cls(
                            hiddenDotsLeft && classes.availableDotsLeft,
                            hiddenDotsRight && classes.availableDotsRight,
                        )}
                    >
                        {Array(visibleCount)
                            .fill(0)
                            .map((_, i) => {
                                return (
                                    <div
                                        key={i}
                                        className={cls(classes.dot, i === activeIndex && classes.active)}
                                        onClick={() => handleClick(i)}
                                    />
                                );
                            })}
                    </DotWrapper>

                    <RightAnimationWrapper ref={rightAnimationWrapperRef} />
                </TransitionWrapper>
            </Wrapper>
        );
    },
);
