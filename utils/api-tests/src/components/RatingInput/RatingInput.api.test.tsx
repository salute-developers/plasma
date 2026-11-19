import * as React from 'react';
import type { AriaRole, ComponentProps, CSSProperties, ReactNode } from 'react';
import { describe, it } from 'node:test';
import { expectTypeOf } from 'expect-type';
import { RatingInput } from '@salutejs/plasma-b2c';

type Props = ComponentProps<typeof RatingInput>;

describe('RatingInput API', () => {
    it('Common', () => {
        expectTypeOf<Props>().toHaveProperty('value').toEqualTypeOf<number | null | undefined>();
        expectTypeOf<Props>().toHaveProperty('defaultValue').toEqualTypeOf<number | null | undefined>();
        expectTypeOf<Props>().toHaveProperty('name').toEqualTypeOf<string | undefined>();
        expectTypeOf<Props>().toHaveProperty('allowClear').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<Props>().toHaveProperty('hasValue').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<Props>().toHaveProperty('hasLimitLabels').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<Props>().toHaveProperty('fractions').toEqualTypeOf<number | undefined>();
        expectTypeOf<Props>().toHaveProperty('iconQuantity').toEqualTypeOf<number | undefined>();
        expectTypeOf<Props>().toHaveProperty('valuePlacement').toEqualTypeOf<'top' | 'bottom' | undefined>();
        expectTypeOf<Props>().toHaveProperty('valueAlign').toEqualTypeOf<'start' | 'center' | undefined>();
        expectTypeOf<Props>().toHaveProperty('limitLabelsPlacement').toEqualTypeOf<'side' | 'bottom' | undefined>();
        expectTypeOf<Props>().toHaveProperty('minLabel').toEqualTypeOf<string | undefined>();
        expectTypeOf<Props>().toHaveProperty('maxLabel').toEqualTypeOf<string | undefined>();
        expectTypeOf<Props>().toHaveProperty('iconSlot').toEqualTypeOf<ReactNode>();
        expectTypeOf<Props>().toHaveProperty('iconSlotOutline').toEqualTypeOf<ReactNode>();
        expectTypeOf<Props>().toHaveProperty('onChange').toEqualTypeOf<((value: number | null) => void) | undefined>();
        expectTypeOf<Props>()
            .toHaveProperty('onHoverChange')
            .toEqualTypeOf<((value: number | null) => void) | undefined>();
        expectTypeOf<Props>()
            .toHaveProperty('renderValue')
            .toEqualTypeOf<((value: number | null) => ReactNode) | undefined>();
        expectTypeOf<Props>().toHaveProperty('getLabelText').toEqualTypeOf<((value: number) => string) | undefined>();
        expectTypeOf<Props>()
            .toHaveProperty('renderFractionIcon')
            .toEqualTypeOf<((filled: number, total: number) => ReactNode) | undefined>();
    });

    it('HTMLDivElement', () => {
        expectTypeOf<Props>().toHaveProperty('id').toEqualTypeOf<string | undefined>();
        expectTypeOf<Props>().toHaveProperty('className').toEqualTypeOf<string | undefined>();
        expectTypeOf<Props>().toHaveProperty('style').toEqualTypeOf<CSSProperties | undefined>();
        expectTypeOf<Props>().toHaveProperty('role').toEqualTypeOf<AriaRole | undefined>();
        expectTypeOf<Props>().toHaveProperty('aria-label').toEqualTypeOf<string | undefined>();
        expectTypeOf<Props>()
            .toHaveProperty('onKeyDown')
            .toEqualTypeOf<React.KeyboardEventHandler<HTMLDivElement> | undefined>();
        void (<RatingInput ref={React.createRef<HTMLDivElement>()} />);
    });

    it('Variations', () => {
        type Size = NonNullable<Props['size']>;
        expectTypeOf<Size>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<Size>();

        type View = NonNullable<Props['view']>;
        expectTypeOf<View>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<View>();

        type IconSize = NonNullable<Props['iconSize']>;
        expectTypeOf<IconSize>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<IconSize>();
    });

    it('rejects removed props and non-numeric input values', () => {
        // @ts-expect-error Дробность задается только через fractions.
        expectTypeOf<Props>({ allowHalf: true });
        // @ts-expect-error Кастомные дробные иконки задаются через renderFractionIcon.
        expectTypeOf<Props>({ iconSlotHalf: <span /> });
        // @ts-expect-error Видимое значение задается через renderValue.
        expectTypeOf<Props>({ displayValue: 'Хорошо' });
        // @ts-expect-error Оценка является числом или null.
        void (<RatingInput value="3" />);
        // @ts-expect-error Начальная оценка является числом или null.
        void (<RatingInput defaultValue="3" />);
    });

    it('supports controlled values, null resets and fraction icon renderers', () => {
        () => {
            const [value, setValue] = React.useState<number | null>(null);
            return (
                <RatingInput
                    value={value}
                    onChange={setValue}
                    allowClear
                    name="rating"
                    fractions={4}
                    hasValue
                    renderValue={(selected) => selected ?? 'Выберите оценку'}
                    renderFractionIcon={(filled, total) => (
                        <span>
                            {filled}/{total}
                        </span>
                    )}
                />
            );
        };
    });
});
