import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { createGlobalStyle } from 'styled-components';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-web: InputGroup', () => {
    const InputGroup = getComponent('InputGroup');
    const TextField = getComponent('TextField');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    const getTexFields = () => [
        <TextField size="l" placeholder="Size 'l'" />,
        <TextField size="m" placeholder="Size 'm'" />,
        <TextField size="s" placeholder="Size 's'" />,
        <TextField size="xs" placeholder="Size 'xs'" />,
    ];

    it('_size', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <InputGroup size="l">{getTexFields()}</InputGroup>
                <PadMe />
                <InputGroup size="m">{getTexFields()}</InputGroup>
                <PadMe />
                <InputGroup size="s">{getTexFields()}</InputGroup>
                <PadMe />
                <InputGroup size="xs">{getTexFields()}</InputGroup>
                <PadMe />
            </CypressTestDecoratorWithTypo>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('_orientation', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <InputGroup orientation="horizontal">{getTexFields()}</InputGroup>
                <PadMe />
                <InputGroup orientation="vertical">{getTexFields()}</InputGroup>
            </CypressTestDecoratorWithTypo>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('_orientation: single text field', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <InputGroup orientation="horizontal">
                    <TextField placeholder="Horizontal" />
                </InputGroup>
                <PadMe />
                <InputGroup orientation="vertical">
                    <TextField placeholder="Vertical" />
                </InputGroup>
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_orientation: stretching - filled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <InputGroup orientation="horizontal" stretching="filled">
                    {getTexFields()}
                </InputGroup>
                <PadMe />
                <InputGroup orientation="vertical" stretching="filled">
                    {getTexFields()}
                </InputGroup>
            </CypressTestDecoratorWithTypo>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('_shape', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('custom text fields', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <InputGroup isCommonInputStyles={false}>{getTexFields()}</InputGroup>
                <PadMe />
                <InputGroup isCommonInputStyles={false} orientation="vertical">
                    {getTexFields()}
                </InputGroup>
            </CypressTestDecoratorWithTypo>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });
});
