import React from 'react';
import {
    mount,
    getComponent,
    getDescribeFN,
    hasComponent,
    getBaseVisualTests,
    skipForPackages,
    PadMe,
} from '@salutejs/plasma-cy-utils';

import type { TextFieldProps } from '../TextField/TextField.types';

import type { TextFieldGroupProps } from './TextFieldGroup.types';

const componentExists = hasComponent('TextFieldGroup');
const describeFn = getDescribeFN('TextFieldGroup');
const itSkip = skipForPackages(['sdds-os', 'sdds-platform-ai', 'sdds-scan']);

const TextField = getComponent<TextFieldProps>('TextField');

const getTexFields = () => [
    <TextField key="l" size="l" placeholder="Size 'l'" />,
    <TextField key="m" size="m" placeholder="Size 'm'" />,
    <TextField key="s" size="s" placeholder="Size 's'" />,
    <TextField key="xs" size="xs" placeholder="Size 'xs'" />,
];

const getCommonTexFields = () => [
    <TextField placeholder="Input #1" />,
    <TextField placeholder="Input #2" />,
    <TextField placeholder="Input #3" />,
    <TextField placeholder="Input #4" />,
];

const componentProps = {
    children: getCommonTexFields(),
};

getBaseVisualTests({
    component: 'TextFieldGroup',
    componentProps,
    configPropsForMatrix: ['size', 'orientation', 'gap', 'shape', 'stretching'],
});

describeFn('TextFieldGroup', () => {
    const TextFieldGroup = componentExists ? getComponent<TextFieldGroupProps>('TextFieldGroup') : () => null;

    it('orientation, shape, stretching', () => {
        cy.viewport(1200, 600);

        mount(
            <>
                <TextFieldGroup orientation="horizontal" shape="default" stretching="filled">
                    {getCommonTexFields()}
                </TextFieldGroup>
                <PadMe />
                <TextFieldGroup className="vertical-group" orientation="vertical" shape="segmented" stretching="auto">
                    {getCommonTexFields()}
                </TextFieldGroup>
            </>,
        );

        cy.get('.vertical-group input').first().click();

        cy.matchImageSnapshot();
    });

    itSkip('custom text fields', () => {
        cy.viewport(1200, 600);

        mount(
            <>
                <TextFieldGroup isCommonTextFieldStyles={false}>{getTexFields()}</TextFieldGroup>
                <PadMe />
                <TextFieldGroup isCommonTextFieldStyles={false} orientation="vertical">
                    {getTexFields()}
                </TextFieldGroup>
            </>,
        );

        cy.matchImageSnapshot();
    });
});
