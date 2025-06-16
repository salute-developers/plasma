import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

describe('plasma-giga: ButtonGroup', () => {
    const ButtonGroup = getComponent('ButtonGroup');
    const Button = getComponent('Button');

    const getButtons = () => [
        <Button text="Button" />,
        <Button text="Button" />,
        <Button text="Button" />,
        <Button text="Button" />,
        <Button text="Button" />,
    ];

    it('[PLASMA-T1366] ButtonGroup: size=l, view=default, gap=none', () => {
        mount(
            <CypressTestDecorator>
                <ButtonGroup view="default" size="l" gap="none">
                    {getButtons()}
                </ButtonGroup>
            </CypressTestDecorator>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1367] ButtonGroup: size=m, view=default, gap=dense', () => {
        mount(
            <CypressTestDecorator>
                <ButtonGroup view="default" size="m" gap="dense">
                    {getButtons()}
                </ButtonGroup>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1368] ButtonGroup: size=s, view=secondary, gap=wide', () => {
        mount(
            <CypressTestDecorator>
                <ButtonGroup view="secondary" size="s" gap="wide">
                    {getButtons()}
                </ButtonGroup>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1369] ButtonGroup: size=xs, view=success, shape=segmented', () => {
        mount(
            <CypressTestDecorator>
                <ButtonGroup view="success" size="xs" shape="segmented">
                    {getButtons()}
                </ButtonGroup>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1370] ButtonGroup: size=xxs, view=warning, stretching=filled', () => {
        mount(
            <CypressTestDecorator>
                <ButtonGroup view="warning" size="xxs" stretching="filled">
                    {getButtons()}
                </ButtonGroup>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1371] ButtonGroup: size=l, view=critical, orientation=vertical', () => {
        mount(
            <CypressTestDecorator>
                <ButtonGroup view="critical" size="l" orientation="vertical">
                    {getButtons()}
                </ButtonGroup>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1372] ButtonGroup: view=clear', () => {
        mount(
            <CypressTestDecorator>
                <ButtonGroup view="clear" size="m" gap="dense">
                    {getButtons()}
                </ButtonGroup>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
