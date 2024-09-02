import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { createGlobalStyle } from 'styled-components';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-web: TextFieldGroup', () => {
    const TextFieldGroup = getComponent('TextFieldGroup');
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
                <TextFieldGroup size="l">{getTexFields()}</TextFieldGroup>
                <PadMe />
                <TextFieldGroup className="m-group" size="m">
                    {getTexFields()}
                </TextFieldGroup>
                <PadMe />
                <TextFieldGroup size="s">{getTexFields()}</TextFieldGroup>
                <PadMe />
                <TextFieldGroup size="xs">{getTexFields()}</TextFieldGroup>
                <PadMe />
            </CypressTestDecoratorWithTypo>,
        );

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(100);
        cy.get('.m-group input').last().click();

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('_orientation', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <TextFieldGroup orientation="horizontal">{getTexFields()}</TextFieldGroup>
                <PadMe />
                <TextFieldGroup orientation="vertical">{getTexFields()}</TextFieldGroup>
            </CypressTestDecoratorWithTypo>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('_orientation: single text field', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <TextFieldGroup orientation="horizontal">
                    <TextField placeholder="Horizontal" />
                </TextFieldGroup>
                <PadMe />
                <TextFieldGroup orientation="vertical">
                    <TextField placeholder="Vertical" />
                </TextFieldGroup>
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_orientation: stretching - filled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <TextFieldGroup orientation="horizontal" stretching="filled">
                    {getTexFields()}
                </TextFieldGroup>
                <PadMe />
                <TextFieldGroup className="vertical-group" orientation="vertical" stretching="filled">
                    {getTexFields()}
                </TextFieldGroup>
            </CypressTestDecoratorWithTypo>,
        );

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(100);
        cy.get('.vertical-group input').first().click();

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('_shape', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <TextFieldGroup shape="segmented" gap="none">
                    {getTexFields()}
                </TextFieldGroup>
                <PadMe />
                <TextFieldGroup className="segmented-group" shape="segmented" gap="dense">
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
            </CypressTestDecoratorWithTypo>,
        );

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(100);
        cy.get('.segmented-group input').last().click();

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('custom text fields', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <TextFieldGroup isCommonTextFieldStyles={false}>{getTexFields()}</TextFieldGroup>
                <PadMe />
                <TextFieldGroup isCommonTextFieldStyles={false} orientation="vertical">
                    {getTexFields()}
                </TextFieldGroup>
            </CypressTestDecoratorWithTypo>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });
});
