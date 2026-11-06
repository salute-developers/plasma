import * as React from 'react';
import type { ComponentProps, CSSProperties, FormEventHandler, ReactNode } from 'react';
import { describe, it } from 'node:test';
import { expectTypeOf } from 'expect-type';
import { Checkbox, Form, TextField } from '@salutejs/plasma-b2c';

type FormProps = ComponentProps<typeof Form>;

describe('Basics', () => {
    it('Common', () => {
        expectTypeOf<FormProps>().toHaveProperty('children').toEqualTypeOf<ReactNode>();
    });

    it('Variations', () => {
        type Orientation = NonNullable<FormProps['orientation']>;
        expectTypeOf<Orientation>().toEqualTypeOf<'vertical' | 'horizontal'>();
    });

    it('HTMLFormElement', () => {
        expectTypeOf<FormProps>().toHaveProperty('id').toEqualTypeOf<string | undefined>();
        expectTypeOf<FormProps>().toHaveProperty('className').toEqualTypeOf<string | undefined>();
        expectTypeOf<FormProps>().toHaveProperty('style').toEqualTypeOf<CSSProperties | undefined>();
        expectTypeOf<FormProps>().toHaveProperty('action').toEqualTypeOf<string | undefined>();
        expectTypeOf<FormProps>().toHaveProperty('method').toEqualTypeOf<string | undefined>();
        expectTypeOf<FormProps>().toHaveProperty('noValidate').toEqualTypeOf<boolean | undefined>();
        expectTypeOf<FormProps>().toHaveProperty('autoComplete').toEqualTypeOf<string | undefined>();
        expectTypeOf<FormProps>().toHaveProperty('name').toEqualTypeOf<string | undefined>();
        expectTypeOf<FormProps>()
            .toHaveProperty('onSubmit')
            .toEqualTypeOf<FormEventHandler<HTMLFormElement> | undefined>();
    });
});

describe('Examples', () => {
    it('Vertical form', () => {
        () => {
            return (
                <Form
                    orientation="vertical"
                    onSubmit={(event) => {
                        event.preventDefault();
                    }}
                >
                    <TextField name="name" label="Имя" placeholder="Имя" />
                    <Checkbox name="agreement" label="Согласен с условиями" />
                    <button type="submit">Отправить</button>
                </Form>
            );
        };
    });

    it('Horizontal form', () => {
        () => {
            return (
                <Form orientation="horizontal">
                    <TextField name="name" label="Имя" placeholder="Имя" />
                    <TextField name="email" label="Почта" placeholder="Почта" />
                </Form>
            );
        };
    });
});
