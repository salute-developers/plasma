import * as React from 'react';
import type { AriaRole, ComponentProps, CSSProperties, MouseEventHandler, ReactNode } from 'react';
import { describe, it } from 'node:test';
import { expectTypeOf } from 'expect-type';
import { IconButtonGroup, IconButton } from '@salutejs/plasma-b2c';

type IconButtonGroupProps = ComponentProps<typeof IconButtonGroup>;

describe('Basics', () => {
    it('Common', () => {
        expectTypeOf<IconButtonGroupProps>().toHaveProperty('children').toEqualTypeOf<ReactNode>();
        expectTypeOf<IconButtonGroupProps>()
            .toHaveProperty('gap')
            .toEqualTypeOf<'none' | 'dense' | 'wide' | undefined>();
        expectTypeOf<IconButtonGroupProps>()
            .toHaveProperty('orientation')
            .toEqualTypeOf<'vertical' | 'horizontal' | undefined>();
        expectTypeOf<IconButtonGroupProps>()
            .toHaveProperty('shape')
            .toEqualTypeOf<'default' | 'segmented' | 'pilled' | undefined>();
        expectTypeOf<IconButtonGroupProps>()
            .toHaveProperty('stretching')
            .toEqualTypeOf<'filled' | 'auto' | undefined>();
        expectTypeOf<IconButtonGroupProps>()
            .toHaveProperty('isCommonButtonStyles')
            .toEqualTypeOf<boolean | undefined>();
    });

    it('Variations', () => {
        type View = NonNullable<IconButtonGroupProps['view']>;
        expectTypeOf<View>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<View>();

        type Size = NonNullable<IconButtonGroupProps['size']>;
        expectTypeOf<Size>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<Size>();
    });

    it('HTMLDivElement', () => {
        expectTypeOf<IconButtonGroupProps>().toHaveProperty('id').toEqualTypeOf<string | undefined>();
        expectTypeOf<IconButtonGroupProps>().toHaveProperty('className').toEqualTypeOf<string | undefined>();
        expectTypeOf<IconButtonGroupProps>().toHaveProperty('style').toEqualTypeOf<CSSProperties | undefined>();
        expectTypeOf<IconButtonGroupProps>().toHaveProperty('aria-label').toEqualTypeOf<string | undefined>();
        expectTypeOf<IconButtonGroupProps>().toHaveProperty('role').toEqualTypeOf<AriaRole | undefined>();
        expectTypeOf<IconButtonGroupProps>()
            .toHaveProperty('onClick')
            .toEqualTypeOf<MouseEventHandler<HTMLDivElement> | undefined>();
    });
});

describe('Examples', () => {
    it('Dense default and pilled', () => {
        () => {
            return (
                <>
                    <IconButtonGroup gap="dense" shape="default" view="secondary" size="s">
                        <IconButton>
                            <span />
                        </IconButton>
                        <IconButton>
                            <span />
                        </IconButton>
                    </IconButtonGroup>
                    <IconButtonGroup gap="dense" shape="pilled" orientation="vertical" stretching="auto">
                        <IconButton>
                            <span />
                        </IconButton>
                    </IconButtonGroup>
                    <IconButtonGroup gap="dense" shape="segmented" isCommonButtonStyles={false}>
                        <IconButton>
                            <span />
                        </IconButton>
                    </IconButtonGroup>
                </>
            );
        };
    });
});
