import React from 'react';
import { CypressTestDecorator, getComponent, mount } from '@salutejs/plasma-cy-utils';
import { IconPlasma } from '@salutejs/plasma-icons';

const Icon = () => <IconPlasma color="inherit" />;
const FIXTURE_PATH = 'images/placeholder.png';
const cellRootSelector = '.cell-root';

describe('sdds-cs: Attach', () => {
    const Attach = getComponent('Attach');

    it('[PLASMA-T1542] Attach: view=default, enableContentLeft, buttonText', () => {
        mount(
            <CypressTestDecorator>
                <Attach view="default" size="s" contentLeft={<Icon />} />
            </CypressTestDecorator>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1543] Attach: view=accent, enableContentRight, buttonValue', () => {
        mount(
            <CypressTestDecorator>
                <Attach text="" view="accent" size="s" value="buttonValue" contentRight={<Icon />} />
            </CypressTestDecorator>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1544] Attach: size=s, view=secondary, enableContentLeft, enableContentRight, buttonText, buttonValue', () => {
        mount(
            <CypressTestDecorator>
                <Attach view="secondary" size="s" value="buttonValue" contentLeft={<Icon />} contentRight={<Icon />} />
            </CypressTestDecorator>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1545] Attach: view=clear', () => {
        mount(
            <CypressTestDecorator>
                <Attach view="clear" size="s" />
            </CypressTestDecorator>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1546] Attach: view=success, hasAttachment=false', () => {
        mount(
            <CypressTestDecorator>
                <Attach view="success" size="s" hasAttachment={false} />
            </CypressTestDecorator>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('not.be.exist');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1547] Attach: view=warning, flow=horizontal, fileFormat=all', () => {
        mount(
            <CypressTestDecorator>
                <Attach view="warning" size="s" flow="horizontal" fileFormat="all" />
            </CypressTestDecorator>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1548] Attach: view=critical, flow=vertical', () => {
        mount(
            <CypressTestDecorator>
                <Attach view="critical" size="s" flow="vertical" fileFormat="all" />
            </CypressTestDecorator>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1549] Attach: view=dark, flow=auto, width=500px', () => {
        mount(
            <CypressTestDecorator>
                <Attach view="dark" size="s" flow="auto" style={{ width: '500px' }} />
            </CypressTestDecorator>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1550] Attach: view=black, width=250px', () => {
        mount(
            <CypressTestDecorator>
                <Attach view="black" size="s" style={{ width: '250px' }} />
            </CypressTestDecorator>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1551] Attach: view=white, width=0', () => {
        mount(
            <CypressTestDecorator>
                <Attach view="white" size="s" style={{ width: '0px' }} />
            </CypressTestDecorator>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1552] Attach: buttonType=iconButton', () => {
        mount(
            <CypressTestDecorator>
                <Attach view="default" size="s" buttonType="iconButton" />
            </CypressTestDecorator>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1297] Attach: remove attached file', () => {
        mount(
            <CypressTestDecorator>
                <Attach flow="horizontal" />
            </CypressTestDecorator>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');
        cy.get('button').last().click();
        cy.get(cellRootSelector).should('not.exist');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1301] filenameTruncation', () => {
        mount(
            <CypressTestDecorator>
                <Attach style={{ width: '0px' }} text="width: 0px" />
            </CypressTestDecorator>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('_hideButtonOnAttach=true', () => {
        mount(
            <CypressTestDecorator>
                <Attach hideButtonOnAttach />
            </CypressTestDecorator>,
        );
        cy.get('input').attachFile(FIXTURE_PATH);

        cy.matchImageSnapshot();
    });
});
