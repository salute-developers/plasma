import * as React from 'react';
import type { ComponentProps, CSSProperties, ReactNode } from 'react';
import { describe, it } from 'node:test';
import { expectTypeOf } from 'expect-type';
import { Carousel } from '@salutejs/plasma-b2c';

// В plasma-b2c и plasma-web index: number выбирает legacy-реализацию.
type CarouselProps = Exclude<ComponentProps<typeof Carousel>, { index: number }>;

describe('Carousel', () => {
    it('Common', () => {
        expectTypeOf<CarouselProps>().toHaveProperty('gap').toEqualTypeOf<CSSProperties['gap']>();
        expectTypeOf<CarouselProps>()
            .toHaveProperty('scrollAlign')
            .toEqualTypeOf<'start' | 'center' | 'end' | undefined>();
        expectTypeOf<CarouselProps>()
            .toHaveProperty('controlArrowsPlacement')
            .toEqualTypeOf<'inner' | 'outer' | undefined>();
        expectTypeOf<CarouselProps>().toHaveProperty('controlArrowsDisabled').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<CarouselProps>().toHaveProperty('fullWidth').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<CarouselProps>().toHaveProperty('defaultIndex').toEqualTypeOf<number | undefined>();
        expectTypeOf<CarouselProps>().toHaveProperty('loop').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<CarouselProps>().toHaveProperty('autoPlay').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<CarouselProps>().toHaveProperty('autoPlayInterval').toEqualTypeOf<number | undefined>();
        expectTypeOf<CarouselProps>().toHaveProperty('swipeEnabled').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<CarouselProps>().toHaveProperty('virtual').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<CarouselProps>()
            .toHaveProperty('paginationOptions')
            .toEqualTypeOf<{ disabled?: boolean; visibleDots?: number; centered?: boolean } | undefined>();
        expectTypeOf<CarouselProps>().toHaveProperty('children').toEqualTypeOf<ReactNode>();
        expectTypeOf<CarouselProps>()
            .toHaveProperty('onChangeIndex')
            .toEqualTypeOf<((index: number) => void) | undefined>();
    });

    it('Variations', () => {
        type View = NonNullable<CarouselProps['view']>;
        type Size = NonNullable<CarouselProps['size']>;

        expectTypeOf<View>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<View>();
        expectTypeOf<Size>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<Size>();
    });

    it('HTMLDivElement', () => {
        expectTypeOf<CarouselProps>().toHaveProperty('id').toEqualTypeOf<string | undefined>();
        expectTypeOf<CarouselProps>().toHaveProperty('className').toEqualTypeOf<string | undefined>();
        expectTypeOf<CarouselProps>().toHaveProperty('style').toEqualTypeOf<CSSProperties | undefined>();
        expectTypeOf<CarouselProps>().toHaveProperty('aria-label').toEqualTypeOf<string | undefined>();
        expectTypeOf<CarouselProps>()
            .toHaveProperty('onClick')
            .toEqualTypeOf<React.MouseEventHandler<HTMLDivElement> | undefined>();
    });
});

describe('Examples', () => {
    it('Placement', () => {
        void (
            <Carousel controlArrowsPlacement="inner">
                <div>Слайд</div>
            </Carousel>
        );
        void (
            <Carousel controlArrowsPlacement="outer" fullWidth defaultIndex={1}>
                <div>Первый слайд</div>
                <div>Второй слайд</div>
            </Carousel>
        );
        // @ts-expect-error Допустимы только inner и outer.
        void (<Carousel controlArrowsPlacement="outside" />);
    });
});
