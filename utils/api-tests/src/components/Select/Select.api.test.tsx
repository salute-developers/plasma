import * as React from 'react';
import type {
    AriaRole,
    ChangeEventHandler,
    ComponentProps,
    CSSProperties,
    ReactElement,
    ReactNode,
    RefObject,
} from 'react';
import { useRef, useState } from 'react';
import { describe, it } from 'node:test';
import { expectTypeOf } from 'expect-type';
import { Controller, useForm } from 'react-hook-form';
import { Button, Cell, Select } from '@salutejs/plasma-b2c';

type SelectProps = ComponentProps<typeof Select>;

type ItemOption = {
    value: string;
    label: string;
    placement?: 'top' | 'bottom' | 'right' | 'left' | 'auto' | Array<'top' | 'bottom' | 'right' | 'left'>;
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
        expectTypeOf<SelectProps>({});
        expectTypeOf<SelectProps>({ items: [] });
        expectTypeOf<SelectProps>().toHaveProperty('items').toEqualTypeOf<ItemOption[]>();
        expectTypeOf<SelectProps>()
            .toHaveProperty('placement')
            .toEqualTypeOf<
                'top' | 'bottom' | 'right' | 'left' | 'auto' | Array<'top' | 'bottom' | 'right' | 'left'> | undefined
            >();
        expectTypeOf<SelectProps>().toHaveProperty('treeView').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('arrowPlacement').toEqualTypeOf<'left' | 'right' | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('disabled').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('readOnly').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('variant').toEqualTypeOf<'normal' | 'tight' | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('zIndex').toEqualTypeOf<CSSProperties['zIndex'] | undefined>();
        expectTypeOf<SelectProps>()
            .toHaveProperty('listMaxHeight')
            .toEqualTypeOf<CSSProperties['height'] | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('listWidth').toEqualTypeOf<CSSProperties['width'] | undefined>();
        expectTypeOf<SelectProps>()
            .toHaveProperty('portal')
            .toEqualTypeOf<string | RefObject<HTMLElement | null> | undefined>();
        expectTypeOf<SelectProps>()
            .toHaveProperty('renderValue')
            .toEqualTypeOf<((item: ItemOption) => string) | undefined>();
        expectTypeOf<SelectProps>()
            .toHaveProperty('renderItem')
            .toEqualTypeOf<((item: ItemOption) => ReactNode) | undefined>();
        expectTypeOf<SelectProps>()
            .toHaveProperty('renderSelectionIcon')
            .toEqualTypeOf<((selected: boolean | 'indeterminate') => ReactNode) | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('closeAfterSelect').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('beforeList').toEqualTypeOf<ReactNode | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('afterList').toEqualTypeOf<ReactNode | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('virtual').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<SelectProps>()
            .toHaveProperty('onScroll')
            .toEqualTypeOf<((e: React.UIEvent<HTMLElement>) => void) | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('onToggle').toEqualTypeOf<((isOpen: boolean) => void) | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('mode').toEqualTypeOf<'default' | 'radio' | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('flip').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('shift').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('singleLine').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('emptyStateDescription').toEqualTypeOf<ReactNode | undefined>();

        expectTypeOf<SelectProps>()
            .toHaveProperty('target')
            .toEqualTypeOf<'button-like' | 'textfield-like' | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('contentLeft').toEqualTypeOf<ReactNode | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('contentRight').toEqualTypeOf<ReactElement | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('placeholder').toEqualTypeOf<string | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('helperText').toEqualTypeOf<string | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('chipType').toEqualTypeOf<'default' | 'text' | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('chipClickArea').toEqualTypeOf<'full' | 'close-icon' | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('label').toEqualTypeOf<string | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('keepPlaceholder').toEqualTypeOf<boolean | undefined>();

        expectTypeOf<SelectProps>().toHaveProperty('required').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('requiredPlacement').toEqualTypeOf<'left' | 'right' | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('optional').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('optionalText').toEqualTypeOf<string | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('hasRequiredIndicator').toEqualTypeOf<boolean | undefined>();

        expectTypeOf<SelectProps>().toHaveProperty('multiselect').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('value').toEqualTypeOf<string | string[] | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('defaultValue').toEqualTypeOf<string | string[] | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('name').toEqualTypeOf<string | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('isTargetAmount').toEqualTypeOf<true | false | undefined>();
        expectTypeOf<SelectProps>()
            .toHaveProperty('renderTarget')
            .toEqualTypeOf<
                | ((value: ItemOption, opened?: boolean) => ReactNode)
                | ((value: ItemOption[], opened?: boolean) => ReactNode)
                | undefined
            >();
        expectTypeOf<SelectProps>().toHaveProperty('selectAllOptions').toEqualTypeOf<
            | {
                  checked?: boolean;
                  indeterminate?: boolean;
                  label?: string;
                  onClick?: () => void;
                  sticky?: boolean;
              }
            | undefined
        >();
        expectTypeOf<SelectProps>()
            .toHaveProperty('onChange')
            .toEqualTypeOf<
                | ((value: string, item: ItemOption | null) => void)
                | ((value: string[], item: ItemOption | null) => void)
                | ChangeEventHandler<HTMLSelectElement>
                | undefined
            >();
    });

    it('Variations', () => {
        type View = NonNullable<SelectProps['view']>;
        expectTypeOf<View>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<View>();

        type Size = NonNullable<SelectProps['size']>;
        expectTypeOf<Size>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<Size>();

        type LabelPlacement = NonNullable<SelectProps['labelPlacement']>;
        expectTypeOf<LabelPlacement>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<LabelPlacement>();

        type ChipView = NonNullable<SelectProps['chipView']>;
        expectTypeOf<ChipView>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<ChipView>();

        type HintView = NonNullable<SelectProps['hintView']>;
        expectTypeOf<HintView>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<HintView>();

        type HintSize = NonNullable<SelectProps['hintSize']>;
        expectTypeOf<HintSize>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<HintSize>();
    });

    it('HTMLButtonElement', () => {
        expectTypeOf<SelectProps>().toHaveProperty('id').toEqualTypeOf<string | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('className').toEqualTypeOf<string | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('style').toEqualTypeOf<CSSProperties | undefined>();
        expectTypeOf<SelectProps>()
            .toHaveProperty('onClick')
            .toEqualTypeOf<React.MouseEventHandler<HTMLButtonElement> | undefined>();
        expectTypeOf<SelectProps>()
            .toHaveProperty('onMouseEnter')
            .toEqualTypeOf<React.MouseEventHandler<HTMLButtonElement> | undefined>();
        expectTypeOf<SelectProps>()
            .toHaveProperty('onMouseLeave')
            .toEqualTypeOf<React.MouseEventHandler<HTMLButtonElement> | undefined>();
        expectTypeOf<SelectProps>()
            .toHaveProperty('onFocus')
            .toEqualTypeOf<React.FocusEventHandler<HTMLButtonElement> | undefined>();
        expectTypeOf<SelectProps>()
            .toHaveProperty('onBlur')
            .toEqualTypeOf<React.FocusEventHandler<HTMLButtonElement> | undefined>();
        expectTypeOf<SelectProps>()
            .toHaveProperty('onKeyDown')
            .toEqualTypeOf<React.KeyboardEventHandler<HTMLButtonElement> | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('aria-label').toEqualTypeOf<string | undefined>();
        expectTypeOf<SelectProps>().toHaveProperty('role').toEqualTypeOf<AriaRole | undefined>();
    });
});

describe('Unions', () => {
    it('Target', () => {
        expectTypeOf<SelectProps>({ items: [], target: 'textfield-like', contentLeft: null, helperText: 'helper' });
        expectTypeOf<SelectProps>({ items: [], target: 'button-like', label: 'Label', placeholder: 'Choose value' });

        // @ts-expect-error
        expectTypeOf<SelectProps>({ items: [], target: 'button-like', contentLeft: null });
        // @ts-expect-error
        expectTypeOf<SelectProps>({ items: [], target: 'button-like', contentRight: <div /> });
        // @ts-expect-error
        expectTypeOf<SelectProps>({ items: [], target: 'button-like', helperText: 'helper' });
        // @ts-expect-error
        expectTypeOf<SelectProps>({ items: [], target: 'button-like', required: true });
        // @ts-expect-error
        expectTypeOf<SelectProps>({ items: [], target: 'button-like', hintText: 'hint' });
    });

    it('IsMultiselect', () => {
        expectTypeOf<SelectProps>({ items: [], value: '' });
        expectTypeOf<SelectProps>({ items: [], onChange: (value: string) => value });
        expectTypeOf<SelectProps>({ items: [], multiselect: true, value: [] });
        expectTypeOf<SelectProps>({ items: [], multiselect: true, value: ['value'] });
        expectTypeOf<SelectProps>({ items: [], multiselect: true, isTargetAmount: true });
        expectTypeOf<SelectProps>({ items: [], multiselect: true, onChange: (value: string[]) => value });
        expectTypeOf<SelectProps>({ items: [], multiselect: true, selectAllOptions: { label: 'All' } });
        expectTypeOf<SelectProps>({ items: [], name: 'country' });
        expectTypeOf<SelectProps>({ items: [], name: 'country', defaultValue: '', multiselect: false });
        expectTypeOf<SelectProps>({ items: [], name: 'country', defaultValue: ['value'], multiselect: true });
        expectTypeOf<SelectProps>({
            items: [],
            name: 'country',
            onChange: (e: React.ChangeEvent<HTMLSelectElement>) => e.target.value,
        });
        expectTypeOf<SelectProps>({
            items: [],
            name: 'country',
            value: '',
            onChange: (value: string) => value,
        });
        expectTypeOf<SelectProps>({
            items: [],
            name: 'country',
            multiselect: true,
            value: ['value'],
            onChange: (value: string[]) => value,
        });

        // @ts-expect-error
        expectTypeOf<SelectProps>({ items: [], multiselect: false, value: [] });
        // @ts-expect-error
        expectTypeOf<SelectProps>({ items: [], multiselect: true, value: '' });
        // @ts-expect-error
        expectTypeOf<SelectProps>({ items: [], multiselect: false, onChange: (value: string[]) => value });
        // @ts-expect-error
        expectTypeOf<SelectProps>({ items: [], multiselect: true, onChange: (value: string) => value });
        // @ts-expect-error
        expectTypeOf<SelectProps>({ items: [], isTargetAmount: true });
        // @ts-expect-error
        expectTypeOf<SelectProps>({ items: [], selectAllOptions: { label: 'All' } });
        // @ts-expect-error
        expectTypeOf<SelectProps>({
            items: [],
            name: 'country',
            value: '',
            onChange: (e: React.ChangeEvent<HTMLSelectElement>) => e.target.value,
        });
        // @ts-expect-error
        expectTypeOf<SelectProps>({
            items: [],
            name: 'country',
            multiselect: true,
            value: ['value'],
            onChange: (e: React.ChangeEvent<HTMLSelectElement>) => e.target.value,
        });
    });

    it('HintProps', () => {
        expectTypeOf<SelectProps>({ items: [], hintText: 'hint' });
        expectTypeOf<SelectProps>({ items: [], hintText: 'hint', hintTrigger: 'hover' });
        expectTypeOf<SelectProps>({ items: [], hintText: 'hint', hintHasArrow: true });
        expectTypeOf<SelectProps>({ items: [], hintText: 'hint', hintOffset: [0, 8] });

        // @ts-expect-error
        expectTypeOf<SelectProps>({ items: [], hintTrigger: 'hover' });
        // @ts-expect-error
        expectTypeOf<SelectProps>({ items: [], hintHasArrow: true });
        // @ts-expect-error
        expectTypeOf<SelectProps>({ items: [], hintOffset: [0, 8] });
    });
});

describe('Generics', () => {
    it('ItemOption', () => {
        const items = [{ value: '1', label: 'One', customLabel: 'Custom', isAvailable: true }];

        void (
            <Select
                items={items}
                onChange={(_, item) => item?.customLabel}
                renderItem={(item) => item?.customLabel}
                renderValue={(item) => item?.customLabel}
            />
        );

        void (
            <Select
                multiselect
                items={items}
                onChange={(_, item) => item?.customLabel}
                renderItem={(item) => item?.customLabel}
                renderValue={(item) => item?.customLabel}
            />
        );

        void (
            <Select
                items={items}
                // @ts-expect-error
                renderItem={(item) => item?.nonExistedProp}
                // @ts-expect-error
                renderValue={(item) => item?.nonExistedProp}
                // @ts-expect-error
                onChange={(_, item) => item?.nonExistedProp}
            />
        );

        void (
            <Select
                multiselect
                items={items}
                // @ts-expect-error
                renderItem={(item) => item?.nonExistedProp}
                // @ts-expect-error
                renderValue={(item) => item?.nonExistedProp}
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
    ];

    it('Textfield', () => {
        () => {
            const [singleValue, setSingleValue] = useState('');
            const [multipleValue, setMultipleValue] = useState<string[]>([]);

            return (
                <>
                    <Select
                        items={items}
                        value={singleValue}
                        onChange={setSingleValue}
                        label="Single"
                        placeholder="Placeholder"
                        helperText="Helper text"
                    />

                    <Select
                        multiselect
                        items={items}
                        value={multipleValue}
                        onChange={setMultipleValue}
                        label="Multiselect"
                        placeholder="Placeholder"
                        helperText="Helper text"
                    />
                </>
            );
        };
    });

    it('Button-like', () => {
        () => {
            const [singleValue, setSingleValue] = useState('');
            const [multipleValue, setMultipleValue] = useState<string[]>([]);

            return (
                <>
                    <Select
                        items={items}
                        label="Single"
                        target="button-like"
                        value={singleValue}
                        onChange={setSingleValue}
                    />

                    <Select
                        multiselect
                        items={items}
                        label="Multiple"
                        target="button-like"
                        value={multipleValue}
                        onChange={setMultipleValue}
                    />
                </>
            );
        };
    });

    it('Predefined', () => {
        () => {
            const [multipleValue, setMultipleValue] = useState<string[]>(['brazil', 'north_america']);

            return (
                <>
                    <Button onClick={() => setMultipleValue([])}>Очистить</Button>

                    <Select
                        multiselect
                        items={items}
                        placeholder="Placeholder"
                        value={multipleValue}
                        onChange={setMultipleValue}
                    />
                </>
            );
        };
    });

    it('RenderValue', () => {
        () => {
            const [singleValue, setSingleValue] = useState('');
            const renderValue = (item: ItemOption) => `${item.value} - ${item.label}`;

            return (
                <Select
                    items={items}
                    label="Label"
                    placeholder="Placeholder"
                    value={singleValue}
                    onChange={setSingleValue}
                    renderValue={renderValue}
                />
            );
        };
    });

    it('RenderItem', () => {
        () => {
            const [multipleValue, setMultipleValue] = useState<string[]>([]);
            const renderItem = ({ label }: ItemOption) => (
                <Cell
                    view="default"
                    title={label}
                    label="Top left"
                    contentRight={<Cell view="default" title="Bottom right" label="Top right" />}
                />
            );

            return (
                <Select
                    placeholder="Placeholder"
                    items={items}
                    value={multipleValue}
                    onChange={setMultipleValue}
                    multiselect
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

            return <Select items={items} value={value} onChange={setValue} renderSelectionIcon={renderSelectionIcon} />;
        };
    });

    it('Portal', () => {
        () => {
            const [value, setValue] = useState('');
            const ref = useRef<HTMLDivElement>(null);

            return (
                <div ref={ref}>
                    <Select
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                        value={value}
                        onChange={setValue}
                        portal={ref}
                    />
                </div>
            );
        };
    });

    it('Uncontrolled', () => {
        () => {
            return (
                <>
                    <Select items={items} label="Label" placeholder="Placeholder" />

                    <Select
                        items={items}
                        defaultValue="north_america"
                        label="Label"
                        placeholder="Placeholder"
                        onChange={(value, item) => item?.value || value}
                    />

                    <Select
                        multiselect
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
                    <Select items={items} {...registerSingle('region')} />

                    <Select multiselect items={items} {...registerMultiple('region')} />
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
                        render={({ field }) => <Select items={items} {...field} />}
                    />

                    <Controller
                        name="region"
                        control={multipleControl}
                        render={({ field }) => <Select multiselect items={items} {...field} />}
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
                <Select
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
                <Select
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
                <Select
                    multiselect
                    items={items}
                    value={value}
                    onChange={setValue}
                    label="Multiselect"
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
});
