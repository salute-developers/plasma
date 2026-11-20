import React, { createRef } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import { page, userEvent } from 'vitest/browser';
import { Carousel } from 'src/examples/components/Carousel/Carousel';

import { classes } from '../Carousel.tokens';

type CarouselProps = React.ComponentProps<typeof Carousel>;

const example = (props: CarouselProps = {}, count = 5) => (
    <Carousel data-testid="carousel" style={{ width: 600 }} fullWidth {...props}>
        {Array.from({ length: count }, (_, slide) => (
            <div key={slide} data-testid={`slide-${slide}`} style={{ width: 200, height: 180 }}>
                Слайд {slide}
            </div>
        ))}
    </Carousel>
);

const getRoot = () => document.querySelector<HTMLElement>('[data-testid="carousel"]')!;
const getViewport = () => getRoot().querySelector<HTMLElement>(':scope > div > div')!;
const getArrow = (side: 'left' | 'right') =>
    getRoot().querySelector<HTMLButtonElement>(
        `.${side === 'left' ? classes.leftControlButton : classes.rightControlButton}`,
    );
const clickArrow = async (side: 'left' | 'right') => {
    const button = getArrow(side);
    expect(button).not.toBeNull();
    await userEvent.click(button!);
};
const getDots = () => Array.from(getRoot().querySelectorAll<HTMLElement>(`.${classes.dot}`));
const activeDot = () => getDots().findIndex((dot) => dot.classList.contains(classes.active));
const slideAlignmentError = (index: number) => {
    const root = getRoot().getBoundingClientRect();
    const slide = getRoot().querySelector(`[data-testid="slide-${index}"]`)?.getBoundingClientRect();
    return slide ? Math.abs(slide.left + slide.width / 2 - root.left - root.width / 2) : Infinity;
};

// Только interval подменяется часами; browser actions, smooth scroll и requestAnimationFrame остаются реальными.
const setupIntervalClock = () => {
    beforeEach(() => {
        vi.useFakeTimers({ toFake: ['setInterval', 'clearInterval'] });
    });
    afterEach(() => {
        vi.useRealTimers();
    });
};

describe('Carousel', () => {
    describe('index and navigation', () => {
        it('starts on the first slide without notifying onChangeIndex', async () => {
            const onChangeIndex = vi.fn();
            await render(example({ onChangeIndex }));
            expect(activeDot()).toBe(0);
            expect(getArrow('left')).toBeNull();
            expect(getArrow('right')).not.toBeNull();
            expect(onChangeIndex).not.toHaveBeenCalled();
        });

        it('uses defaultIndex only on initial mount', async () => {
            const onChangeIndex = vi.fn();
            const screen = await render(example({ defaultIndex: 2, onChangeIndex }));
            await expect.poll(() => slideAlignmentError(2)).toBeLessThan(1);
            await screen.rerender(example({ defaultIndex: 0, onChangeIndex }));
            expect(activeDot()).toBe(2);
            expect(onChangeIndex).not.toHaveBeenCalled();
        });

        it.each([-5, 20])('clamps an out-of-range defaultIndex=%s', async (defaultIndex) => {
            await render(example({ defaultIndex }));
            expect(activeDot()).toBe(defaultIndex < 0 ? 0 : 4);
        });

        it('changes the uncontrolled index once per arrow click', async () => {
            const onChangeIndex = vi.fn();
            await render(example({ onChangeIndex }));
            await clickArrow('right');
            expect(activeDot()).toBe(1);
            expect(onChangeIndex.mock.calls).toEqual([[1]]);
            await clickArrow('left');
            expect(activeDot()).toBe(0);
            expect(onChangeIndex.mock.calls).toEqual([[1], [0]]);
        });

        it('hides the right arrow on the last slide', async () => {
            await render(example({ defaultIndex: 4 }));
            expect(getArrow('right')).toBeNull();
            expect(getArrow('left')).not.toBeNull();
        });

        it('gives controlled index priority over defaultIndex', async () => {
            const onChangeIndex = vi.fn();
            const screen = await render(example({ index: 1, defaultIndex: 3, onChangeIndex }));
            expect(activeDot()).toBe(1);
            await screen.rerender(example({ index: 3, defaultIndex: 0, onChangeIndex }));
            await expect.poll(() => slideAlignmentError(3)).toBeLessThan(1);
            expect(activeDot()).toBe(3);
            expect(onChangeIndex).not.toHaveBeenCalled();
        });

        it('requests a controlled change and waits for the new index prop', async () => {
            const onChangeIndex = vi.fn();
            const screen = await render(example({ index: 0, onChangeIndex }));
            await clickArrow('right');
            expect(onChangeIndex.mock.calls).toEqual([[1]]);
            expect(activeDot()).toBe(0);
            await screen.rerender(example({ index: 1, onChangeIndex }));
            expect(activeDot()).toBe(1);
            expect(onChangeIndex).toHaveBeenCalledTimes(1);
        });

        it.each(['inner', 'outer'] as const)(
            'hides both controls with placement=%s when disabled',
            async (controlArrowsPlacement) => {
                await render(example({ controlArrowsDisabled: true, controlArrowsPlacement, defaultIndex: 2 }));
                expect(getArrow('left')).toBeNull();
                expect(getArrow('right')).toBeNull();
            },
        );

        it('does not show navigation controls for a single slide', async () => {
            await render(example({}, 1));
            expect(getArrow('left')).toBeNull();
            expect(getArrow('right')).toBeNull();
        });

        it('forwards ref and native attributes to the root', async () => {
            const ref = createRef<HTMLDivElement>();
            await render(
                <Carousel ref={ref} role="region" aria-label="Предложения" id="offers">
                    <div>Слайд</div>
                </Carousel>,
            );
            expect(ref.current).toBe(document.getElementById('offers'));
            await expect.element(page.getByRole('region', { name: 'Предложения' })).toBeVisible();
            expect(ref.current?.hasAttribute('controlArrowsPlacement')).toBe(false);
        });
    });

    describe('loop', () => {
        it('wraps in both directions and keeps both arrows available', async () => {
            const onChangeIndex = vi.fn();
            await render(example({ loop: true, onChangeIndex }));
            expect(getArrow('left')).not.toBeNull();
            await clickArrow('left');
            expect(activeDot()).toBe(4);
            expect(getArrow('right')).not.toBeNull();
            await clickArrow('right');
            expect(activeDot()).toBe(0);
            expect(onChangeIndex.mock.calls).toEqual([[4], [0]]);
        });

        it('normalizes a negative defaultIndex when looping', async () => {
            await render(example({ loop: true, defaultIndex: -1 }));
            expect(activeDot()).toBe(4);
        });
    });

    describe('pagination', () => {
        it('changes the index when a dot is clicked', async () => {
            const onChangeIndex = vi.fn();
            await render(example({ onChangeIndex }));
            await userEvent.click(getDots()[3]);
            expect(activeDot()).toBe(3);
            expect(onChangeIndex.mock.calls).toEqual([[3]]);
        });

        it('does not render dots when pagination is disabled', async () => {
            await render(example({ paginationOptions: { disabled: true } }));
            expect(getDots()).toHaveLength(0);
            await clickArrow('right');
            expect(getArrow('left')).not.toBeNull();
        });

        it('limits the visible dots and maps them to the current slide range', async () => {
            const onChangeIndex = vi.fn();
            await render(example({ defaultIndex: 10, paginationOptions: { visibleDots: 5 }, onChangeIndex }, 20));
            expect(getDots()).toHaveLength(5);
            await userEvent.click(getDots()[3]);
            expect(onChangeIndex.mock.calls).toEqual([[11]]);
        });

        it('does not create more dots than slides', async () => {
            await render(example({ paginationOptions: { visibleDots: 20 } }, 3));
            expect(getDots()).toHaveLength(3);
        });
    });

    describe('autoplay', () => {
        setupIntervalClock();

        it('uses the default 5000ms interval', async () => {
            const onChangeIndex = vi.fn();
            await render(example({ autoPlay: true, onChangeIndex }));
            await vi.advanceTimersByTimeAsync(4999);
            expect(onChangeIndex).not.toHaveBeenCalled();
            await vi.advanceTimersByTimeAsync(1);
            await expect.poll(() => activeDot()).toBe(1);
            expect(onChangeIndex.mock.calls).toEqual([[1]]);
        });

        it('stops on the last slide without loop', async () => {
            const onChangeIndex = vi.fn();
            await render(example({ autoPlay: true, autoPlayInterval: 1000, defaultIndex: 3, onChangeIndex }));
            await vi.advanceTimersByTimeAsync(1000);
            await expect.poll(() => activeDot()).toBe(4);
            await vi.advanceTimersByTimeAsync(5000);
            expect(onChangeIndex.mock.calls).toEqual([[4]]);
        });

        it('continues from the first slide with loop', async () => {
            const onChangeIndex = vi.fn();
            await render(
                example({ autoPlay: true, autoPlayInterval: 1000, defaultIndex: 4, loop: true, onChangeIndex }),
            );
            await vi.advanceTimersByTimeAsync(1000);
            await expect.poll(() => activeDot()).toBe(0);
            await vi.advanceTimersByTimeAsync(1000);
            await expect.poll(() => activeDot()).toBe(1);
            expect(onChangeIndex.mock.calls).toEqual([[0], [1]]);
        });

        it('updates the interval and stops when autoplay is switched off', async () => {
            const onChangeIndex = vi.fn();
            const screen = await render(example({ autoPlay: true, autoPlayInterval: 1000, onChangeIndex }));
            await screen.rerender(example({ autoPlay: true, autoPlayInterval: 2000, onChangeIndex }));
            await vi.advanceTimersByTimeAsync(1000);
            expect(onChangeIndex).not.toHaveBeenCalled();
            await vi.advanceTimersByTimeAsync(1000);
            await expect.poll(() => activeDot()).toBe(1);
            await screen.rerender(example({ autoPlay: false, onChangeIndex }));
            await vi.advanceTimersByTimeAsync(10000);
            expect(onChangeIndex.mock.calls).toEqual([[1]]);
        });

        it.each([0, -100])('does not schedule a non-positive interval=%s', async (autoPlayInterval) => {
            const onChangeIndex = vi.fn();
            await render(example({ autoPlay: true, autoPlayInterval, onChangeIndex }));
            expect(vi.getTimerCount()).toBe(0);
            await vi.advanceTimersByTimeAsync(10000);
            expect(onChangeIndex).not.toHaveBeenCalled();
        });

        it.each([0, 1])('does not schedule autoplay for %s slides', async (count) => {
            const onChangeIndex = vi.fn();
            await render(example({ autoPlay: true, onChangeIndex }, count));
            expect(vi.getTimerCount()).toBe(0);
            expect(onChangeIndex).not.toHaveBeenCalled();
        });

        it('clears the timer on unmount', async () => {
            const onChangeIndex = vi.fn();
            const screen = await render(example({ autoPlay: true, onChangeIndex }));
            expect(vi.getTimerCount()).toBe(1);
            await screen.unmount();
            expect(vi.getTimerCount()).toBe(0);
            await vi.advanceTimersByTimeAsync(10000);
            expect(onChangeIndex).not.toHaveBeenCalled();
        });
    });

    describe('swipe and wheel', () => {
        it('selects the closest slide after a horizontal mouse drag', async () => {
            const onChangeIndex = vi.fn();
            await render(example({ swipeEnabled: true, onChangeIndex }));
            const viewport = getViewport();
            await userEvent.dragAndDrop(viewport, viewport, {
                sourcePosition: { x: 450, y: 80 },
                targetPosition: { x: 50, y: 80 },
            });
            await expect.poll(() => activeDot()).toBe(1);
            expect(onChangeIndex.mock.calls).toEqual([[1]]);
        });

        it.each([false, true])(
            'does not change slides for disabled swipe or a sub-threshold gesture (swipeEnabled=%s)',
            async (swipeEnabled) => {
                const onChangeIndex = vi.fn();
                await render(example({ swipeEnabled, onChangeIndex }));
                const viewport = getViewport();
                await userEvent.dragAndDrop(viewport, viewport, {
                    sourcePosition: { x: 300, y: 80 },
                    targetPosition: { x: swipeEnabled ? 296 : 50, y: 80 },
                });
                expect(onChangeIndex).not.toHaveBeenCalled();
                expect(activeDot()).toBe(0);
            },
        );

        it('leaves vertical touch gestures to the page', async () => {
            const onChangeIndex = vi.fn();
            await render(example({ swipeEnabled: true, onChangeIndex }));
            const viewport = getViewport();
            viewport.dispatchEvent(
                new PointerEvent('pointerdown', {
                    pointerId: 10,
                    pointerType: 'touch',
                    isPrimary: true,
                    clientX: 300,
                    clientY: 20,
                    bubbles: true,
                }),
            );
            const move = new PointerEvent('pointermove', {
                pointerId: 10,
                pointerType: 'touch',
                isPrimary: true,
                clientX: 302,
                clientY: 120,
                bubbles: true,
                cancelable: true,
            });
            viewport.dispatchEvent(move);
            expect(move.defaultPrevented).toBe(false);
            expect(onChangeIndex).not.toHaveBeenCalled();
        });

        it('finishes a cancelled drag once and keeps navigation working', async () => {
            const onChangeIndex = vi.fn();
            await render(example({ swipeEnabled: true, onChangeIndex }));
            const viewport = getViewport();
            const cancelDrag = (event: PointerEvent) => {
                if (!event.buttons) {
                    return;
                }

                viewport.removeEventListener('pointermove', cancelDrag);
                viewport.dispatchEvent(
                    new PointerEvent('pointercancel', {
                        pointerId: event.pointerId,
                        pointerType: event.pointerType,
                        isPrimary: true,
                    }),
                );
            };
            viewport.addEventListener('pointermove', cancelDrag);
            await userEvent.dragAndDrop(viewport, viewport, {
                sourcePosition: { x: 450, y: 80 },
                targetPosition: { x: 50, y: 80 },
            });
            await expect.poll(activeDot).toBe(1);
            expect(onChangeIndex.mock.calls).toEqual([[1]]);
            await clickArrow('right');
            expect(onChangeIndex.mock.calls).toEqual([[1], [2]]);
        });

        it('removes and restores swipe listeners when swipeEnabled changes', async () => {
            const onChangeIndex = vi.fn();
            const screen = await render(example({ swipeEnabled: true, onChangeIndex }));
            await screen.rerender(example({ swipeEnabled: false, onChangeIndex }));
            const viewport = getViewport();
            const gesture = {
                sourcePosition: { x: 450, y: 80 },
                targetPosition: { x: 50, y: 80 },
            };
            await userEvent.dragAndDrop(viewport, viewport, gesture);
            expect(onChangeIndex).not.toHaveBeenCalled();
            await screen.rerender(example({ swipeEnabled: true, onChangeIndex }));
            await userEvent.dragAndDrop(viewport, viewport, gesture);
            await expect.poll(activeDot).toBe(1);
            expect(onChangeIndex.mock.calls).toEqual([[1]]);
        });

        it.each([
            { pointerType: 'mouse', button: 2, isPrimary: true },
            { pointerType: 'touch', button: 0, isPrimary: false },
        ])('ignores unsupported pointer starts: %o', async (options) => {
            const onChangeIndex = vi.fn();
            await render(example({ swipeEnabled: true, onChangeIndex }));
            const viewport = getViewport();
            viewport.dispatchEvent(
                new PointerEvent('pointerdown', { ...options, pointerId: 10, clientX: 400, clientY: 80 }),
            );
            viewport.dispatchEvent(
                new PointerEvent('pointermove', {
                    ...options,
                    pointerId: 10,
                    clientX: 50,
                    clientY: 80,
                    cancelable: true,
                }),
            );
            viewport.dispatchEvent(
                new PointerEvent('pointerup', { ...options, pointerId: 10, clientX: 50, clientY: 80 }),
            );
            expect(onChangeIndex).not.toHaveBeenCalled();
        });

        it.each([
            [80, 0, true],
            [0, 80, false],
            [40, 80, false],
        ] as const)('prevents horizontal wheel only: deltaX=%s, deltaY=%s', async (deltaX, deltaY, prevented) => {
            await render(example());
            const wheel = new WheelEvent('wheel', { deltaX, deltaY, bubbles: true, cancelable: true });
            getViewport().dispatchEvent(wheel);
            expect(wheel.defaultPrevented).toBe(prevented);
        });
    });

    describe('virtualization', () => {
        it.each([false, true])('mounts the active range instead of all slides (fullWidth=%s)', async (fullWidth) => {
            await render(example({ virtual: true, defaultIndex: 10, fullWidth }, 20));
            await expect.poll(() => getRoot().querySelector('[data-carousel-index="10"]')).not.toBeNull();
            await expect.poll(() => getRoot().querySelector('[data-carousel-index="3"]')).toBeNull();
            await expect.poll(() => getRoot().querySelector('[data-carousel-index="17"]')).toBeNull();
            expect(getRoot().querySelectorAll('[data-carousel-index]').length).toBeLessThan(20);
        });

        it('scrolls to an externally selected slide outside the mounted range', async () => {
            const onChangeIndex = vi.fn();
            const screen = await render(example({ virtual: true, index: 0, onChangeIndex }, 20));
            await screen.rerender(example({ virtual: true, index: 15, onChangeIndex }, 20));
            await expect.poll(() => slideAlignmentError(15), { timeout: 3000 }).toBeLessThan(1);
            expect(onChangeIndex).not.toHaveBeenCalled();
        });

        it.each([0, 40])('navigates between virtual slides with gap=%spx', async (gap) => {
            const onChangeIndex = vi.fn();
            await render(example({ virtual: true, defaultIndex: 10, gap: `${gap}px`, onChangeIndex }, 20));
            await clickArrow('right');
            await expect.poll(() => slideAlignmentError(11)).toBeLessThan(1);
            expect(onChangeIndex.mock.calls).toEqual([[11]]);
        });
    });

    describe('scroll alignment', () => {
        it.each(['start', 'center', 'end'] as const)('aligns the selected slide to %s', async (scrollAlign) => {
            await render(example({ fullWidth: false, defaultIndex: 2, scrollAlign }, 8));
            const error = () => {
                const viewport = getViewport().getBoundingClientRect();
                const slide = getRoot().querySelector('[data-testid="slide-2"]')!.getBoundingClientRect();
                if (scrollAlign === 'start') return Math.abs(slide.left - viewport.left);
                if (scrollAlign === 'end') return Math.abs(slide.right - viewport.right);
                return Math.abs(slide.left + slide.width / 2 - viewport.left - viewport.width / 2);
            };
            await expect.poll(error).toBeLessThan(1);
        });
    });

    describe('placement changes', () => {
        it.each([false, true])('keeps the active slide aligned (virtual=%s)', async (virtual) => {
            const onChangeIndex = vi.fn();
            const props = { virtual, defaultIndex: 1, onChangeIndex };
            const screen = await render(example(props));
            await expect.poll(() => slideAlignmentError(1)).toBeLessThan(1);
            await screen.rerender(example({ ...props, controlArrowsPlacement: 'outer' }));
            await expect
                .poll(() => slideAlignmentError(1), { timeout: 3000, message: 'Outer placement' })
                .toBeLessThan(1);
            await screen.rerender(example({ ...props, controlArrowsPlacement: 'outer', controlArrowsDisabled: true }));
            await expect
                .poll(() => slideAlignmentError(1), { timeout: 3000, message: 'Hidden controls' })
                .toBeLessThan(1);
            await screen.rerender(example({ ...props, controlArrowsPlacement: 'outer' }));
            await expect
                .poll(() => slideAlignmentError(1), { timeout: 3000, message: 'Restored controls' })
                .toBeLessThan(1);
            await screen.rerender(example({ ...props, controlArrowsPlacement: 'inner' }));
            await expect
                .poll(() => slideAlignmentError(1), { timeout: 3000, message: 'Inner placement' })
                .toBeLessThan(1);
            expect(onChangeIndex).not.toHaveBeenCalled();
        });
    });
});
