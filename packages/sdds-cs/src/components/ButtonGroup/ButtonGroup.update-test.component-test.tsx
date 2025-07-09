import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

describe('sdds-cs: ButtonGroup', () => {
    const ButtonGroup = getComponent('ButtonGroup');
    const Button = getComponent('Button');

    const getButtons = () => [
        <Button text="Button" />,
        <Button text="Button" />,
        <Button text="Button" />,
        <Button text="Button" />,
        <Button text="Button" />,
    ];

    it('[PLASMA-T1366] ButtonGroup: size=s, view=accent, gap=none', () => {
        mount(
            <CypressTestDecorator>
                <ButtonGroup view="accent" size="s" gap="none">
                    {getButtons()}
                </ButtonGroup>
            </CypressTestDecorator>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1367] ButtonGroup: view=secondary, gap=dense', () => {
        mount(
            <CypressTestDecorator>
                <ButtonGroup view="secondary" gap="dense">
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

    it('[PLASMA-T1369] ButtonGroup: size=s, view=clear, shape=segmented', () => {
        mount(
            <CypressTestDecorator>
                <ButtonGroup view="clear" size="s" shape="segmented">
                    {getButtons()}
                </ButtonGroup>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1370] ButtonGroup: view=accent, stretching=filled', () => {
        mount(
            <CypressTestDecorator>
                <ButtonGroup view="accent" stretching="filled">
                    {getButtons()}
                </ButtonGroup>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1371] ButtonGroup: orientation=vertical', () => {
        mount(
            <CypressTestDecorator>
                <ButtonGroup orientation="vertical">{getButtons()}</ButtonGroup>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1372] ButtonGroup: view=clear', () => {
        mount(
            <CypressTestDecorator>
                <ButtonGroup view="clear" size="s" gap="dense">
                    {getButtons()}
                </ButtonGroup>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
