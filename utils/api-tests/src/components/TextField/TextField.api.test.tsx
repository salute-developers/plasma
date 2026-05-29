import * as React from 'react';
import type { ComponentProps, ReactNode, CSSProperties, AriaRole, ReactElement, KeyboardEvent } from 'react';
import { useState } from 'react';
import { describe, it } from 'node:test';
import { expectTypeOf } from 'expect-type';
import { TextField } from '@salutejs/plasma-b2c';

type TextFieldProps = ComponentProps<typeof TextField>;

describe('Basics', () => {
    it('Common', () => {
        expectTypeOf<TextFieldProps>().toHaveProperty('label').toEqualTypeOf<string | undefined>();
        expectTypeOf<TextFieldProps>().toHaveProperty('placeholder').toEqualTypeOf<string | undefined>();
        expectTypeOf<TextFieldProps>().toHaveProperty('leftHelper').toEqualTypeOf<ReactNode>();
        expectTypeOf<TextFieldProps>().toHaveProperty('titleCaption').toEqualTypeOf<ReactNode>();
        expectTypeOf<TextFieldProps>().toHaveProperty('contentLeft').toEqualTypeOf<ReactElement | undefined>();
        expectTypeOf<TextFieldProps>().toHaveProperty('contentRight').toEqualTypeOf<ReactElement | undefined>();
        expectTypeOf<TextFieldProps>().toHaveProperty('textBefore').toEqualTypeOf<string | undefined>();
        expectTypeOf<TextFieldProps>().toHaveProperty('textAfter').toEqualTypeOf<string | undefined>();
        expectTypeOf<TextFieldProps>().toHaveProperty('appearance').toEqualTypeOf<'default' | 'clear' | undefined>();
        expectTypeOf<TextFieldProps>().toHaveProperty('disabled').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<TextFieldProps>().toHaveProperty('readOnly').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<TextFieldProps>().toHaveProperty('keepPlaceholder').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<TextFieldProps>().toHaveProperty('required').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<TextFieldProps>()
            .toHaveProperty('requiredPlacement')
            .toEqualTypeOf<'left' | 'right' | undefined>();
        expectTypeOf<TextFieldProps>().toHaveProperty('optional').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<TextFieldProps>().toHaveProperty('optionalText').toEqualTypeOf<string | undefined>();
        expectTypeOf<TextFieldProps>().toHaveProperty('hasRequiredIndicator').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<TextFieldProps>()
            .toHaveProperty('onSearch')
            .toEqualTypeOf<((value: string, event?: KeyboardEvent<HTMLInputElement>) => void) | undefined>();
        expectTypeOf<TextFieldProps>().toHaveProperty('hintText').toEqualTypeOf<string | undefined>();
        expectTypeOf<TextFieldProps>().toHaveProperty('hintTrigger').toEqualTypeOf<'hover' | 'click' | undefined>();
        expectTypeOf<TextFieldProps>().toHaveProperty('hintTargetIcon').toEqualTypeOf<ReactNode>();
        expectTypeOf<TextFieldProps>()
            .toHaveProperty('hintTargetPlacement')
            .toEqualTypeOf<'inner' | 'outer' | undefined>();
        expectTypeOf<TextFieldProps>().toHaveProperty('hintHasArrow').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<TextFieldProps>().toHaveProperty('hintOffset').toEqualTypeOf<[number, number] | undefined>();
        expectTypeOf<TextFieldProps>().toHaveProperty('hintWidth').toEqualTypeOf<string | undefined>();
        expectTypeOf<TextFieldProps>().toHaveProperty('hintContentLeft').toEqualTypeOf<ReactNode>();
    });

    it('Variations', () => {
        type View = NonNullable<TextFieldProps['view']>;
        expectTypeOf<View>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<View>();

        type Size = NonNullable<TextFieldProps['size']>;
        expectTypeOf<Size>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<Size>();

        type LabelPlacement = NonNullable<TextFieldProps['labelPlacement']>;
        expectTypeOf<LabelPlacement>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<LabelPlacement>();

        type HintView = NonNullable<TextFieldProps['hintView']>;
        expectTypeOf<HintView>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<HintView>();

        type HintSize = NonNullable<TextFieldProps['hintSize']>;
        expectTypeOf<HintSize>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<HintSize>();
    });

    it('HTMLInputElement', () => {
        expectTypeOf<TextFieldProps>().toHaveProperty('id').toEqualTypeOf<string | undefined>();
        expectTypeOf<TextFieldProps>().toHaveProperty('className').toEqualTypeOf<string | undefined>();
        expectTypeOf<TextFieldProps>().toHaveProperty('style').toEqualTypeOf<CSSProperties | undefined>();
        expectTypeOf<TextFieldProps>()
            .toHaveProperty('value')
            .toEqualTypeOf<string | number | readonly string[] | undefined>();
        expectTypeOf<TextFieldProps>()
            .toHaveProperty('defaultValue')
            .toEqualTypeOf<string | number | readonly string[] | undefined>();
        expectTypeOf<TextFieldProps>()
            .toHaveProperty('onChange')
            .toEqualTypeOf<React.ChangeEventHandler<HTMLInputElement> | undefined>();
        expectTypeOf<TextFieldProps>()
            .toHaveProperty('onFocus')
            .toEqualTypeOf<React.FocusEventHandler<HTMLInputElement> | undefined>();
        expectTypeOf<TextFieldProps>()
            .toHaveProperty('onBlur')
            .toEqualTypeOf<React.FocusEventHandler<HTMLInputElement> | undefined>();
        expectTypeOf<TextFieldProps>()
            .toHaveProperty('onKeyDown')
            .toEqualTypeOf<React.KeyboardEventHandler<HTMLInputElement> | undefined>();
        expectTypeOf<TextFieldProps>().toHaveProperty('aria-label').toEqualTypeOf<string | undefined>();
        expectTypeOf<TextFieldProps>().toHaveProperty('role').toEqualTypeOf<AriaRole | undefined>();
    });
});

describe('Unions', () => {
    it('ClearProps', () => {
        expectTypeOf<TextFieldProps>({ clear: true, hasDivider: true });
        expectTypeOf<TextFieldProps>({ clear: true, hasDivider: false });
        expectTypeOf<TextFieldProps>({ clear: true });
        // TODO: Неправильная работа юниона ClearProps. Должна быть ошибка.
        expectTypeOf<TextFieldProps>({ hasDivider: true });
    });

    it('HintProps', () => {
        expectTypeOf<TextFieldProps>({ hintText: 'hint' });
        expectTypeOf<TextFieldProps>({ hintText: 'hint', hintTrigger: 'hover' });
        expectTypeOf<TextFieldProps>({ hintText: 'hint', hintHasArrow: true });
        expectTypeOf<TextFieldProps>({ hintText: 'hint', hintOffset: [0, 8] });
        expectTypeOf<TextFieldProps>({ hintText: 'hint', hintWidth: '10rem' });
        expectTypeOf<TextFieldProps>({});
        // @ts-expect-error
        expectTypeOf<TextFieldProps>({ hintTrigger: 'hover' });
        // @ts-expect-error
        expectTypeOf<TextFieldProps>({ hintHasArrow: true });
        // @ts-expect-error
        expectTypeOf<TextFieldProps>({ hintOffset: [0, 8] });
        // @ts-expect-error
        expectTypeOf<TextFieldProps>({ hintWidth: '10rem' });
    });

    it('EnumerationType', () => {
        expectTypeOf<TextFieldProps>({ enumerationType: 'plain' });
        expectTypeOf<TextFieldProps>({ enumerationType: 'chip', chips: ['tag1', 'tag2'] });
        expectTypeOf<TextFieldProps>({
            enumerationType: 'chip',
            chips: ['tag1'],
            onChangeChips: (value) => {},
            chipType: 'default',
        });
        expectTypeOf<TextFieldProps>({
            enumerationType: 'chip',
            chips: ['tag1'],
            chipView: 'secondary',
        });
        expectTypeOf<TextFieldProps>({
            enumerationType: 'chip',
            chips: ['tag1'],
            chipValidator: (value) => ({ view: 'default' }),
        });
        expectTypeOf<TextFieldProps>({
            enumerationType: 'chip',
            chipType: 'text',
        });
        // @ts-expect-error
        expectTypeOf<TextFieldProps>({ enumerationType: 'plain', chips: ['tag1'] });
        // @ts-expect-error
        expectTypeOf<TextFieldProps>({ enumerationType: 'plain', onChangeChips: (value: any[]) => {} });
        // @ts-expect-error
        expectTypeOf<TextFieldProps>({ enumerationType: 'plain', chipType: 'default' });
        // @ts-expect-error
        expectTypeOf<TextFieldProps>({ enumerationType: 'plain', chipView: 'secondary' });
        // @ts-expect-error
        expectTypeOf<TextFieldProps>({ enumerationType: 'plain', chipValidator: (value: string) => ({}) });
    });
});

describe('Complex', () => {
    it('Examples', () => {
        expectTypeOf<TextFieldProps>({
            label: 'Имя',
            placeholder: 'Введите имя',
            leftHelper: 'Обязательное поле',
        });
        expectTypeOf<TextFieldProps>({
            label: 'Email',
            placeholder: 'Введите email',
            leftHelper: 'Некорректный email',
            required: true,
            requiredPlacement: 'right',
        });
        expectTypeOf<TextFieldProps>({
            label: 'Tags',
            enumerationType: 'chip',
            chips: ['tag1', 'tag2'],
            onChangeChips: (values) => {},
        });
        expectTypeOf<TextFieldProps>({
            label: 'С подсказкой',
            hintText: 'Это подсказка',
            hintTrigger: 'hover',
            hintView: 'default',
            hintSize: 's',
        });
        expectTypeOf<TextFieldProps>({
            label: 'Clear',
            appearance: 'clear',
            clear: true,
            hasDivider: true,
        });
        expectTypeOf<TextFieldProps>({
            textBefore: '$',
            textAfter: 'USD',
            placeholder: '0.00',
        });
    });
});

describe('Examples', () => {
    it('Basic', () => {
        () => {
            const [value, setValue] = useState('');

            return (
                <TextField
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    label="Имя"
                    placeholder="Введите имя"
                    leftHelper="Обязательное поле"
                />
            );
        };
    });

    it('With chips', () => {
        () => {
            const [chips, setChips] = useState<Array<string | number | boolean>>(['tag1', 'tag2']);

            return (
                <TextField
                    label="Tags"
                    enumerationType="chip"
                    chips={chips}
                    onChangeChips={setChips}
                    chipType="default"
                />
            );
        };
    });

    it('With hint', () => {
        () => {
            return (
                <TextField
                    label="С подсказкой"
                    hintText="Это подсказка"
                    hintTrigger="hover"
                    hintView="default"
                    hintSize="s"
                    hintHasArrow
                    placeholder="Введите значение"
                />
            );
        };
    });

    it('Clear appearance', () => {
        () => {
            return <TextField label="Clear" appearance="clear" clear hasDivider placeholder="Введите значение" />;
        };
    });

    it('With text decorations', () => {
        () => {
            return <TextField textBefore="$" textAfter="USD" placeholder="0.00" label="Сумма" />;
        };
    });

    it('Disabled and readOnly', () => {
        () => {
            return (
                <>
                    <TextField label="Disabled" disabled value="Нельзя редактировать" />
                    <TextField label="ReadOnly" readOnly value="Только чтение" />
                </>
            );
        };
    });

    it('With onSearch', () => {
        () => {
            return (
                <TextField
                    label="Поиск"
                    placeholder="Введите запрос"
                    onSearch={(value) => {
                        console.log(value);
                    }}
                />
            );
        };
    });
});
