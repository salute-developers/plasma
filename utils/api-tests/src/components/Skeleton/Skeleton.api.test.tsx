import * as React from 'react';
import type { ComponentProps, CSSProperties, AriaRole } from 'react';
import { describe, it } from 'node:test';
import { expectTypeOf } from 'expect-type';
import { LineSkeleton, RectSkeleton, TextSkeleton, withSkeleton } from '@salutejs/plasma-b2c';
import type { WithSkeletonProps } from '@salutejs/plasma-b2c';

type LineSkeletonProps = ComponentProps<typeof LineSkeleton>;
type RectSkeletonProps = ComponentProps<typeof RectSkeleton>;
type TextSkeletonProps = ComponentProps<typeof TextSkeleton>;

describe('LineSkeleton', () => {
    it('Common', () => {
        expectTypeOf<LineSkeletonProps>()
            .toHaveProperty('animationType')
            .toEqualTypeOf<'shimmer' | 'pulse' | undefined>();
        expectTypeOf<LineSkeletonProps>()
            .toHaveProperty('roundness')
            .toEqualTypeOf<0 | 4 | 8 | 12 | 14 | 16 | 18 | 20 | 24 | 28 | 32 | 250 | undefined>();
        expectTypeOf<LineSkeletonProps>().toHaveProperty('lighter').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<LineSkeletonProps>().toHaveProperty('customGradientColor').toEqualTypeOf<string | undefined>();
        expectTypeOf<LineSkeletonProps>().toHaveProperty('customFadeInColor').toEqualTypeOf<string | undefined>();
        expectTypeOf<LineSkeletonProps>().toHaveProperty('customFadeOutColor').toEqualTypeOf<string | undefined>();
    });

    it('HTMLDivElement', () => {
        expectTypeOf<LineSkeletonProps>().toHaveProperty('id').toEqualTypeOf<string | undefined>();
        expectTypeOf<LineSkeletonProps>().toHaveProperty('className').toEqualTypeOf<string | undefined>();
        expectTypeOf<LineSkeletonProps>().toHaveProperty('style').toEqualTypeOf<CSSProperties | undefined>();
        expectTypeOf<LineSkeletonProps>().toHaveProperty('aria-label').toEqualTypeOf<string | undefined>();
        expectTypeOf<LineSkeletonProps>().toHaveProperty('role').toEqualTypeOf<AriaRole | undefined>();
        expectTypeOf<LineSkeletonProps>()
            .toHaveProperty('onClick')
            .toEqualTypeOf<React.MouseEventHandler<HTMLDivElement> | undefined>();
    });
});

describe('RectSkeleton', () => {
    it('Common', () => {
        expectTypeOf<RectSkeletonProps>().toHaveProperty('width').toEqualTypeOf<string | number>();
        expectTypeOf<RectSkeletonProps>().toHaveProperty('height').toEqualTypeOf<string | number>();
        expectTypeOf<RectSkeletonProps>()
            .toHaveProperty('animationType')
            .toEqualTypeOf<'shimmer' | 'pulse' | undefined>();
        expectTypeOf<RectSkeletonProps>()
            .toHaveProperty('roundness')
            .toEqualTypeOf<0 | 4 | 8 | 12 | 14 | 16 | 18 | 20 | 24 | 28 | 32 | 250 | undefined>();
        expectTypeOf<RectSkeletonProps>().toHaveProperty('lighter').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<RectSkeletonProps>().toHaveProperty('customGradientColor').toEqualTypeOf<string | undefined>();
        expectTypeOf<RectSkeletonProps>().toHaveProperty('customFadeInColor').toEqualTypeOf<string | undefined>();
        expectTypeOf<RectSkeletonProps>().toHaveProperty('customFadeOutColor').toEqualTypeOf<string | undefined>();
    });

    it('HTMLDivElement', () => {
        expectTypeOf<RectSkeletonProps>().toHaveProperty('id').toEqualTypeOf<string | undefined>();
        expectTypeOf<RectSkeletonProps>().toHaveProperty('className').toEqualTypeOf<string | undefined>();
        expectTypeOf<RectSkeletonProps>().toHaveProperty('style').toEqualTypeOf<CSSProperties | undefined>();
        expectTypeOf<RectSkeletonProps>().toHaveProperty('aria-label').toEqualTypeOf<string | undefined>();
        expectTypeOf<RectSkeletonProps>().toHaveProperty('role').toEqualTypeOf<AriaRole | undefined>();
        expectTypeOf<RectSkeletonProps>()
            .toHaveProperty('onClick')
            .toEqualTypeOf<React.MouseEventHandler<HTMLDivElement> | undefined>();
    });
});

describe('TextSkeleton', () => {
    it('Common', () => {
        expectTypeOf<TextSkeletonProps>().toHaveProperty('lines').toEqualTypeOf<number>();
        expectTypeOf<TextSkeletonProps>().toHaveProperty('width').toEqualTypeOf<string | number | undefined>();
        expectTypeOf<TextSkeletonProps>()
            .toHaveProperty('animationType')
            .toEqualTypeOf<'shimmer' | 'pulse' | undefined>();
        expectTypeOf<TextSkeletonProps>()
            .toHaveProperty('roundness')
            .toEqualTypeOf<0 | 4 | 8 | 12 | 14 | 16 | 18 | 20 | 24 | 28 | 32 | 250 | undefined>();
        expectTypeOf<TextSkeletonProps>().toHaveProperty('lighter').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<TextSkeletonProps>().toHaveProperty('customGradientColor').toEqualTypeOf<string | undefined>();
        expectTypeOf<TextSkeletonProps>().toHaveProperty('customFadeInColor').toEqualTypeOf<string | undefined>();
        expectTypeOf<TextSkeletonProps>().toHaveProperty('customFadeOutColor').toEqualTypeOf<string | undefined>();
    });

    it('HTMLDivElement', () => {
        expectTypeOf<TextSkeletonProps>().toHaveProperty('id').toEqualTypeOf<string | undefined>();
        expectTypeOf<TextSkeletonProps>().toHaveProperty('className').toEqualTypeOf<string | undefined>();
        expectTypeOf<TextSkeletonProps>().toHaveProperty('style').toEqualTypeOf<CSSProperties | undefined>();
        expectTypeOf<TextSkeletonProps>().toHaveProperty('aria-label').toEqualTypeOf<string | undefined>();
        expectTypeOf<TextSkeletonProps>().toHaveProperty('role').toEqualTypeOf<AriaRole | undefined>();
        expectTypeOf<TextSkeletonProps>()
            .toHaveProperty('onClick')
            .toEqualTypeOf<React.MouseEventHandler<HTMLDivElement> | undefined>();
    });
});

describe('withSkeleton', () => {
    it('Common', () => {
        expectTypeOf<WithSkeletonProps>().toHaveProperty('skeleton').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<WithSkeletonProps>()
            .toHaveProperty('animationConfig')
            .toEqualTypeOf<
                | { type: 'shimmer'; lighter?: boolean; customGradientColor?: string }
                | { type: 'pulse'; customFadeInColor?: string; customFadeOutColor?: string }
                | undefined
            >();
    });

    it('HTMLElement', () => {
        expectTypeOf<WithSkeletonProps>().toHaveProperty('id').toEqualTypeOf<string | undefined>();
        expectTypeOf<WithSkeletonProps>().toHaveProperty('className').toEqualTypeOf<string | undefined>();
        expectTypeOf<WithSkeletonProps>().toHaveProperty('style').toEqualTypeOf<CSSProperties | undefined>();
        expectTypeOf<WithSkeletonProps>().toHaveProperty('aria-label').toEqualTypeOf<string | undefined>();
        expectTypeOf<WithSkeletonProps>().toHaveProperty('role').toEqualTypeOf<AriaRole | undefined>();
    });
});

describe('Unions', () => {
    it('AnimationConfig', () => {
        // shimmer — valid combinations
        expectTypeOf<WithSkeletonProps>({ animationConfig: { type: 'shimmer' } });
        expectTypeOf<WithSkeletonProps>({ animationConfig: { type: 'shimmer', lighter: true } });
        expectTypeOf<WithSkeletonProps>({ animationConfig: { type: 'shimmer', customGradientColor: '#fff' } });

        // pulse — valid combinations
        expectTypeOf<WithSkeletonProps>({ animationConfig: { type: 'pulse' } });
        expectTypeOf<WithSkeletonProps>({ animationConfig: { type: 'pulse', customFadeInColor: '#f00' } });
        expectTypeOf<WithSkeletonProps>({
            animationConfig: { type: 'pulse', customFadeInColor: '#f00', customFadeOutColor: '#0f0' },
        });

        // shimmer with pulse-only field
        // @ts-expect-error
        expectTypeOf<WithSkeletonProps>({ animationConfig: { type: 'shimmer', customFadeInColor: '#f00' } });

        // pulse with shimmer-only field
        // @ts-expect-error
        expectTypeOf<WithSkeletonProps>({ animationConfig: { type: 'pulse', lighter: true } });
    });
});

describe('Examples', () => {
    it('LineSkeleton', () => {
        () => {
            return (
                <>
                    <LineSkeleton size="bodyM" />
                    <LineSkeleton size="h3" animationType="shimmer" roundness={16} />
                    <LineSkeleton
                        size="h3"
                        animationType="pulse"
                        customFadeInColor="#e0e0e0"
                        customFadeOutColor="#f5f5f5"
                    />
                    <LineSkeleton
                        size="bodyS"
                        lighter
                        customGradientColor="linear-gradient(90deg, #eee 0%, #fff 50%, #eee 100%)"
                    />
                </>
            );
        };
    });

    it('RectSkeleton', () => {
        () => {
            return (
                <>
                    <RectSkeleton width="12rem" height="8rem" />
                    <RectSkeleton width={128} height={128} roundness={8} />
                    <RectSkeleton width="4rem" height="4rem" animationType="pulse" />
                </>
            );
        };
    });

    it('TextSkeleton', () => {
        () => {
            return (
                <>
                    <TextSkeleton lines={3} size="bodyM" />
                    <TextSkeleton lines={5} size="textM" width={50} />
                    <TextSkeleton lines={3} animationType="shimmer" customGradientColor="linear-gradient()" />
                </>
            );
        };
    });

    it('withSkeleton shimmer', () => {
        () => {
            const DivSkeleton = withSkeleton(
                React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => (
                    <div ref={ref} {...props} />
                )),
            );
            return (
                <DivSkeleton
                    skeleton
                    animationConfig={{
                        type: 'shimmer',
                        customGradientColor: 'linear-gradient(90deg, #eee, #fff, #eee)',
                    }}
                />
            );
        };
    });

    it('withSkeleton pulse', () => {
        () => {
            const DivSkeleton = withSkeleton(
                React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => (
                    <div ref={ref} {...props} />
                )),
            );
            return (
                <DivSkeleton
                    skeleton
                    animationConfig={{ type: 'pulse', customFadeInColor: '#e0e0e0', customFadeOutColor: '#f5f5f5' }}
                />
            );
        };
    });
});
