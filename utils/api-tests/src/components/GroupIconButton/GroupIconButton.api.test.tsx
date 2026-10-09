import * as React from 'react';
import type { AriaRole, ComponentProps, CSSProperties, MouseEventHandler, ReactNode } from 'react';
import { describe, it } from 'node:test';
import { expectTypeOf } from 'expect-type';
import { GroupIconButton, IconButton } from '@salutejs/plasma-b2c';

type GroupIconButtonProps = ComponentProps<typeof GroupIconButton>;

describe('Basics', () => {
    it('Common', () => {
        expectTypeOf<GroupIconButtonProps>().toHaveProperty('children').toEqualTypeOf<ReactNode>();
        expectTypeOf<GroupIconButtonProps>()
            .toHaveProperty('gap')
            .toEqualTypeOf<'none' | 'dense' | 'wide' | undefined>();
        expectTypeOf<GroupIconButtonProps>()
            .toHaveProperty('orientation')
            .toEqualTypeOf<'vertical' | 'horizontal' | undefined>();
        expectTypeOf<GroupIconButtonProps>()
            .toHaveProperty('shape')
            .toEqualTypeOf<'default' | 'segmented' | 'pilled' | undefined>();
        expectTypeOf<GroupIconButtonProps>()
            .toHaveProperty('stretching')
            .toEqualTypeOf<'filled' | 'auto' | undefined>();
        expectTypeOf<GroupIconButtonProps>()
            .toHaveProperty('isCommonButtonStyles')
            .toEqualTypeOf<boolean | undefined>();
    });

    it('Variations', () => {
        type View = NonNullable<GroupIconButtonProps['view']>;
        expectTypeOf<View>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<View>();

        type Size = NonNullable<GroupIconButtonProps['size']>;
        expectTypeOf<Size>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<Size>();
    });

    it('HTMLDivElement', () => {
        expectTypeOf<GroupIconButtonProps>().toHaveProperty('id').toEqualTypeOf<string | undefined>();
        expectTypeOf<GroupIconButtonProps>().toHaveProperty('className').toEqualTypeOf<string | undefined>();
        expectTypeOf<GroupIconButtonProps>().toHaveProperty('style').toEqualTypeOf<CSSProperties | undefined>();
        expectTypeOf<GroupIconButtonProps>().toHaveProperty('aria-label').toEqualTypeOf<string | undefined>();
        expectTypeOf<GroupIconButtonProps>().toHaveProperty('role').toEqualTypeOf<AriaRole | undefined>();
        expectTypeOf<GroupIconButtonProps>()
            .toHaveProperty('onClick')
            .toEqualTypeOf<MouseEventHandler<HTMLDivElement> | undefined>();
    });
});

describe('Examples', () => {
    it('Dense default and pilled', () => {
        () => {
            return (
                <>
                    <GroupIconButton gap="dense" shape="default" view="secondary" size="s">
                        <IconButton>
                            <span />
                        </IconButton>
                        <IconButton>
                            <span />
                        </IconButton>
                    </GroupIconButton>
                    <GroupIconButton gap="dense" shape="pilled" orientation="vertical" stretching="auto">
                        <IconButton>
                            <span />
                        </IconButton>
                    </GroupIconButton>
                    <GroupIconButton gap="dense" shape="segmented" isCommonButtonStyles={false}>
                        <IconButton>
                            <span />
                        </IconButton>
                    </GroupIconButton>
                </>
            );
        };
    });
});
