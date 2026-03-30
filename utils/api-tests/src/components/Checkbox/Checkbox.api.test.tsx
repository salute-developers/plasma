import * as React from 'react';
import type { ComponentProps, ReactNode, CSSProperties, AriaRole } from 'react';
import { useState } from 'react';
import { describe, it } from 'vitest';
import { expectTypeOf } from 'expect-type';
import { Checkbox } from '@salutejs/plasma-b2c';

type CheckboxProps = ComponentProps<typeof Checkbox>;

describe('Basics', () => {
    it('Common', () => {
        expectTypeOf<CheckboxProps>().toHaveProperty('label').toEqualTypeOf<ReactNode>();
        expectTypeOf<CheckboxProps>().toHaveProperty('description').toEqualTypeOf<ReactNode>();
        expectTypeOf<CheckboxProps>().toHaveProperty('singleLine').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<CheckboxProps>().toHaveProperty('indeterminate').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<CheckboxProps>().toHaveProperty('focused').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<CheckboxProps>().toHaveProperty('disabled').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<CheckboxProps>().toHaveProperty('checked').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<CheckboxProps>().toHaveProperty('readOnly').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<CheckboxProps>().toHaveProperty('required').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<CheckboxProps>().toHaveProperty('name').toEqualTypeOf<string | undefined>();
        expectTypeOf<CheckboxProps>()
            .toHaveProperty('value')
            .toEqualTypeOf<string | number | readonly string[] | undefined>();
    });

    it('Variations', () => {
        type View = NonNullable<CheckboxProps['view']>;
        expectTypeOf<View>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<View>();

        type Size = NonNullable<CheckboxProps['size']>;
        expectTypeOf<Size>().toExtend<string>();
        expectTypeOf<string>().not.toExtend<Size>();
    });

    it('HTMLInputElement', () => {
        expectTypeOf<CheckboxProps>().toHaveProperty('id').toEqualTypeOf<string | undefined>();
        expectTypeOf<CheckboxProps>().toHaveProperty('className').toEqualTypeOf<string | undefined>();
        expectTypeOf<CheckboxProps>().toHaveProperty('style').toEqualTypeOf<CSSProperties | undefined>();
        expectTypeOf<CheckboxProps>()
            .toHaveProperty('onChange')
            .toEqualTypeOf<React.ChangeEventHandler<HTMLInputElement> | undefined>();
        expectTypeOf<CheckboxProps>()
            .toHaveProperty('onFocus')
            .toEqualTypeOf<React.FocusEventHandler<HTMLInputElement> | undefined>();
        expectTypeOf<CheckboxProps>()
            .toHaveProperty('onBlur')
            .toEqualTypeOf<React.FocusEventHandler<HTMLInputElement> | undefined>();
        expectTypeOf<CheckboxProps>().toHaveProperty('aria-label').toEqualTypeOf<string | undefined>();
        expectTypeOf<CheckboxProps>().toHaveProperty('role').toEqualTypeOf<AriaRole | undefined>();
    });
});

describe('Complex', () => {
    it('Examples', () => {
        expectTypeOf<CheckboxProps>({ label: 'Согласен с условиями' });
        expectTypeOf<CheckboxProps>({ label: 'Пункт', description: 'Описание пункта' });
        expectTypeOf<CheckboxProps>({ label: 'Пункт', description: 'Описание', singleLine: true });
        expectTypeOf<CheckboxProps>({ label: 'Частично', indeterminate: true });
        expectTypeOf<CheckboxProps>({ label: 'Неактивен', disabled: true, checked: true });
    });
});

describe('Examples', () => {
    it('Controlled', () => {
        () => {
            const [checked, setChecked] = useState(false);

            return (
                <Checkbox
                    label="Согласен с условиями"
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                />
            );
        };
    });

    it('With description', () => {
        () => {
            return <Checkbox label="Получать уведомления" description="На почту и в приложение" />;
        };
    });

    it('Indeterminate', () => {
        () => {
            return <Checkbox label="Выбрать все" indeterminate />;
        };
    });

    it('Disabled', () => {
        () => {
            return <Checkbox label="Неактивный" disabled checked />;
        };
    });

    it('SingleLine', () => {
        () => {
            return <Checkbox label="Длинный заголовок" description="Длинное описание" singleLine />;
        };
    });
});
