import type {
    AriaRole,
    ComponentProps,
    CSSProperties,
    ReactElement,
    RefObject,
    ReactNode,
    ChangeEventHandler,
} from 'react';
import React, { useState, useRef } from 'react';
import { describe, it } from 'vitest';
import { expectTypeOf } from 'expect-type';
import { Combobox } from '@salutejs/plasma-b2c';

type ComboboxProps = ComponentProps<typeof Combobox>;

type ItemOption = {
    value: string;
    label: string;
    placement?:
        | 'top'
        | 'top-start'
        | 'top-end'
        | 'right'
        | 'right-start'
        | 'right-end'
        | 'bottom'
        | 'bottom-start'
        | 'bottom-end'
        | 'left'
        | 'left-start'
        | 'left-end';
    items?: Array<ItemOption>;
    disabled?: boolean;
    contentLeft?: ReactNode;
    contentRight?: ReactNode;
    className?: string;
    listMaxHeight?: CSSProperties['height'];
};

describe('Basics', () => {
    it('Common', () => {
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({});
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ placement: 'bottom' });
        expectTypeOf<ComboboxProps>({ items: [] });
        expectTypeOf<ComboboxProps>()
            .toHaveProperty('placement')
            .toEqualTypeOf<
                | 'top'
                | 'top-start'
                | 'top-end'
                | 'right'
                | 'right-start'
                | 'right-end'
                | 'bottom'
                | 'bottom-start'
                | 'bottom-end'
                | 'left'
                | 'left-start'
                | 'left-end'
                | undefined
            >();
        expectTypeOf<ComboboxProps>().toHaveProperty('placeholder').toEqualTypeOf<string | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('helperText').toEqualTypeOf<string | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('contentLeft').toEqualTypeOf<ReactElement | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('textBefore').toEqualTypeOf<string | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('textAfter').toEqualTypeOf<string | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('variant').toEqualTypeOf<'normal' | 'tight' | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('zIndex').toEqualTypeOf<CSSProperties['zIndex'] | undefined>();
        expectTypeOf<ComboboxProps>()
            .toHaveProperty('listMaxHeight')
            .toEqualTypeOf<CSSProperties['height'] | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('listWidth').toEqualTypeOf<CSSProperties['width'] | undefined>();
        expectTypeOf<ComboboxProps>()
            .toHaveProperty('portal')
            .toEqualTypeOf<string | RefObject<HTMLElement> | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('closeAfterSelect').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<ComboboxProps>()
            .toHaveProperty('onChangeValue')
            .toEqualTypeOf<((value: string) => void) | undefined>();
        expectTypeOf<ComboboxProps>()
            .toHaveProperty('filterValue')
            .toEqualTypeOf<((value: string) => boolean) | undefined>();
        // TODO: Сузить тип для onScroll
        // expectTypeOf<ComboboxProps>()
        //     .toHaveProperty('onScroll')
        //     .toEqualTypeOf<((e: UIEvent<HTMLElement>) => void) | undefined>();
        expectTypeOf<ComboboxProps>()
            .toHaveProperty('onToggle')
            .toEqualTypeOf<((isOpen: boolean) => void) | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('beforeList').toEqualTypeOf<ReactNode | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('afterList').toEqualTypeOf<ReactNode | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('virtual').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('mode').toEqualTypeOf<'default' | 'radio' | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('emptyStateDescription').toEqualTypeOf<ReactNode | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('treeView').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('arrowPlacement').toEqualTypeOf<'left' | 'right' | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('listHeight').toEqualTypeOf<CSSProperties['height'] | undefined>();
        expectTypeOf<ComboboxProps>()
            .toHaveProperty('listOverflow')
            .toEqualTypeOf<CSSProperties['overflow'] | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('label').toEqualTypeOf<string | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('keepPlaceholder').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('readOnly').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('disabled').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('alwaysOpened').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('name').toEqualTypeOf<string | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('defaultValue').toEqualTypeOf<string | string[] | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('multiple').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('value').toEqualTypeOf<string | string[] | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('isTargetAmount').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('targetAmount').toEqualTypeOf<number | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('selectAllOptions').toEqualTypeOf<
            | {
                  checked?: boolean;
                  indeterminate?: boolean;
                  label?: string;
                  onClick?: () => void;
                  sticky?: boolean;
              }
            | undefined
        >();
        expectTypeOf<ComboboxProps>()
            .toHaveProperty('chipClickArea')
            .toEqualTypeOf<'full' | 'close-icon' | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('required').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('requiredPlacement').toEqualTypeOf<'left' | 'right' | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('optional').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('optionalText').toEqualTypeOf<string | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('hasRequiredIndicator').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('hintText').toEqualTypeOf<string | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('hintTrigger').toEqualTypeOf<'hover' | 'click' | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('hintTargetIcon').toEqualTypeOf<ReactNode | undefined>();
        // TODO: Почему свойства нет в sdds-insol?
        // expectTypeOf<ComboboxProps>()
        //     .toHaveProperty('hintTargetPlacement')
        //     .toEqualTypeOf<'inner' | 'outer' | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('hintHasArrow').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('hintOffset').toEqualTypeOf<[number, number] | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('hintWidth').toEqualTypeOf<string | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('hintContentLeft').toEqualTypeOf<ReactNode | undefined>();
        const items = [{ value: '', label: '', randomProp: '' }];
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [{ value: '' }] });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [{ label: '' }] });
        expectTypeOf<ComboboxProps>({ items: [{ value: '', label: '' }] });
        expectTypeOf<ComboboxProps>({ items });
        expectTypeOf<ComboboxProps>({ items: [{ value: '', label: '', disabled: true }] });
        expectTypeOf<ComboboxProps>({ items: [{ value: '', label: '', disabled: true }] });
        expectTypeOf<ComboboxProps>().toHaveProperty('items').toEqualTypeOf<ItemOption[]>();
        expectTypeOf<ComboboxProps>()
            .toHaveProperty('renderItem')
            .toEqualTypeOf<((item: ItemOption) => ReactNode) | undefined>();
        expectTypeOf<ComboboxProps>()
            .toHaveProperty('filter')
            .toEqualTypeOf<((item: ItemOption, textValue: string) => boolean) | undefined>();
        expectTypeOf<ComboboxProps>()
            .toHaveProperty('onChange')
            .toEqualTypeOf<
                | ((value: string[], item: ItemOption | null) => void)
                | ((value: string, item: ItemOption | null) => void)
                | ChangeEventHandler
                | undefined
            >();
        expectTypeOf<ComboboxProps>()
            .toHaveProperty('renderValue')
            .toEqualTypeOf<((item: ItemOption) => string) | undefined>();
    });

    it('Variations', () => {
        type View = NonNullable<ComboboxProps['view']>;
        expectTypeOf<View>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<View>();

        type Size = NonNullable<ComboboxProps['size']>;
        expectTypeOf<Size>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<Size>();

        type LabelPlacement = NonNullable<ComboboxProps['labelPlacement']>;
        expectTypeOf<LabelPlacement>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<LabelPlacement>();
        // TODO: Почему свойств hintView и hintSize нет в sdds-insol?
        // type HintView = NonNullable<ComboboxProps['hintView']>;
        // expectTypeOf<HintView>().toExtend<string>();
        // expectTypeOf<string>().not.toExtend<HintView>();
        //
        // type HintSize = NonNullable<ComboboxProps['hintSize']>;
        // expectTypeOf<HintSize>().toExtend<string>();
        // expectTypeOf<string>().not.toExtend<HintSize>();
    });

    it('HTMLInputElement', () => {
        expectTypeOf<ComboboxProps>().toHaveProperty('id').toEqualTypeOf<string | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('className').toEqualTypeOf<string | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('style').toEqualTypeOf<CSSProperties | undefined>();
        expectTypeOf<ComboboxProps>()
            .toHaveProperty('onFocus')
            .toEqualTypeOf<React.FocusEventHandler<HTMLInputElement> | undefined>();
        expectTypeOf<ComboboxProps>()
            .toHaveProperty('onBlur')
            .toEqualTypeOf<React.FocusEventHandler<HTMLInputElement> | undefined>();
        expectTypeOf<ComboboxProps>()
            .toHaveProperty('onKeyDown')
            .toEqualTypeOf<React.KeyboardEventHandler<HTMLInputElement> | undefined>();
        expectTypeOf<ComboboxProps>()
            .toHaveProperty('onKeyUp')
            .toEqualTypeOf<React.KeyboardEventHandler<HTMLInputElement> | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('placeholder').toEqualTypeOf<string | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('aria-label').toEqualTypeOf<string | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('role').toEqualTypeOf<AriaRole | undefined>();
    });
});

describe('Unions', () => {
    it('ViewStateProps', () => {
        expectTypeOf<ComboboxProps>({ items: [], readOnly: true, disabled: true, alwaysOpened: false });
        expectTypeOf<ComboboxProps>({ items: [], readOnly: false, disabled: false, alwaysOpened: true });
        // TODO: Неправильная работа юниона ViewStateProps. Должна быть ошибка.
        expectTypeOf<ComboboxProps>({ items: [], readOnly: false, disabled: false, alwaysOpened: false });
        // TODO: Неправильная работа юниона ViewStateProps. Должна быть ошибка.
        expectTypeOf<ComboboxProps>({ items: [], readOnly: true, disabled: true, alwaysOpened: true });
    });

    it('IsMultiselect', () => {
        expectTypeOf<ComboboxProps>({ items: [], value: '' });
        expectTypeOf<ComboboxProps>({ items: [], multiple: true, value: [] });
        expectTypeOf<ComboboxProps>({ items: [], multiple: true, value: [''] });
        expectTypeOf<ComboboxProps>({ items: [], multiple: true, onChange: (value: string[]) => {} });
        expectTypeOf<ComboboxProps>({ items: [], multiple: false, onChange: (value: string) => {} });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [], multiple: false, value: [] });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [], multiple: false, onChange: (value: string[]) => {} });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [], multiple: true, value: '' });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [], multiple: true, onChange: (value: string) => {} });
        expectTypeOf<ComboboxProps>({ items: [], isTargetAmount: false });
        expectTypeOf<ComboboxProps>({ items: [], multiple: true, isTargetAmount: true });
        expectTypeOf<ComboboxProps>({ items: [], multiple: true, targetAmount: 1 });
        expectTypeOf<ComboboxProps>({ items: [], multiple: true, renderValue: () => '' });
        expectTypeOf<ComboboxProps>({ items: [], multiple: true, selectAllOptions: { checked: true } });
        expectTypeOf<ComboboxProps>({ items: [], multiple: true, chipClickArea: 'full' });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [], isTargetAmount: true });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [], targetAmount: 1 });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [], renderValue: () => '' });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [], selectAllOptions: { checked: true } });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [], chipClickArea: 'full' });
        expectTypeOf<ComboboxProps>({ items: [], name: '', defaultValue: '' });
        expectTypeOf<ComboboxProps>({ items: [], name: '', multiple: true, defaultValue: [''] });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [], name: '', value: '' });
        expectTypeOf<ComboboxProps>({ items: [], name: '', multiple: true, isTargetAmount: true });
        expectTypeOf<ComboboxProps>({ items: [], name: '', multiple: true, targetAmount: 1 });
        expectTypeOf<ComboboxProps>({ items: [], name: '', multiple: true, renderValue: () => '' });
        expectTypeOf<ComboboxProps>({ items: [], name: '', multiple: true, selectAllOptions: { checked: true } });
        expectTypeOf<ComboboxProps>({ items: [], name: '', multiple: true, chipClickArea: 'full' });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [], name: '', isTargetAmount: true });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [], name: '', targetAmount: 1 });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [], name: '', renderValue: () => '' });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [], name: '', selectAllOptions: { checked: true } });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [], name: '', chipClickArea: 'full' });
    });
});

describe('Generics', () => {
    it('ItemOption', () => {
        const items = [{ value: '', label: '', randomProp: '', boolProp: true }];

        void (<Combobox items={items} />);
        void (
            <Combobox
                multiple
                items={items}
                renderItem={(item) => {
                    return item.randomProp;
                }}
                filter={(item) => item.boolProp}
                onChange={(value: string[], item) => {
                    return item && item.randomProp;
                }}
                renderValue={(item) => {
                    return item.randomProp;
                }}
            />
        );
    });
});

describe('Examples', () => {
    const items = [
        {
            value: 'north_america',
            label: 'Северная Америка',
        },
        {
            value: 'south_america',
            label: 'Южная Америка',
            items: [
                {
                    value: 'brazil',
                    label: 'Бразилия',
                    disabled: true,
                },
                {
                    value: 'argentina',
                    label: 'Аргентина',
                },
            ],
        },
    ];

    it('Single', () => {
        () => {
            const [value, setValue] = useState<string>('');

            return (
                <Combobox
                    items={items}
                    value={value}
                    onChange={setValue}
                    placeholder="Placeholder"
                    label="Label"
                    helperText="Helper text"
                />
            );
        };
    });

    it('Multiple', () => {
        () => {
            const [value, setValue] = useState<string[]>([]);

            return (
                <Combobox
                    multiple
                    items={items}
                    value={value}
                    onChange={setValue}
                    placeholder="Placeholder"
                    label="Label"
                    helperText="Helper text"
                />
            );
        };
    });

    it('Predefined', () => {
        () => {
            const [multipleValue, setMultipleValue] = useState<string[]>(['brazil', 'north_america']);

            return (
                <Combobox
                    multiple
                    items={items}
                    value={multipleValue}
                    onChange={setMultipleValue}
                    placeholder="Placeholder"
                    label="Label"
                    helperText="Helper text"
                />
            );
        };
    });

    it('Portal', () => {
        () => {
            const [value, setValue] = useState<string>('');

            const ref = useRef(null);

            return (
                <Combobox
                    items={items}
                    value={value}
                    onChange={setValue}
                    placeholder="Placeholder"
                    label="Label"
                    helperText="Helper text"
                    portal={ref}
                    listWidth="300px"
                />
            );
        };
    });

    it('Uncontrolled', () => {
        () => {
            return <Combobox items={items} placeholder="Placeholder" label="Label" helperText="Helper text" />;
        };
    });

    it('Uncontrolled', () => {
        () => {
            const items = Array(5000)
                .fill(1)
                .map((_, i) => ({ value: i.toString(), label: i.toString() }));

            return (
                <Combobox
                    items={items}
                    virtual
                    listMaxHeight="200px"
                    placeholder="Placeholder"
                    label="Label"
                    helperText="Helper text"
                />
            );
        };
    });

    it('Disabled elements', () => {
        () => {
            const [value, setValue] = useState(['brazil']);

            return (
                <Combobox
                    multiple
                    label="Label"
                    placeholder="Placeholder"
                    items={items}
                    value={value}
                    onChange={setValue}
                    isTargetAmount
                />
            );
        };
    });

    it('Treeview', () => {
        () => {
            return (
                <Combobox
                    multiple
                    treeView
                    label="Введите 'Токио'"
                    placeholder="Placeholder"
                    items={items}
                    listMaxHeight="300px"
                />
            );
        };
    });

    it('Native form', () => {
        () => {
            return (
                <form>
                    <Combobox label="Combobox" name="combobox" defaultValue="brazil" items={items} />
                    <Combobox label="Combobox" name="comboboxMulti" defaultValue={['brazil']} items={items} multiple />
                </form>
            );
        };
    });
});
