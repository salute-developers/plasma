import * as React from 'react';
import type { ComponentProps, ReactNode, CSSProperties, AriaRole } from 'react';
import { describe, it } from 'vitest';
import { expectTypeOf } from 'expect-type';
import { IconDownload } from '@salutejs/plasma-icons';
import { Button } from '@salutejs/plasma-b2c';

type ButtonProps = ComponentProps<typeof Button>;

describe('Basics', () => {
    it('Common', () => {
        expectTypeOf<ButtonProps>().toHaveProperty('children').toEqualTypeOf<ReactNode>();
        expectTypeOf<ButtonProps>().toHaveProperty('text').toEqualTypeOf<string | undefined>();
        expectTypeOf<ButtonProps>().toHaveProperty('contentLeft').toEqualTypeOf<ReactNode>();
        expectTypeOf<ButtonProps>().toHaveProperty('contentPlacing').toEqualTypeOf<'default' | 'relaxed' | undefined>();
        expectTypeOf<ButtonProps>().toHaveProperty('additionalContent').toEqualTypeOf<ReactNode>();
        expectTypeOf<ButtonProps>().toHaveProperty('isLoading').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<ButtonProps>().toHaveProperty('loader').toEqualTypeOf<ReactNode>();
        expectTypeOf<ButtonProps>().toHaveProperty('stretch').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<ButtonProps>()
            .toHaveProperty('stretching')
            .toEqualTypeOf<'fixed' | 'filled' | 'auto' | undefined>();
        expectTypeOf<ButtonProps>().toHaveProperty('square').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<ButtonProps>().toHaveProperty('focused').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<ButtonProps>().toHaveProperty('disabled').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<ButtonProps>()
            .toHaveProperty('pin')
            .toEqualTypeOf<
                | 'square-square'
                | 'square-clear'
                | 'clear-square'
                | 'clear-clear'
                | 'clear-circle'
                | 'circle-clear'
                | 'circle-circle'
                | undefined
            >();
        expectTypeOf<ButtonProps>().toHaveProperty('outlined').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<ButtonProps>().toHaveProperty('shiftLeft').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<ButtonProps>().toHaveProperty('shiftRight').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<ButtonProps>().toHaveProperty('blur').toEqualTypeOf<'small' | 'medium' | 'large' | undefined>();
    });

    it('Variations', () => {
        type View = NonNullable<ButtonProps['view']>;
        expectTypeOf<View>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<View>();

        type Size = NonNullable<ButtonProps['size']>;
        expectTypeOf<Size>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<Size>();
    });

    it('HTMLInputElement', () => {
        expectTypeOf<ButtonProps>().toHaveProperty('id').toEqualTypeOf<string | undefined>();
        expectTypeOf<ButtonProps>().toHaveProperty('className').toEqualTypeOf<string | undefined>();
        expectTypeOf<ButtonProps>().toHaveProperty('style').toEqualTypeOf<CSSProperties | undefined>();
        expectTypeOf<ButtonProps>()
            .toHaveProperty('onClick')
            .toEqualTypeOf<React.MouseEventHandler<HTMLElement> | undefined>();
        expectTypeOf<ButtonProps>()
            .toHaveProperty('onMouseEnter')
            .toEqualTypeOf<React.MouseEventHandler<HTMLElement> | undefined>();
        expectTypeOf<ButtonProps>()
            .toHaveProperty('onMouseLeave')
            .toEqualTypeOf<React.MouseEventHandler<HTMLElement> | undefined>();
        expectTypeOf<ButtonProps>().toHaveProperty('aria-label').toEqualTypeOf<string | undefined>();
        expectTypeOf<ButtonProps>().toHaveProperty('role').toEqualTypeOf<AriaRole | undefined>();
    });
});

describe('Unions', () => {
    it('RightContent', () => {
        expectTypeOf<ButtonProps>({ value: 123 });
        expectTypeOf<ButtonProps>({ contentRight: 123 });
        // @ts-expect-error
        expectTypeOf<ButtonProps>({ value: 123, contentRight: 123 });
    });
});

describe('Complex', () => {
    it('Examples', () => {
        expectTypeOf<ButtonProps>({ text: 'Текст', contentLeft: <IconDownload color="inherit" /> });
        expectTypeOf<ButtonProps>({ isLoading: true, loader: <div>Loader...</div> });
        expectTypeOf<ButtonProps>({ text: 'Button', stretching: 'filled' });
        expectTypeOf<ButtonProps>({ text: 'Hello', value: 'Plasma', stretching: 'filled', contentPlacing: 'default' });
    });
});
