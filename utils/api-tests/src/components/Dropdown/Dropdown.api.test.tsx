import type { AriaRole, ComponentProps, CSSProperties, ReactNode, RefObject, SyntheticEvent } from 'react';
import React, { useState } from 'react';
import { describe, it } from 'node:test';
import { expectTypeOf } from 'expect-type';
import { Button, Dropdown, DropdownItemOption as ItemOption } from '@salutejs/plasma-b2c';

type DropdownProps = ComponentProps<typeof Dropdown>;

describe('Basics', () => {
    it('Common', () => {
        // @ts-expect-error
        expectTypeOf<DropdownProps>({});
        expectTypeOf<DropdownProps>({ items: [] });
        expectTypeOf<DropdownProps>().toHaveProperty('items').toEqualTypeOf<ItemOption[]>();

        expectTypeOf<DropdownProps>().toHaveProperty('trigger').toEqualTypeOf<'hover' | 'click' | undefined>();
        expectTypeOf<DropdownProps>()
            .toHaveProperty('placement')
            .toEqualTypeOf<
                | 'auto'
                | 'top-start'
                | 'top-center'
                | 'top-end'
                | 'right-start'
                | 'right-center'
                | 'right-end'
                | 'bottom-start'
                | 'bottom-center'
                | 'bottom-end'
                | 'left-start'
                | 'left-center'
                | 'left-end'
                | 'top'
                | 'bottom'
                | 'left'
                | 'right'
                | undefined
            >();
        expectTypeOf<DropdownProps>().toHaveProperty('children').toEqualTypeOf<ReactNode | undefined>();
        expectTypeOf<DropdownProps>().toHaveProperty('variant').toEqualTypeOf<'normal' | 'tight' | undefined>();
        expectTypeOf<DropdownProps>().toHaveProperty('zIndex').toEqualTypeOf<CSSProperties['zIndex'] | undefined>();
        expectTypeOf<DropdownProps>()
            .toHaveProperty('listMaxHeight')
            .toEqualTypeOf<CSSProperties['height'] | undefined>();
        expectTypeOf<DropdownProps>().toHaveProperty('listWidth').toEqualTypeOf<CSSProperties['width'] | undefined>();
        expectTypeOf<DropdownProps>()
            .toHaveProperty('portal')
            .toEqualTypeOf<string | RefObject<HTMLElement | null> | undefined>();
        expectTypeOf<DropdownProps>()
            .toHaveProperty('renderItem')
            .toEqualTypeOf<((item: ItemOption) => ReactNode) | undefined>();
        expectTypeOf<DropdownProps>().toHaveProperty('beforeList').toEqualTypeOf<ReactNode | undefined>();
        expectTypeOf<DropdownProps>().toHaveProperty('afterList').toEqualTypeOf<ReactNode | undefined>();
        expectTypeOf<DropdownProps>()
            .toHaveProperty('onToggle')
            .toEqualTypeOf<((isOpen: boolean, event?: SyntheticEvent | Event) => void) | undefined>();
        expectTypeOf<DropdownProps>().toHaveProperty('alwaysOpened').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<DropdownProps>()
            .toHaveProperty('onHover')
            .toEqualTypeOf<((index: number, item: ItemOption) => void) | undefined>();
        expectTypeOf<DropdownProps>()
            .toHaveProperty('onItemSelect')
            .toEqualTypeOf<((item: ItemOption, event: SyntheticEvent) => void) | undefined>();
        expectTypeOf<DropdownProps>().toHaveProperty('openByRightClick').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<DropdownProps>().toHaveProperty('offset').toEqualTypeOf<[number, number] | undefined>();
        expectTypeOf<DropdownProps>().toHaveProperty('closeOnSelect').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<DropdownProps>().toHaveProperty('closeOnOverlayClick').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<DropdownProps>().toHaveProperty('itemRole').toEqualTypeOf<string | undefined>();
        expectTypeOf<DropdownProps>().toHaveProperty('disabled').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<DropdownProps>().toHaveProperty('flip').toEqualTypeOf<boolean | undefined>();
    });

    it('Variations', () => {
        type View = NonNullable<DropdownProps['view']>;
        expectTypeOf<View>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<View>();

        type Size = NonNullable<DropdownProps['size']>;
        expectTypeOf<Size>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<Size>();
    });

    it('HTMLDivElement', () => {
        expectTypeOf<DropdownProps>().toHaveProperty('id').toEqualTypeOf<string | undefined>();
        expectTypeOf<DropdownProps>().toHaveProperty('className').toEqualTypeOf<string | undefined>();
        expectTypeOf<DropdownProps>().toHaveProperty('style').toEqualTypeOf<CSSProperties | undefined>();
        expectTypeOf<DropdownProps>().toHaveProperty('aria-label').toEqualTypeOf<string | undefined>();
        expectTypeOf<DropdownProps>().toHaveProperty('role').toEqualTypeOf<AriaRole | undefined>();
        expectTypeOf<DropdownProps>()
            .toHaveProperty('onClick')
            .toEqualTypeOf<React.MouseEventHandler<HTMLDivElement> | undefined>();
        expectTypeOf<DropdownProps>()
            .toHaveProperty('onMouseEnter')
            .toEqualTypeOf<React.MouseEventHandler<HTMLDivElement> | undefined>();
        expectTypeOf<DropdownProps>()
            .toHaveProperty('onMouseLeave')
            .toEqualTypeOf<React.MouseEventHandler<HTMLDivElement> | undefined>();
    });
});

describe('Generics', () => {
    it('ItemOption', () => {
        const items = [{ value: '', label: '', customProp: '', boolProp: true }];
        void (<Dropdown items={items} />);
        void (
            <Dropdown
                items={items}
                renderItem={(item) => item.customProp}
                onHover={(index, item) => item.boolProp && index}
                onItemSelect={(item) => item.customProp}
            />
        );
    });
});

describe('Examples', () => {
    it('Basic', () => {
        () => {
            const [opened, setOpened] = useState(false);

            return (
                <Dropdown
                    items={[{ value: 'one', label: 'One' }]}
                    flip
                    placement="top"
                    onToggle={(isOpen) => setOpened(isOpen)}
                >
                    <Button text={opened ? 'Opened' : 'Closed'} />
                </Dropdown>
            );
        };
    });

    it('Flip disabled', () => {
        () => {
            return (
                <Dropdown items={[{ value: 'one', label: 'One' }]} flip={false} placement="top">
                    <Button text="Список" />
                </Dropdown>
            );
        };
    });
});
