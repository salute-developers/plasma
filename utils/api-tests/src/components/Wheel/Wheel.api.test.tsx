import * as React from 'react';
import type { CSSProperties, ReactNode, Ref } from 'react';
import { describe, it } from 'node:test';
import { expectTypeOf } from 'expect-type';
// Wheel подключён только к DFA и HomeDS: проверяем публичные экспорты этих пакетов.
import { Wheel } from '@salutejs/sdds-dfa';
import { Wheel as HomeDSWheel } from '@salutejs/plasma-homeds';
import type { WheelProps as HomeDSWheelProps } from '@salutejs/plasma-homeds';
import type {
    WheelProps,
    WheelAlignment,
    WheelSeparator,
    WheelSeparatorPreset,
    WheelColumn,
    WheelColumns,
    WheelItem,
    WheelItemState,
} from '@salutejs/sdds-dfa';

type Value = { hours: number; period: 'am' | 'pm' };
type Props = WheelProps<Value>;

describe('Basics', () => {
    it('Common', () => {
        expectTypeOf<Props>().toHaveProperty('columns').toEqualTypeOf<WheelColumns<Value>>();
        expectTypeOf<Props>().toHaveProperty('width').toEqualTypeOf<CSSProperties['width']>();
        expectTypeOf<Props>().toHaveProperty('value').toEqualTypeOf<Value>();
        expectTypeOf<Props>().toHaveProperty('disabled').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<Props>().toHaveProperty('hasControls').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<Props>().toHaveProperty('visibleItemsCount').toEqualTypeOf<3 | 5 | undefined>();
        expectTypeOf<Props>().toHaveProperty('animated').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<Props>().toHaveProperty('align').toEqualTypeOf<WheelAlignment | undefined>();
        expectTypeOf<WheelAlignment>().toEqualTypeOf<'left' | 'center' | 'right' | 'mixed'>();
        expectTypeOf<Props>().toHaveProperty('separator').toEqualTypeOf<WheelSeparator>();
        expectTypeOf<WheelSeparatorPreset>().toEqualTypeOf<'none' | 'dots' | 'divider'>();
        expectTypeOf<WheelSeparator>().toExtend<ReactNode>();
        expectTypeOf<ReactNode>().toExtend<WheelSeparator>();
        expectTypeOf<Props>()
            .toHaveProperty('onChange')
            .toEqualTypeOf<((value: Value, column: keyof Value) => void) | undefined>();
        expectTypeOf<WheelColumn>().toHaveProperty('label').toEqualTypeOf<string>();
        expectTypeOf<WheelColumn>().toHaveProperty('width').toEqualTypeOf<CSSProperties['width']>();
        expectTypeOf<WheelColumn>().toHaveProperty('description').toEqualTypeOf<ReactNode>();
        expectTypeOf<WheelColumn>().toHaveProperty('textAfter').toEqualTypeOf<ReactNode>();
        expectTypeOf<WheelColumn>().toHaveProperty('disabled').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<WheelColumn>().toHaveProperty('loop').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<WheelItemState>().toHaveProperty('selected').toEqualTypeOf<boolean>();
        expectTypeOf<WheelItemState>().toHaveProperty('offset').toEqualTypeOf<-3 | -2 | -1 | 0 | 1 | 2 | 3>();
        expectTypeOf<WheelColumn>()
            .toHaveProperty('renderItem')
            .toEqualTypeOf<((item: WheelItem, state: WheelItemState) => ReactNode) | undefined>();
    });

    it('Variations', () => {
        type Size = NonNullable<Props['size']>;
        type View = NonNullable<Props['view']>;
        expectTypeOf<Size>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<Size>();
        expectTypeOf<View>().toEqualTypeOf<'default'>();
        expectTypeOf<Size>().toEqualTypeOf<
            'displayL' | 'displayM' | 'displayS' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'l' | 'm' | 's'
        >();
        expectTypeOf<HomeDSWheelProps<Value>['size']>().toEqualTypeOf<'h1' | 'h4' | undefined>();
        expectTypeOf<HomeDSWheelProps<Value>['view']>().toEqualTypeOf<'default' | 'highlighted' | undefined>();
        expectTypeOf<React.ComponentProps<typeof Wheel>['size']>().toEqualTypeOf<Props['size']>();
        expectTypeOf<React.ComponentProps<typeof HomeDSWheel>['size']>().toEqualTypeOf<
            HomeDSWheelProps<Value>['size']
        >();
    });

    it('HTMLDivElement', () => {
        expectTypeOf<Props>().toHaveProperty('id').toEqualTypeOf<string | undefined>();
        expectTypeOf<Props>().toHaveProperty('className').toEqualTypeOf<string | undefined>();
        expectTypeOf<Props>().toHaveProperty('style').toEqualTypeOf<CSSProperties | undefined>();
        expectTypeOf<Props>().toHaveProperty('aria-label').toEqualTypeOf<string | undefined>();
        expectTypeOf<Props>()
            .toHaveProperty('onFocus')
            .toEqualTypeOf<React.FocusEventHandler<HTMLDivElement> | undefined>();
        expectTypeOf<React.ComponentProps<typeof Wheel>>()
            .toHaveProperty('ref')
            .toEqualTypeOf<Ref<HTMLDivElement> | undefined>();
    });
});

describe('Unions', () => {
    it('Vertical configurations', () => {
        void (<Wheel value={{ hours: 12 }} columns={[]} size="displayL" view="default" />);
        void (<Wheel value={{ hours: 12 }} columns={[]} size="s" />);
        void (<HomeDSWheel value={{ hours: 12 }} columns={[]} size="h1" view="default" />);
        void (<HomeDSWheel value={{ hours: 12 }} columns={[]} size="h4" view="highlighted" />);
        // @ts-expect-error В DFA доступен только вид default.
        void (<Wheel value={{ hours: 12 }} columns={[]} view="highlighted" />);
        // @ts-expect-error В HomeDS доступны только размеры h1 и h4.
        void (<HomeDSWheel value={{ hours: 12 }} columns={[]} size="m" />);
        // @ts-expect-error В HomeDS нет размера displayL.
        void (<HomeDSWheel value={{ hours: 12 }} columns={[]} size="displayL" />);
        // @ts-expect-error Неизвестный размер DFA.
        void (<Wheel value={{ hours: 12 }} columns={[]} size="xs" />);
    });
    it('Container and column widths', () => {
        expectTypeOf<Props['width']>(640);
        expectTypeOf<Props['width']>('100%');
        expectTypeOf<Props['width']>('calc(100% - 2rem)');
        expectTypeOf<WheelColumn['width']>(0);
        expectTypeOf<WheelColumn['width']>('12rem');
        expectTypeOf<WheelColumn['width']>(undefined);
        void (
            <Wheel
                value={{ hours: 12 }}
                width="100%"
                columns={[{ name: 'hours', label: 'Часы', items: [], width: 160 }]}
            />
        );
        // @ts-expect-error Ширина принимает только число или CSS-строку.
        expectTypeOf<Props['width']>(true);
        // @ts-expect-error Ширина колонки не является объектом стилей.
        expectTypeOf<WheelColumn['width']>({ width: 100 });
    });
    it('Visible item count', () => {
        void (<Wheel value={{ hours: 12 }} columns={[]} visibleItemsCount={3} />);
        void (<Wheel value={{ hours: 12 }} columns={[]} visibleItemsCount={5} />);
        // @ts-expect-error Поддерживаются только 3 и 5 видимых значений.
        void (<Wheel value={{ hours: 12 }} columns={[]} visibleItemsCount={4} />);
        // @ts-expect-error Количество задаётся числом.
        void (<Wheel value={{ hours: 12 }} columns={[]} visibleItemsCount="3" />);
    });
    it('Loop belongs to a column', () => {
        void (<Wheel value={{ hours: 12 }} columns={[{ name: 'hours', label: 'Часы', items: [], loop: true }]} />);
        // @ts-expect-error Зацикливание задаётся отдельно в columns.
        void (<Wheel value={{ hours: 12 }} columns={[]} loop />);
    });
    it('Storybook-only column count', () => {
        // @ts-expect-error columnsCount — только контроль Storybook, количество определяется массивом columns.
        void (<Wheel value={{ hours: 12 }} columns={[]} columnsCount={1} />);
    });
    it('Preset and custom separators', () => {
        expectTypeOf<WheelSeparator>('none');
        expectTypeOf<WheelSeparator>('dots');
        expectTypeOf<WheelSeparator>('divider');
        expectTypeOf<WheelSeparator>('/');
        expectTypeOf<WheelSeparator>(0);
        expectTypeOf<WheelSeparator>(<span>/</span>);
        expectTypeOf<WheelSeparator>(
            <>
                от <b>до</b>
            </>,
        );
        expectTypeOf<WheelSeparator>([<span key="slash">/</span>, '·']);
        expectTypeOf<WheelSeparator>(null);
        expectTypeOf<WheelSeparator>(false);
        expectTypeOf<WheelSeparator>(undefined);
        // @ts-expect-error render-функция не является ReactNode.
        expectTypeOf<WheelSeparator>(() => <span>/</span>);
        // @ts-expect-error Произвольный объект не является ReactNode.
        expectTypeOf<WheelSeparator>({ custom: '/' });
        void (<Wheel value={{ hours: 12 }} columns={[]} separator={<span>/</span>} />);
    });
    it('Alignment', () => {
        expectTypeOf<Props['align']>('left');
        expectTypeOf<Props['align']>('center');
        expectTypeOf<Props['align']>('right');
        expectTypeOf<Props['align']>('mixed');
        // @ts-expect-error Произвольное CSS-значение не входит в API выравнивания.
        expectTypeOf<Props['align']>('justify');
    });
    it('Accessible item content', () => {
        expectTypeOf<WheelItem<number>>({ value: 1, label: 'Один' });
        expectTypeOf<WheelItem<number>>({ value: 1, label: <b>Один</b>, textValue: 'Один' });
        // @ts-expect-error JSX требует текст для скринридера.
        expectTypeOf<WheelItem<number>>({ value: 1, label: <b>Один</b> });
        // @ts-expect-error Тип значения опции сохраняется.
        expectTypeOf<WheelItem<number>>({ value: '1', label: 'Один' });
    });
});

describe('Generics', () => {
    it('HomeDS preserves value and column inference', () => {
        void (
            <HomeDSWheel
                value={{ hours: 12, period: 'am' } as Value}
                columns={[
                    { name: 'hours', label: 'Часы', items: [{ value: 12, label: 12 }] },
                    {
                        name: 'period',
                        label: 'Период',
                        items: [{ value: 'am', label: 'AM' }],
                        renderItem: (item) => {
                            expectTypeOf(item.value).toEqualTypeOf<'am' | 'pm'>();
                            return item.label;
                        },
                    },
                ]}
                onChange={(value, column) => {
                    expectTypeOf(value).toEqualTypeOf<Value>();
                    expectTypeOf(column).toEqualTypeOf<keyof Value>();
                }}
                ref={React.createRef<HTMLDivElement>()}
            />
        );
        const invalidHours = [{ name: 'hours' as const, label: 'Часы', items: [{ value: '12', label: '12' }] }];
        // @ts-expect-error Опции HomeDS также должны соответствовать типу hours из value.
        void (<HomeDSWheel value={{ hours: 12 }} columns={invalidHours} />);
    });
    it('Accepts interfaces without an index signature', () => {
        interface Time {
            hours: number;
            minutes: number;
        }
        const time: Time = { hours: 12, minutes: 30 };
        void (
            <Wheel
                value={time}
                columns={[]}
                onChange={(value) => {
                    expectTypeOf(value).toEqualTypeOf<Time>();
                }}
            />
        );
    });

    it('Column names and values', () => {
        const columns: WheelColumns<Value> = [
            {
                name: 'hours',
                label: 'Часы',
                items: [{ value: 12, label: 12 }],
                renderItem: (item) => {
                    expectTypeOf(item.value).toEqualTypeOf<number>();
                    return item.label;
                },
            },
            { name: 'period', label: 'Период', items: [{ value: 'am', label: 'AM' }] },
        ];
        void (
            <Wheel
                value={{ hours: 12, period: 'am' } as Value}
                columns={columns}
                onChange={(value, column) => {
                    expectTypeOf(value).toEqualTypeOf<Value>();
                    expectTypeOf(column).toEqualTypeOf<keyof Value>();
                }}
            />
        );
        // @ts-expect-error Неизвестное имя столбца.
        void (<Wheel value={{ hours: 12 }} columns={[{ name: 'minutes', label: 'Минуты', items: [] }]} />);
        const invalidHours = [{ name: 'hours' as const, label: 'Часы', items: [{ value: '12', label: '12' }] }];
        // @ts-expect-error Опции не должны расширять тип hours, выведенный из value.
        void (<Wheel value={{ hours: 12 }} columns={invalidHours} />);
        const invalidPeriod = [
            { name: 'period' as const, label: 'Период', items: [{ value: 'night', label: 'Ночь' }] },
        ];
        // @ts-expect-error Период ограничен литералами am и pm.
        expectTypeOf<WheelColumns<Value>>(invalidPeriod);
    });
});

describe('Examples', () => {
    it('Controlled', () => {
        () => {
            const [value, setValue] = React.useState<Value>({ hours: 12, period: 'am' });
            return (
                <Wheel
                    value={value}
                    onChange={setValue}
                    columns={[
                        { name: 'hours', label: 'Часы', textAfter: 'ч', items: [{ value: 12, label: 12 }] },
                        {
                            name: 'period',
                            label: 'Период',
                            items: [
                                { value: 'am', label: 'AM' },
                                { value: 'pm', label: 'PM' },
                            ],
                        },
                    ]}
                    ref={React.createRef<HTMLDivElement>()}
                />
            );
        };
    });
});
