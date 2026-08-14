import * as React from 'react';
import type { ComponentProps, ReactNode, CSSProperties, AriaRole } from 'react';
import { useState } from 'react';
import { describe, it } from 'node:test';
import { expectTypeOf } from 'expect-type';
import { Sheet } from '@salutejs/plasma-b2c';

type SheetProps = ComponentProps<typeof Sheet>;

describe('Basics', () => {
    it('Common', () => {
        // layout
        expectTypeOf<SheetProps>().toHaveProperty('hasHandle').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<SheetProps>().toHaveProperty('withOverlay').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<SheetProps>().toHaveProperty('withBlur').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<SheetProps>().toHaveProperty('withTransition').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<SheetProps>().toHaveProperty('isHeaderFixed').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<SheetProps>().toHaveProperty('isFooterFixed').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<SheetProps>().toHaveProperty('hasScrollEvents').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<SheetProps>().toHaveProperty('throttleMs').toEqualTypeOf<number | undefined>();

        // state
        expectTypeOf<SheetProps>().toHaveProperty('opened').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<SheetProps>().toHaveProperty('closeOnEsc').toEqualTypeOf<boolean | undefined>();

        // content slots
        expectTypeOf<SheetProps>().toHaveProperty('children').toEqualTypeOf<ReactNode>();
        expectTypeOf<SheetProps>().toHaveProperty('contentHeader').toEqualTypeOf<ReactNode>();
        expectTypeOf<SheetProps>().toHaveProperty('contentFooter').toEqualTypeOf<ReactNode>();

        // callbacks
        expectTypeOf<SheetProps>().toHaveProperty('onClose').toEqualTypeOf<() => void>();
        expectTypeOf<SheetProps>()
            .toHaveProperty('onOverlayClick')
            .toEqualTypeOf<((event: React.MouseEvent<HTMLDivElement>) => void) | undefined>();
        expectTypeOf<SheetProps>()
            .toHaveProperty('onEscKeyDown')
            .toEqualTypeOf<((event: KeyboardEvent) => void) | undefined>();
    });

    it('Variations', () => {
        type View = NonNullable<SheetProps['view']>;
        expectTypeOf<View>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<View>();

        type HandlePlacement = NonNullable<SheetProps['handlePlacement']>;
        expectTypeOf<HandlePlacement>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<HandlePlacement>();
    });

    it('HTMLDivElement', () => {
        expectTypeOf<SheetProps>().toHaveProperty('id').toEqualTypeOf<string | undefined>();
        expectTypeOf<SheetProps>().toHaveProperty('className').toEqualTypeOf<string | undefined>();
        expectTypeOf<SheetProps>().toHaveProperty('style').toEqualTypeOf<CSSProperties | undefined>();
        expectTypeOf<SheetProps>().toHaveProperty('aria-label').toEqualTypeOf<string | undefined>();
        expectTypeOf<SheetProps>().toHaveProperty('role').toEqualTypeOf<AriaRole | undefined>();
        expectTypeOf<SheetProps>()
            .toHaveProperty('onClick')
            .toEqualTypeOf<React.MouseEventHandler<HTMLDivElement> | undefined>();
        expectTypeOf<SheetProps>()
            .toHaveProperty('onMouseEnter')
            .toEqualTypeOf<React.MouseEventHandler<HTMLDivElement> | undefined>();
        expectTypeOf<SheetProps>()
            .toHaveProperty('onMouseLeave')
            .toEqualTypeOf<React.MouseEventHandler<HTMLDivElement> | undefined>();
    });
});

describe('Complex', () => {
    it('Examples', () => {
        expectTypeOf<SheetProps>({ onClose: () => {} });
        expectTypeOf<SheetProps>({ opened: true, onClose: () => {} });
        expectTypeOf<SheetProps>({
            opened: true,
            onClose: () => {},
            onOverlayClick: () => {},
            withOverlay: true,
            withBlur: true,
        });
        expectTypeOf<SheetProps>({
            opened: true,
            onClose: () => {},
            contentHeader: 'Header',
            contentFooter: 'Footer',
            isHeaderFixed: true,
            isFooterFixed: true,
        });
    });
});

describe('Examples', () => {
    it('Controlled', () => {
        () => {
            const [opened, setOpened] = useState(false);

            return (
                <Sheet opened={opened} onClose={() => setOpened(false)}>
                    Content
                </Sheet>
            );
        };
    });

    it('With overlay click', () => {
        () => {
            const [opened, setOpened] = useState(false);

            return (
                <Sheet
                    opened={opened}
                    onClose={() => setOpened(false)}
                    onOverlayClick={() => setOpened(false)}
                    withOverlay
                    withBlur
                >
                    Content
                </Sheet>
            );
        };
    });

    it('With esc', () => {
        () => {
            const [opened, setOpened] = useState(false);

            return (
                <Sheet
                    opened={opened}
                    onClose={() => setOpened(false)}
                    onEscKeyDown={() => setOpened(false)}
                    closeOnEsc
                >
                    Content
                </Sheet>
            );
        };
    });

    it('With header and footer', () => {
        () => {
            return (
                <Sheet
                    opened
                    onClose={() => {}}
                    contentHeader={<div>Header</div>}
                    contentFooter={<div>Footer</div>}
                    isHeaderFixed
                    isFooterFixed
                    hasHandle
                >
                    Content
                </Sheet>
            );
        };
    });
});
