import type {
    AriaRole,
    ChangeEventHandler,
    ComponentProps,
    CSSProperties,
    ReactElement,
    ReactNode,
    RefObject,
} from 'react';
import React, { useRef, useState } from 'react';
import { describe, it } from 'node:test';
import { expectTypeOf } from 'expect-type';
import { Controller, useForm } from 'react-hook-form';
import { Cell, Combobox, ComboboxItemOption as ItemOption } from '@salutejs/plasma-b2c';

type ComboboxProps = ComponentProps<typeof Combobox>;

describe('Basics', () => {
    it('Common', () => {
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({});
        expectTypeOf<ComboboxProps>({ items: [] });
        expectTypeOf<ComboboxProps>().toHaveProperty('items').toEqualTypeOf<ItemOption[]>();

        expectTypeOf<ComboboxProps>().toHaveProperty('treeView').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('arrowPlacement').toEqualTypeOf<'left' | 'right' | undefined>();
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
        expectTypeOf<ComboboxProps>().toHaveProperty('variant').toEqualTypeOf<'normal' | 'tight' | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('zIndex').toEqualTypeOf<CSSProperties['zIndex'] | undefined>();
        expectTypeOf<ComboboxProps>()
            .toHaveProperty('listMaxHeight')
            .toEqualTypeOf<CSSProperties['height'] | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('listWidth').toEqualTypeOf<CSSProperties['width'] | undefined>();
        expectTypeOf<ComboboxProps>()
            .toHaveProperty('portal')
            .toEqualTypeOf<string | RefObject<HTMLElement | null> | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('closeAfterSelect').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('virtual').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<ComboboxProps>()
            .toHaveProperty('onScroll')
            .toEqualTypeOf<((e: React.UIEvent<HTMLElement>) => void) | undefined>();
        expectTypeOf<ComboboxProps>()
            .toHaveProperty('onToggle')
            .toEqualTypeOf<((isOpen: boolean) => void) | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('mode').toEqualTypeOf<'default' | 'radio' | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('emptyStateDescription').toEqualTypeOf<ReactNode | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('flip').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('shift').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('singleLine').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('readOnly').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('disabled').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('alwaysOpened').toEqualTypeOf<boolean | undefined>();

        expectTypeOf<ComboboxProps>().toHaveProperty('placeholder').toEqualTypeOf<string | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('helperText').toEqualTypeOf<string | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('contentLeft').toEqualTypeOf<ReactElement | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('contentRight').toEqualTypeOf<ReactElement | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('textBefore').toEqualTypeOf<string | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('textAfter').toEqualTypeOf<string | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('beforeList').toEqualTypeOf<ReactNode | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('afterList').toEqualTypeOf<ReactNode | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('label').toEqualTypeOf<string | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('keepPlaceholder').toEqualTypeOf<boolean | undefined>();

        expectTypeOf<ComboboxProps>()
            .toHaveProperty('renderItem')
            .toEqualTypeOf<((item: ItemOption) => ReactNode) | undefined>();
        expectTypeOf<ComboboxProps>()
            .toHaveProperty('renderSelectionIcon')
            .toEqualTypeOf<((selected: boolean | 'indeterminate') => ReactNode) | undefined>();
        expectTypeOf<ComboboxProps>()
            .toHaveProperty('filter')
            .toEqualTypeOf<((item: ItemOption, textValue: string) => boolean) | undefined>();
        expectTypeOf<ComboboxProps>()
            .toHaveProperty('onChangeValue')
            .toEqualTypeOf<((value: string) => void) | undefined>();
        expectTypeOf<ComboboxProps>()
            .toHaveProperty('filterValue')
            .toEqualTypeOf<((value: string) => boolean) | undefined>();

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

        expectTypeOf<ComboboxProps>().toHaveProperty('multiple').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('value').toEqualTypeOf<string | string[] | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('defaultValue').toEqualTypeOf<string | string[] | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('name').toEqualTypeOf<string | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('isTargetAmount').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('targetAmount').toEqualTypeOf<number | undefined>();
        expectTypeOf<ComboboxProps>()
            .toHaveProperty('renderValue')
            .toEqualTypeOf<((item: ItemOption) => string) | undefined>();
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
        expectTypeOf<ComboboxProps>()
            .toHaveProperty('onChange')
            .toEqualTypeOf<
                | ((value: string, item: ItemOption | null) => void)
                | ((value: string[], item: ItemOption | null) => void)
                | ChangeEventHandler<HTMLSelectElement>
                | undefined
            >();
    });

    it('ItemOption', () => {
        const items = [{ value: '', label: '', custom: '' }];

        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [{ value: '' }] });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [{ label: '' }] });
        expectTypeOf<ComboboxProps>({ items: [{ value: '', label: '' }] });
        expectTypeOf<ComboboxProps>({ items });
        expectTypeOf<ComboboxProps>({
            items: [
                {
                    value: '',
                    label: '',
                    placement: 'right-start',
                    disabled: true,
                    contentLeft: null,
                    contentRight: null,
                    className: 'item',
                    listMaxHeight: '10rem',
                    items: [{ value: 'child', label: 'Child' }],
                },
            ],
        });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [{ value: '', label: '', placement: 'auto' }] });
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
        expectTypeOf<ComboboxProps>().toHaveProperty('aria-label').toEqualTypeOf<string | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('role').toEqualTypeOf<AriaRole | undefined>();
        expectTypeOf<ComboboxProps>().toHaveProperty('autoComplete').toEqualTypeOf<string | undefined>();
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

    it('IsMultiple', () => {
        expectTypeOf<ComboboxProps>({ items: [], value: '' });
        expectTypeOf<ComboboxProps>({ items: [], onChange: (value: string) => value });
        expectTypeOf<ComboboxProps>({ items: [], multiple: false, defaultValue: '' });
        expectTypeOf<ComboboxProps>({ items: [], multiple: true, value: [] });
        expectTypeOf<ComboboxProps>({ items: [], multiple: true, value: ['value'] });
        expectTypeOf<ComboboxProps>({ items: [], multiple: true, defaultValue: ['value'] });
        expectTypeOf<ComboboxProps>({ items: [], multiple: true, onChange: (value: string[]) => value });
        expectTypeOf<ComboboxProps>({ items: [], isTargetAmount: false });
        expectTypeOf<ComboboxProps>({ items: [], multiple: true, isTargetAmount: true });
        expectTypeOf<ComboboxProps>({ items: [], multiple: true, targetAmount: 1 });
        expectTypeOf<ComboboxProps>({ items: [], multiple: true, renderValue: () => '' });
        expectTypeOf<ComboboxProps>({ items: [], multiple: true, selectAllOptions: { label: 'All' } });
        expectTypeOf<ComboboxProps>({ items: [], multiple: true, chipClickArea: 'full' });
        expectTypeOf<ComboboxProps>({ items: [], name: 'country' });
        expectTypeOf<ComboboxProps>({ items: [], name: 'country', defaultValue: '', multiple: false });
        expectTypeOf<ComboboxProps>({ items: [], name: 'country', defaultValue: ['value'], multiple: true });
        expectTypeOf<ComboboxProps>({
            items: [],
            name: 'country',
            onChange: (e: React.ChangeEvent<HTMLSelectElement>) => e.target.value,
        });
        expectTypeOf<ComboboxProps>({
            items: [],
            name: 'country',
            value: '',
            onChange: (value: string) => value,
        });
        expectTypeOf<ComboboxProps>({
            items: [],
            name: 'country',
            multiple: true,
            value: ['value'],
            onChange: (value: string[]) => value,
        });

        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [], multiple: false, value: [] });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [], multiple: true, value: '' });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [], multiple: false, defaultValue: [] });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [], multiple: true, defaultValue: '' });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [], multiple: false, onChange: (value: string[]) => value });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [], multiple: true, onChange: (value: string) => value });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [], isTargetAmount: true });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [], targetAmount: 1 });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [], renderValue: () => '' });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [], selectAllOptions: { label: 'All' } });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [], chipClickArea: 'full' });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({
            items: [],
            name: 'country',
            value: '',
            onChange: (e: React.ChangeEvent<HTMLSelectElement>) => e.target.value,
        });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({
            items: [],
            name: 'country',
            multiple: true,
            value: ['value'],
            onChange: (e: React.ChangeEvent<HTMLSelectElement>) => e.target.value,
        });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [], name: 'country', isTargetAmount: true });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [], name: 'country', targetAmount: 1 });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [], name: 'country', renderValue: () => '' });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [], name: 'country', selectAllOptions: { label: 'All' } });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [], name: 'country', chipClickArea: 'full' });
    });

    it('HintProps', () => {
        expectTypeOf<ComboboxProps>({ items: [], hintText: 'hint' });
        expectTypeOf<ComboboxProps>({ items: [], hintText: 'hint', hintTrigger: 'hover' });
        expectTypeOf<ComboboxProps>({ items: [], hintText: 'hint', hintHasArrow: true });
        expectTypeOf<ComboboxProps>({ items: [], hintText: 'hint', hintOffset: [0, 8] });
        expectTypeOf<ComboboxProps>({ items: [], hintText: 'hint', hintPlacement: 'top' });

        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [], hintTrigger: 'hover' });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [], hintHasArrow: true });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [], hintOffset: [0, 8] });
        // @ts-expect-error
        expectTypeOf<ComboboxProps>({ items: [], hintPlacement: 'top' });
    });
});

describe('Generics', () => {
    it('ItemOption', () => {
        const items = [{ value: '1', label: 'One', customLabel: 'Custom', isAvailable: true }];

        void (
            <Combobox
                items={items}
                onChange={(_, item) => item?.customLabel}
                renderItem={(item) => item?.customLabel}
                filter={(item) => item.isAvailable}
            />
        );

        void (
            <Combobox
                multiple
                items={items}
                onChange={(_, item) => item?.customLabel}
                renderItem={(item) => item?.customLabel}
                renderValue={(item) => item?.customLabel}
                filter={(item) => item.isAvailable}
            />
        );

        void (
            <Combobox
                items={items}
                // @ts-expect-error
                renderItem={(item) => item?.nonExistedProp}
                // @ts-expect-error
                filter={(item) => item.nonExistedProp}
                // @ts-expect-error
                onChange={(_, item) => item?.nonExistedProp}
            />
        );

        void (
            <Combobox
                multiple
                items={items}
                // @ts-expect-error
                renderItem={(item) => item?.nonExistedProp}
                // @ts-expect-error
                renderValue={(item) => item?.nonExistedProp}
                // @ts-expect-error
                filter={(item) => item.nonExistedProp}
                // @ts-expect-error
                onChange={(_, item) => item?.nonExistedProp}
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
            const [value, setValue] = useState('');

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

    it('RenderValue', () => {
        () => {
            const [value, setValue] = useState<string[]>(['brazil']);
            const renderValue = (item: ItemOption) => `${item.value} - ${item.label}`;

            return (
                <Combobox
                    multiple
                    items={items}
                    label="Label"
                    placeholder="Placeholder"
                    value={value}
                    onChange={setValue}
                    renderValue={renderValue}
                />
            );
        };
    });

    it('RenderItem', () => {
        () => {
            const [value, setValue] = useState<string[]>([]);
            const renderItem = ({ label }: ItemOption) => (
                <Cell
                    view="default"
                    title={label}
                    label="Top left"
                    contentRight={<Cell view="default" title="Bottom right" label="Top right" />}
                />
            );

            return (
                <Combobox
                    multiple
                    placeholder="Placeholder"
                    items={items}
                    value={value}
                    onChange={setValue}
                    renderItem={renderItem}
                />
            );
        };
    });

    it('RenderSelectionIcon', () => {
        () => {
            const [value, setValue] = useState('brazil');

            const renderSelectionIcon = (selected: boolean | 'indeterminate') => {
                if (selected === true) {
                    return <div />;
                }

                if (selected === 'indeterminate') {
                    return <span />;
                }

                return null;
            };

            return (
                <Combobox items={items} value={value} onChange={setValue} renderSelectionIcon={renderSelectionIcon} />
            );
        };
    });

    it('Portal', () => {
        () => {
            const [value, setValue] = useState('');
            const ref = useRef<HTMLDivElement>(null);

            return (
                <div ref={ref}>
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
                </div>
            );
        };
    });

    it('Uncontrolled', () => {
        () => {
            return (
                <>
                    <Combobox items={items} placeholder="Placeholder" label="Label" helperText="Helper text" />

                    <Combobox
                        items={items}
                        defaultValue="north_america"
                        label="Label"
                        placeholder="Placeholder"
                        onChange={(value, item) => item?.value || value}
                    />

                    <Combobox
                        multiple
                        items={items}
                        defaultValue={['north_america']}
                        label="Label"
                        placeholder="Placeholder"
                        onChange={(value, item) => item?.value || value.join(',')}
                    />
                </>
            );
        };
    });

    it('react-hook-form register', () => {
        () => {
            const { register: registerSingle } = useForm<{ region: string }>({
                defaultValues: {
                    region: 'north_america',
                },
            });
            const { register: registerMultiple } = useForm<{ region: string[] }>({
                defaultValues: {
                    region: ['north_america'],
                },
            });

            return (
                <>
                    <Combobox items={items} {...registerSingle('region')} />

                    <Combobox multiple items={items} {...registerMultiple('region')} />
                </>
            );
        };
    });

    it('react-hook-form Controller', () => {
        () => {
            const { control: singleControl } = useForm<{ region: string }>({
                defaultValues: {
                    region: 'north_america',
                },
            });
            const { control: multipleControl } = useForm<{ region: string[] }>({
                defaultValues: {
                    region: ['north_america'],
                },
            });

            return (
                <>
                    <Controller
                        name="region"
                        control={singleControl}
                        render={({ field }) => <Combobox items={items} {...field} />}
                    />

                    <Controller
                        name="region"
                        control={multipleControl}
                        render={({ field }) => <Combobox multiple items={items} {...field} />}
                    />
                </>
            );
        };
    });

    it('Virtual', () => {
        () => {
            const virtualItems = Array(5000)
                .fill(1)
                .map((_, i) => ({ value: i.toString(), label: i.toString() }));

            return (
                <Combobox
                    items={virtualItems}
                    virtual
                    listMaxHeight="200px"
                    placeholder="Placeholder"
                    label="Label"
                    helperText="Helper text"
                />
            );
        };
    });

    it('Infinite loading', () => {
        () => {
            const [infiniteItems, setInfiniteItems] = useState(items);
            const [isInfiniteLoading, setIsInfiniteLoading] = useState(false);

            const handleScroll = async (e: React.UIEvent<HTMLElement>) => {
                if (isInfiniteLoading) return;

                if (e.currentTarget.scrollTop + e.currentTarget.offsetHeight + 10 > e.currentTarget.scrollHeight) {
                    setIsInfiniteLoading(true);
                    setInfiniteItems((prev) => [...prev, ...items]);
                    setIsInfiniteLoading(false);
                }
            };

            return (
                <Combobox
                    items={infiniteItems}
                    listMaxHeight="200px"
                    placeholder="Placeholder"
                    label="Label"
                    helperText="Helper text"
                    onScroll={handleScroll}
                    afterList={isInfiniteLoading ? <center>Загружаю...</center> : undefined}
                />
            );
        };
    });

    it('SelectAll', () => {
        () => {
            const [value, setValue] = useState<string[]>([]);

            return (
                <Combobox
                    multiple
                    items={items}
                    value={value}
                    onChange={setValue}
                    label="Multiple"
                    placeholder="Placeholder"
                    selectAllOptions={{
                        checked: value.length === items.length,
                        indeterminate: value.length > 0 && value.length < items.length,
                        label: 'Выбрать все',
                        sticky: true,
                    }}
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
