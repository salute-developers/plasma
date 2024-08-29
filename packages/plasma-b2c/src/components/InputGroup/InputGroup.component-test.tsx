import React from 'react';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';

describe('plasma-b2c: InputGroup', () => {
    const InputGroup = getComponent('InputGroup');
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
                <InputGroup size="l">{getTexFields()}</InputGroup>
                <PadMe />
                <InputGroup size="m">{getTexFields()}</InputGroup>
                <PadMe />
                <InputGroup size="s">{getTexFields()}</InputGroup>
                <PadMe />
                <InputGroup size="xs">{getTexFields()}</InputGroup>
                <PadMe />
            </CypressTestDecorator>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('_orientation', () => {
        mount(
            <CypressTestDecorator>
                <InputGroup orientation="horizontal">{getTexFields()}</InputGroup>
                <PadMe />
                <InputGroup orientation="vertical">{getTexFields()}</InputGroup>
            </CypressTestDecorator>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('_orientation: single text field', () => {
        mount(
            <CypressTestDecorator>
                <InputGroup orientation="horizontal">
                    <TextField placegolder="Horizontal" />
                </InputGroup>
                <PadMe />
                <InputGroup orientation="vertical">
                    <TextField placegolder="Vertical" />
                </InputGroup>
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('_orientation: stretching - filled', () => {
        mount(
            <CypressTestDecorator>
                <InputGroup orientation="horizontal" stretching="filled">
                    {getTexFields()}
                </InputGroup>
                <PadMe />
                <InputGroup orientation="vertical" stretching="filled">
                    {getTexFields()}
                </InputGroup>
            </CypressTestDecorator>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('_shape', () => {
        mount(
            <CypressTestDecorator>
                <InputGroup shape="segmented" gap="none">
                    {getTexFields()}
                </InputGroup>
                <PadMe />
                <InputGroup shape="segmented" gap="dense">
                    {getTexFields()}
                </InputGroup>
                <PadMe />
                <InputGroup shape="default" gap="dense">
                    {getTexFields()}
                </InputGroup>
                <PadMe />
                <InputGroup shape="default" gap="wide">
                    {getTexFields()}
                </InputGroup>
                <PadMe />
            </CypressTestDecorator>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('custom text fields', () => {
        mount(
            <CypressTestDecorator>
                <InputGroup isCommonInputStyles={false}>{getTexFields()}</InputGroup>
                <PadMe />
                <InputGroup isCommonInputStyles={false} orientation="vertical">
                    {getTexFields()}
                </InputGroup>
            </CypressTestDecorator>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });
});
