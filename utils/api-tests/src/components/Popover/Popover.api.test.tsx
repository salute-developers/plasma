import React, { useState } from 'react';
import type { ComponentProps, ReactNode, CSSProperties, AriaRole, RefObject, SyntheticEvent, Ref } from 'react';
import { describe, it } from 'node:test';
import { expectTypeOf } from 'expect-type';
import { Popover } from '@salutejs/plasma-b2c';
import type { PopoverPlacement, PopoverTrigger } from '@salutejs/plasma-b2c';

type PopoverProps = ComponentProps<typeof Popover>;

describe('Basics', () => {
    it('Common', () => {
        // layout
        expectTypeOf<PopoverProps>().toHaveProperty('target').toEqualTypeOf<ReactNode | Ref<HTMLElement> | undefined>();
        expectTypeOf<PopoverProps>().toHaveProperty('offset').toEqualTypeOf<[number, number] | undefined>();
        expectTypeOf<PopoverProps>()
            .toHaveProperty('frame')
            .toEqualTypeOf<string | RefObject<HTMLElement | null> | undefined>();
        expectTypeOf<PopoverProps>().toHaveProperty('hasArrow').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<PopoverProps>().toHaveProperty('zIndex').toEqualTypeOf<string | undefined>();
        expectTypeOf<PopoverProps>().toHaveProperty('preventOverflow').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<PopoverProps>().toHaveProperty('usePortal').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<PopoverProps>().toHaveProperty('animated').toEqualTypeOf<boolean | undefined>();

        // state / behaviour
        expectTypeOf<PopoverProps>().toHaveProperty('opened').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<PopoverProps>().toHaveProperty('trigger').toEqualTypeOf<PopoverTrigger | undefined>();
        expectTypeOf<PopoverProps>().toHaveProperty('isFocusTrapped').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<PopoverProps>().toHaveProperty('closeOnEsc').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<PopoverProps>().toHaveProperty('closeOnOverlayClick').toEqualTypeOf<boolean | undefined>();

        // content slots
        expectTypeOf<PopoverProps>().toHaveProperty('children').toEqualTypeOf<ReactNode>();

        // callbacks
        expectTypeOf<PopoverProps>()
            .toHaveProperty('onToggle')
            .toEqualTypeOf<((isOpen: boolean, event: SyntheticEvent | Event) => void) | undefined>();
    });

    it('Placement', () => {
        type PlacementProp = NonNullable<PopoverProps['placement']>;
        expectTypeOf<PlacementProp>().toExtend<string | readonly string[]>();
        expectTypeOf<string>().not.toExtend<PlacementProp>();

        // accepts known placement values
        expectTypeOf<PopoverProps>({ placement: 'top' as PopoverPlacement });
        expectTypeOf<PopoverProps>({ placement: 'bottom-start' as PopoverPlacement });
    });

    it('HTMLDivElement', () => {
        expectTypeOf<PopoverProps>().toHaveProperty('id').toEqualTypeOf<string | undefined>();
        expectTypeOf<PopoverProps>().toHaveProperty('className').toEqualTypeOf<string | undefined>();
        expectTypeOf<PopoverProps>().toHaveProperty('style').toEqualTypeOf<CSSProperties | undefined>();
        expectTypeOf<PopoverProps>().toHaveProperty('role').toEqualTypeOf<AriaRole | undefined>();
        expectTypeOf<PopoverProps>().toHaveProperty('aria-label').toEqualTypeOf<string | undefined>();
        expectTypeOf<PopoverProps>()
            .toHaveProperty('onClick')
            .toEqualTypeOf<React.MouseEventHandler<HTMLDivElement> | undefined>();
        expectTypeOf<PopoverProps>()
            .toHaveProperty('onMouseEnter')
            .toEqualTypeOf<React.MouseEventHandler<HTMLDivElement> | undefined>();
        expectTypeOf<PopoverProps>()
            .toHaveProperty('onMouseLeave')
            .toEqualTypeOf<React.MouseEventHandler<HTMLDivElement> | undefined>();
    });
});

describe('Resizable', () => {
    it('resizable prop accepts boolean', () => {
        expectTypeOf<PopoverProps>({ resizable: true });
        expectTypeOf<PopoverProps>({ resizable: false });
    });

    it('resizable prop accepts config object', () => {
        expectTypeOf<PopoverProps>({
            resizable: {
                disabled: false,
                directions: ['bottom-right'],
                defaultSize: { width: 200, height: 100 },
                minWidth: 100,
                minHeight: 50,
                maxWidth: 600,
                maxHeight: 400,
                iconSize: 's',
                hiddenIcons: ['top-left'],
            },
        });
    });

    it('iconSize is narrowed', () => {
        type ResizableObj = Extract<NonNullable<PopoverProps['resizable']>, object>;
        expectTypeOf<ResizableObj>().toHaveProperty('iconSize').toEqualTypeOf<'xs' | 's' | 'm' | undefined>();
    });
});

describe('Examples', () => {
    it('Click trigger', () => {
        () => {
            const [isOpen, setIsOpen] = useState(false);
            return (
                <Popover
                    opened={isOpen}
                    onToggle={(is) => setIsOpen(is)}
                    trigger="click"
                    placement="bottom"
                    hasArrow
                    target={<button type="button">Open</button>}
                >
                    <div>Content</div>
                </Popover>
            );
        };
    });

    it('Hover trigger with offset', () => {
        () => {
            const [isOpen, setIsOpen] = useState(false);
            return (
                <Popover
                    opened={isOpen}
                    onToggle={(is) => setIsOpen(is)}
                    trigger="hover"
                    placement="top"
                    offset={[0, 8]}
                    closeOnEsc={false}
                    isFocusTrapped={false}
                >
                    Content
                </Popover>
            );
        };
    });

    it('Resizable', () => {
        () => {
            const [isOpen, setIsOpen] = useState(false);
            return (
                <Popover
                    opened={isOpen}
                    onToggle={(is) => setIsOpen(is)}
                    trigger="click"
                    resizable={{ disabled: false, directions: ['bottom-right'], iconSize: 's' }}
                    onResizeStart={() => {}}
                    onResizeEnd={() => {}}
                >
                    Content
                </Popover>
            );
        };
    });

    it('Overlay click and frame', () => {
        () => {
            const [isOpen, setIsOpen] = useState(false);
            const ref = React.useRef<HTMLDivElement>(null);
            return (
                <div ref={ref}>
                    <Popover
                        opened={isOpen}
                        onToggle={(is) => setIsOpen(is)}
                        trigger="click"
                        closeOnOverlayClick
                        frame={ref}
                        animated
                    >
                        Content
                    </Popover>
                </div>
            );
        };
    });
});
