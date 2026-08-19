import * as React from 'react';
import type { ComponentProps, ReactNode, CSSProperties, AriaRole } from 'react';
import { useState } from 'react';
import { describe, it } from 'node:test';
import { expectTypeOf } from 'expect-type';
import { BottomSheet } from '@salutejs/plasma-giga';

type BottomSheetProps = ComponentProps<typeof BottomSheet>;

describe('Basics', () => {
    it('Common', () => {
        // layout
        expectTypeOf<BottomSheetProps>()
            .toHaveProperty('handlePlacement')
            .toEqualTypeOf<'inner' | 'outer' | undefined>();
        expectTypeOf<BottomSheetProps>().toHaveProperty('hasClose').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<BottomSheetProps>().toHaveProperty('hasHandle').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<BottomSheetProps>().toHaveProperty('withOverlay').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<BottomSheetProps>().toHaveProperty('withBlur').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<BottomSheetProps>().toHaveProperty('withTransition').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<BottomSheetProps>()
            .toHaveProperty('maxHeight')
            .toEqualTypeOf<CSSProperties['maxHeight'] | undefined>();
        expectTypeOf<BottomSheetProps>().toHaveProperty('zIndex').toEqualTypeOf<CSSProperties['zIndex'] | undefined>();

        // state
        expectTypeOf<BottomSheetProps>().toHaveProperty('opened').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<BottomSheetProps>().toHaveProperty('closeOnEsc').toEqualTypeOf<boolean | undefined>();

        // content slots
        expectTypeOf<BottomSheetProps>().toHaveProperty('children').toEqualTypeOf<ReactNode>();
        expectTypeOf<BottomSheetProps>().toHaveProperty('contentBeforeHeader').toEqualTypeOf<ReactNode>();
        expectTypeOf<BottomSheetProps>().toHaveProperty('contentHeader').toEqualTypeOf<ReactNode>();
        expectTypeOf<BottomSheetProps>().toHaveProperty('contentFooter').toEqualTypeOf<ReactNode>();

        // callbacks
        expectTypeOf<BottomSheetProps>().toHaveProperty('onClose').toEqualTypeOf<(() => void) | undefined>();
        expectTypeOf<BottomSheetProps>()
            .toHaveProperty('onOverlayClick')
            .toEqualTypeOf<((event: React.MouseEvent<HTMLDivElement>) => void) | undefined>();
        expectTypeOf<BottomSheetProps>()
            .toHaveProperty('onEscKeyDown')
            .toEqualTypeOf<((event: KeyboardEvent) => void) | undefined>();
    });

    it('Variations', () => {
        type View = NonNullable<BottomSheetProps['view']>;
        expectTypeOf<View>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<View>();

        type Size = NonNullable<BottomSheetProps['size']>;
        expectTypeOf<Size>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<Size>();
    });

    it('HTMLDivElement', () => {
        expectTypeOf<BottomSheetProps>().toHaveProperty('id').toEqualTypeOf<string | undefined>();
        expectTypeOf<BottomSheetProps>().toHaveProperty('className').toEqualTypeOf<string | undefined>();
        expectTypeOf<BottomSheetProps>().toHaveProperty('style').toEqualTypeOf<CSSProperties | undefined>();
        expectTypeOf<BottomSheetProps>().toHaveProperty('aria-label').toEqualTypeOf<string | undefined>();
        expectTypeOf<BottomSheetProps>().toHaveProperty('role').toEqualTypeOf<AriaRole | undefined>();
        expectTypeOf<BottomSheetProps>()
            .toHaveProperty('onClick')
            .toEqualTypeOf<React.MouseEventHandler<HTMLDivElement> | undefined>();
        expectTypeOf<BottomSheetProps>()
            .toHaveProperty('onMouseEnter')
            .toEqualTypeOf<React.MouseEventHandler<HTMLDivElement> | undefined>();
        expectTypeOf<BottomSheetProps>()
            .toHaveProperty('onMouseLeave')
            .toEqualTypeOf<React.MouseEventHandler<HTMLDivElement> | undefined>();
    });
});

describe('Complex', () => {
    it('Examples', () => {
        expectTypeOf<BottomSheetProps>({});
        expectTypeOf<BottomSheetProps>({ opened: true, onClose: () => {} });
        expectTypeOf<BottomSheetProps>({
            opened: true,
            onClose: () => {},
            onOverlayClick: () => {},
            withOverlay: true,
            withBlur: true,
        });
        expectTypeOf<BottomSheetProps>({
            opened: true,
            contentBeforeHeader: 'Before',
            contentHeader: 'Header',
            contentFooter: 'Footer',
            handlePlacement: 'outer',
            hasClose: true,
            hasHandle: true,
            maxHeight: '80dvh',
            zIndex: 2000,
        });
    });
});

describe('Examples', () => {
    it('Controlled', () => {
        () => {
            const [opened, setOpened] = useState(false);

            return (
                <BottomSheet opened={opened} onClose={() => setOpened(false)}>
                    Content
                </BottomSheet>
            );
        };
    });

    it('With overlay click', () => {
        () => {
            const [opened, setOpened] = useState(false);

            return (
                <BottomSheet
                    opened={opened}
                    onClose={() => setOpened(false)}
                    onOverlayClick={() => setOpened(false)}
                    withOverlay
                    withBlur
                >
                    Content
                </BottomSheet>
            );
        };
    });

    it('With esc', () => {
        () => {
            const [opened, setOpened] = useState(false);

            return (
                <BottomSheet
                    opened={opened}
                    onClose={() => setOpened(false)}
                    onEscKeyDown={() => setOpened(false)}
                    closeOnEsc
                >
                    Content
                </BottomSheet>
            );
        };
    });

    it('With slots', () => {
        () => {
            return (
                <BottomSheet
                    opened
                    onClose={() => {}}
                    contentBeforeHeader={<div>Before</div>}
                    contentHeader={<div>Header</div>}
                    contentFooter={<div>Footer</div>}
                    handlePlacement="outer"
                    hasClose
                    hasHandle
                    maxHeight="80dvh"
                >
                    Content
                </BottomSheet>
            );
        };
    });
});
