import React from 'react';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';

describe('plasma-b2c: TextFieldGroup', () => {
    const TextFieldGroup = getComponent('TextFieldGroup');
    const TextField = getComponent('TextField');

    const getTexFields = () => [
        <TextField size="l" placeholder="Size 'l'" />,
        <TextField size="m" placeholder="Size 'm'" />,
        <TextField size="s" placeholder="Size 's'" />,
        <TextField size="xs" placeholder="Size 'xs'" />,
    ];

    it('_size', () => {
        mount(
            <CypressTestDecorator>
                <TextFieldGroup size="l">{getTexFields()}</TextFieldGroup>
                <PadMe />
                <TextFieldGroup size="m">{getTexFields()}</TextFieldGroup>
                <PadMe />
                <TextFieldGroup size="s">{getTexFields()}</TextFieldGroup>
                <PadMe />
                <TextFieldGroup size="xs">{getTexFields()}</TextFieldGroup>
                <PadMe />
            </CypressTestDecorator>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('_orientation', () => {
        mount(
            <CypressTestDecorator>
                <TextFieldGroup orientation="horizontal">{getTexFields()}</TextFieldGroup>
                <PadMe />
                <TextFieldGroup orientation="vertical">{getTexFields()}</TextFieldGroup>
            </CypressTestDecorator>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('_orientation: single text field', () => {
        mount(
            <CypressTestDecorator>
                <TextFieldGroup orientation="horizontal">
                    <TextField placeholder="Horizontal" />
                </TextFieldGroup>
                <PadMe />
                <TextFieldGroup orientation="vertical">
                    <TextField placeholder="Vertical" />
                </TextFieldGroup>
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('_orientation: stretching - filled', () => {
        mount(
            <CypressTestDecorator>
                <TextFieldGroup orientation="horizontal" stretching="filled">
                    {getTexFields()}
                </TextFieldGroup>
                <PadMe />
                <TextFieldGroup orientation="vertical" stretching="filled">
                    {getTexFields()}
                </TextFieldGroup>
            </CypressTestDecorator>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('_shape', () => {
        mount(
            <CypressTestDecorator>
                <TextFieldGroup shape="segmented" gap="none">
                    {getTexFields()}
                </TextFieldGroup>
                <PadMe />
                <TextFieldGroup shape="segmented" gap="dense">
                    {getTexFields()}
                </TextFieldGroup>
                <PadMe />
                <TextFieldGroup shape="default" gap="dense">
                    {getTexFields()}
                </TextFieldGroup>
                <PadMe />
                <TextFieldGroup shape="default" gap="wide">
                    {getTexFields()}
                </TextFieldGroup>
                <PadMe />
            </CypressTestDecorator>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('custom text fields', () => {
        mount(
            <CypressTestDecorator>
                <TextFieldGroup isCommonTextFieldStyles={false}>{getTexFields()}</TextFieldGroup>
                <PadMe />
                <TextFieldGroup isCommonTextFieldStyles={false} orientation="vertical">
                    {getTexFields()}
                </TextFieldGroup>
            </CypressTestDecorator>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });
});
