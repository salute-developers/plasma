import React from 'react';
import { CypressTestDecorator, getComponent, mount } from '@salutejs/plasma-cy-utils';
import { IconPlasma } from '@salutejs/plasma-icons';

const Icon = () => <IconPlasma color="inherit" />;
const FIXTURE_PATH = 'images/placeholder.png';
const MULTIPLE_FIXTURE_PATH = [
    'images/placeholder.png',
    'images/parrot.png',
    'images/img.png',
    'images/cat.png',
    'images/avocado.png',
];

const cellRootSelector = '.cell-root';

describe('sdds-insol: Attach', () => {
    const Attach = getComponent('Attach');

    it('[PLASMA-T1542] Attach: size=l, view=default, enableContentLeft, buttonText', () => {
        mount(
            <CypressTestDecorator>
                <Attach view="default" size="l" contentLeft={<Icon />} />
            </CypressTestDecorator>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1543] Attach: size=m, view=accent, enableContentRight, buttonValue', () => {
        mount(
            <CypressTestDecorator>
                <Attach text="" view="accent" size="m" value="buttonValue" contentRight={<Icon />} />
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

    it('[PLASMA-T1545] Attach: size=xs, view=clear', () => {
        mount(
            <CypressTestDecorator>
                <Attach view="clear" size="xs" />
            </CypressTestDecorator>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1546] Attach: view=success, hasAttachment=false', () => {
        mount(
            <CypressTestDecorator>
                <Attach view="success" size="l" hasAttachment={false} />
            </CypressTestDecorator>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('not.be.exist');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1547] Attach: view=warning, flow=horizontal, fileFormat=all', () => {
        mount(
            <CypressTestDecorator>
                <Attach view="warning" size="l" flow="horizontal" fileFormat="all" />
            </CypressTestDecorator>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1548] Attach: view=critical, flow=vertical', () => {
        mount(
            <CypressTestDecorator>
                <Attach view="critical" size="l" flow="vertical" fileFormat="all" />
            </CypressTestDecorator>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1549] Attach: view=dark, flow=auto, width=500px', () => {
        mount(
            <CypressTestDecorator>
                <Attach view="dark" size="l" flow="auto" style={{ width: '500px' }} />
            </CypressTestDecorator>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1550] Attach: view=black, width=250px', () => {
        mount(
            <CypressTestDecorator>
                <Attach view="black" size="l" style={{ width: '250px' }} />
            </CypressTestDecorator>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1551] Attach: view=white, width=0', () => {
        mount(
            <CypressTestDecorator>
                <Attach view="white" size="l" style={{ width: '0px' }} />
            </CypressTestDecorator>,
        );

        cy.get('input').attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1552] Attach: buttonType=iconButton', () => {
        mount(
            <CypressTestDecorator>
                <Attach view="default" size="l" buttonType="iconButton" />
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

    it('multiple=true, flow=horizontal', () => {
        mount(
            <CypressTestDecorator>
                <Attach flow="horizontal" multiple />
            </CypressTestDecorator>,
        );
        cy.get('input').attachFile(MULTIPLE_FIXTURE_PATH);

        cy.matchImageSnapshot();
    });

    it('multiple=true, flow=vertical', () => {
        mount(
            <CypressTestDecorator>
                <Attach flow="vertical" multiple />
            </CypressTestDecorator>,
        );
        cy.get('input').attachFile(MULTIPLE_FIXTURE_PATH);

        cy.matchImageSnapshot();
    });

    it('multiple=true, flow=horizontal, delete first file', () => {
        mount(
            <CypressTestDecorator>
                <Attach flow="horizontal" multiple />
            </CypressTestDecorator>,
        );

        cy.get('input').attachFile(MULTIPLE_FIXTURE_PATH);
        cy.get('.cell-root .cell-content + div').first().click();

        cy.matchImageSnapshot();
    });

    it('multiple=true, flow=horizontal, files in dropdown', () => {
        mount(
            <CypressTestDecorator>
                <Attach flow="horizontal" multiple />
            </CypressTestDecorator>,
        );

        cy.get('input').attachFile(MULTIPLE_FIXTURE_PATH);
        cy.get('.plasma-attach-horizontal + div').first().click();

        cy.matchImageSnapshot();
    });
});
