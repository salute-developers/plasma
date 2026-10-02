import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests } from '@salutejs/plasma-cy-utils';

import type { SelectProps } from '../Select/Select.types';
import type { TextFieldProps } from '../TextField/TextField.types';

import type { FormProps } from './Form.types';

const componentExists = hasComponent('Form');
const describeFn = getDescribeFN('Form');

const TextField = getComponent<TextFieldProps>('TextField');
const Select = getComponent<SelectProps>('Select');

const cities = [
    { value: 'moscow', label: 'Москва' },
    { value: 'spb', label: 'Санкт-Петербург' },
];

const fields = [
    <TextField key="name" name="name" label="Имя" placeholder="Имя" />,
    <TextField key="email" name="email" label="Почта" placeholder="Почта" />,
    <Select key="city" name="city" label="Город" placeholder="Город" items={cities} />,
];

getBaseVisualTests({
    component: 'Form',
    componentProps: {},
    children: fields,
    configPropsForMatrix: ['size', 'orientation'],
});

const SizeProbe = ({ size }: { size?: string }) => <output>{size}</output>;

describeFn('Form', () => {
    const Form = componentExists ? getComponent<FormProps>('Form') : () => null;

    it('renders a native form and calls onSubmit', () => {
        const onSubmit = cy.stub().as('onSubmit');

        mount(
            <Form
                onSubmit={(event) => {
                    event.preventDefault();
                    onSubmit();
                }}
            >
                <button type="submit">Отправить</button>
            </Form>,
        );

        cy.get('form').should('exist');
        cy.contains('Отправить').click();
        cy.get('@onSubmit').should('have.been.calledOnce');
    });

    it('passes size to component children', () => {
        mount(
            <Form size="s">
                <SizeProbe />
                <button type="button">Кнопка</button>
            </Form>,
        );

        cy.get('output').should('have.text', 's');
        cy.contains('Кнопка').should('not.have.attr', 'size');
    });
});
