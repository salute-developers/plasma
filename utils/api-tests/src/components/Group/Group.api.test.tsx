import * as React from 'react';
import type { ComponentProps, ReactNode, CSSProperties, AriaRole } from 'react';
import { describe, it } from 'node:test';
import { expectTypeOf } from 'expect-type';
import { Group } from '@salutejs/plasma-b2c';

type GroupProps = ComponentProps<typeof Group>;

describe('Basics', () => {
    it('Common', () => {
        expectTypeOf<GroupProps>().toHaveProperty('children').toEqualTypeOf<ReactNode>();
        expectTypeOf<GroupProps>().toHaveProperty('gap').toEqualTypeOf<'none' | 'dense' | 'wide' | undefined>();
        expectTypeOf<GroupProps>().toHaveProperty('orientation').toEqualTypeOf<'vertical' | 'horizontal' | undefined>();
        expectTypeOf<GroupProps>().toHaveProperty('shape').toEqualTypeOf<'default' | 'segmented' | undefined>();
        expectTypeOf<GroupProps>().toHaveProperty('stretching').toEqualTypeOf<'filled' | 'auto' | undefined>();
    });

    it('HTMLDivElement', () => {
        expectTypeOf<GroupProps>().toHaveProperty('id').toEqualTypeOf<string | undefined>();
        expectTypeOf<GroupProps>().toHaveProperty('className').toEqualTypeOf<string | undefined>();
        expectTypeOf<GroupProps>().toHaveProperty('style').toEqualTypeOf<CSSProperties | undefined>();
        expectTypeOf<GroupProps>()
            .toHaveProperty('onClick')
            .toEqualTypeOf<React.MouseEventHandler<HTMLDivElement> | undefined>();
        expectTypeOf<GroupProps>()
            .toHaveProperty('onMouseEnter')
            .toEqualTypeOf<React.MouseEventHandler<HTMLDivElement> | undefined>();
        expectTypeOf<GroupProps>()
            .toHaveProperty('onMouseLeave')
            .toEqualTypeOf<React.MouseEventHandler<HTMLDivElement> | undefined>();
        expectTypeOf<GroupProps>().toHaveProperty('aria-label').toEqualTypeOf<string | undefined>();
        expectTypeOf<GroupProps>().toHaveProperty('role').toEqualTypeOf<AriaRole | undefined>();
    });
});

describe('Complex', () => {
    it('Examples', () => {
        expectTypeOf<GroupProps>({ gap: 'dense', orientation: 'horizontal' });
        expectTypeOf<GroupProps>({ shape: 'segmented', gap: 'none' });
        expectTypeOf<GroupProps>({ stretching: 'filled', orientation: 'vertical', gap: 'wide' });
    });
});

describe('Examples', () => {
    it('Basic', () => {
        () => {
            return (
                <Group gap="dense" orientation="horizontal" shape="default" stretching="auto">
                    <button type="button">One</button>
                    <button type="button">Two</button>
                </Group>
            );
        };
    });

    it('Segmented', () => {
        () => {
            return (
                <Group shape="segmented" gap="none" orientation="vertical" stretching="filled" aria-label="Группа">
                    <span>One</span>
                </Group>
            );
        };
    });
});
