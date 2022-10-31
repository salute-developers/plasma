import React from 'react';
import { mount, CypressTestDecorator, getComponent, PadMe, Portal } from '@salutejs/plasma-cy-utils';

const noop = () => {};

const dragAndDrop = (chainableSelector: Cypress.Chainable, coord: { clientX: number; clientY: number }) => {
    chainableSelector.trigger('mousedown').trigger('mousemove', coord).trigger('mouseup');
};

describe('plasma-b2c: Slider', () => {
    const Slider = getComponent('Slider');
    const Badge = getComponent('Badge');
    const sliderThumbSelector = 'div > div + div > div';

    it('default', () => {
        mount(
            <CypressTestDecorator>
                <Slider value={42} min={0} max={100} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('default: focus', () => {
        mount(
            <CypressTestDecorator>
                <Slider value={24} min={0} max={100} />
            </CypressTestDecorator>,
        );

        cy.get(sliderThumbSelector).focus();

        cy.matchImageSnapshot();
    });

    it('with portal', () => {
        const PORTAL_ROOT_ID = 'portal-root';

        mount(
            <CypressTestDecorator>
                <>
                    <div id={PORTAL_ROOT_ID}>
                        <Badge view="primary" text="Slider in Portal" />
                    </div>
                    <Portal id={PORTAL_ROOT_ID}>
                        <Slider value={30} min={0} max={100} />
                    </Portal>
                </>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_disabled', () => {
        mount(
            <CypressTestDecorator>
                <Slider disabled value={42} min={0} max={100} />
            </CypressTestDecorator>,
        );

        cy.get(sliderThumbSelector).focus();

        cy.matchImageSnapshot();
    });

    it('double', () => {
        mount(
            <CypressTestDecorator>
                <Slider value={[13, 42]} min={0} max={100} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('drag and drop with single', () => {
        mount(
            <CypressTestDecorator>
                <Slider onChange={noop} onChangeCommitted={noop} value={50} min={0} max={100} />
            </CypressTestDecorator>,
        );

        dragAndDrop(cy.root(), { clientX: 350, clientY: 15 });

        cy.root().click(270, 15);

        cy.matchImageSnapshot();
    });

    it('drag and drop without onChange', () => {
        mount(
            <CypressTestDecorator>
                <Slider onChangeCommitted={noop} value={[0, 50]} min={0} max={100} />
                <PadMe />
                <Slider onChangeCommitted={noop} value={50} min={0} max={100} />
            </CypressTestDecorator>,
        );

        dragAndDrop(cy.root().get('div > div + div').first(), { clientX: 50, clientY: 15 });

        cy.root().click(350, 15);

        cy.root().click(350, 45);

        cy.matchImageSnapshot();
    });

    it('drag and drop with double', () => {
        mount(
            <CypressTestDecorator>
                <Slider onChange={noop} onChangeCommitted={noop} value={[25, 75]} min={0} max={100} />
            </CypressTestDecorator>,
        );

        dragAndDrop(cy.root().get('div > div + div').first(), { clientX: 50, clientY: 15 });

        dragAndDrop(cy.root().get('div > div + div').last(), { clientX: 450, clientY: 15 });

        cy.matchImageSnapshot();
    });
});
